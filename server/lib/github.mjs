import { Octokit } from '@octokit/rest';

// Read at call time (not import time) so dotenv has loaded
function cfg() {
  return {
    owner: process.env.GITHUB_OWNER || 'AnyChart',
    repo: process.env.GITHUB_REPO || 'docs.anychart.com',
    baseBranch: process.env.GITHUB_BASE_BRANCH || 'develop',
  };
}

/**
 * Create an Octokit instance authenticated with the user's OAuth token.
 */
export function createOctokit(token) {
  return new Octokit({ auth: token });
}

/**
 * Ensure the user has a fork of the upstream repo.
 * If a fork exists, syncs it with upstream. If not, creates one.
 * Returns the fork owner (username).
 */
export async function ensureFork(octokit, username) {
  const { owner, repo } = cfg();
  let forkExists = false;

  // Check if user already has a fork
  try {
    const { data: repoData } = await octokit.rest.repos.get({
      owner: username,
      repo,
    });

    if (repoData.fork && repoData.parent?.full_name === `${owner}/${repo}`) {
      forkExists = true;
    }
  } catch (err) {
    if (err.status !== 404) throw err;
  }

  if (!forkExists) {
    // Create fork (all branches, so non-default branches like gogin-AI-refactor are included)
    await octokit.rest.repos.createFork({ owner, repo });

    // Wait for fork repo to become accessible
    await waitForFork(octokit, username);
  }

  // Ensure the target branch exists on the fork (may not if fork is old or branch is non-default)
  await ensureBranch(octokit, username);

  return username;
}

/**
 * Poll until a newly created fork is accessible (repo exists).
 */
async function waitForFork(octokit, username, maxAttempts = 15) {
  const { repo } = cfg();
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await octokit.rest.repos.get({ owner: username, repo });
      return; // Fork is ready
    } catch {
      if (i < maxAttempts - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }
  throw new Error('Fork creation timed out. Please try again.');
}

/**
 * Ensure the target branch exists on the user's fork.
 * If it doesn't (e.g., non-default branch, or old fork), create it from upstream.
 * If it does, sync it with upstream.
 */
async function ensureBranch(octokit, username) {
  const { owner, repo, baseBranch } = cfg();

  // Check if branch exists on the fork
  try {
    await octokit.rest.git.getRef({
      owner: username,
      repo,
      ref: `heads/${baseBranch}`,
    });

    // Branch exists — try to sync with upstream
    try {
      await octokit.request('POST /repos/{owner}/{repo}/merge-upstream', {
        owner: username,
        repo,
        branch: baseBranch,
      });
    } catch (err) {
      console.warn(`Fork sync warning for ${username}: ${err.message}`);
    }
    return;
  } catch (err) {
    if (err.status !== 404) throw err;
    // Branch doesn't exist on fork — create it from upstream
  }

  // Get the SHA of the branch from upstream
  const { data: upstreamRef } = await octokit.rest.git.getRef({
    owner,
    repo,
    ref: `heads/${baseBranch}`,
  });

  // Create the branch on the fork
  await octokit.rest.git.createRef({
    owner: username,
    repo,
    ref: `refs/heads/${baseBranch}`,
    sha: upstreamRef.object.sha,
  });
}

/**
 * Create a new branch on the user's fork from the base branch.
 * Returns the branch name.
 */
export async function createBranch(octokit, username, filePath) {
  const { repo, baseBranch } = cfg();

  // Get the SHA of the base branch on the fork
  const { data: ref } = await octokit.rest.git.getRef({
    owner: username,
    repo,
    ref: `heads/${baseBranch}`,
  });

  const timestamp = Date.now();
  const slug = filePath
    .replace(/^docs\//, '')
    .replace(/\.md$/, '')
    .replace(/\//g, '-')
    .slice(0, 40);
  const branchName = `docs-edit-${timestamp}-${slug}`;

  await octokit.rest.git.createRef({
    owner: username,
    repo,
    ref: `refs/heads/${branchName}`,
    sha: ref.object.sha,
  });

  return branchName;
}

/**
 * Commit an edited file to a branch on the user's fork.
 */
export async function commitFile(octokit, username, branchName, filePath, content, description) {
  const { repo } = cfg();

  // Get the current file SHA (needed for update)
  const { data: existingFile } = await octokit.rest.repos.getContent({
    owner: username,
    repo,
    path: filePath,
    ref: branchName,
  });

  // Get user info for commit author
  const { data: user } = await octokit.rest.users.getAuthenticated();

  await octokit.rest.repos.createOrUpdateFileContents({
    owner: username,
    repo,
    path: filePath,
    message: `docs: ${description}`,
    content: Buffer.from(content).toString('base64'),
    sha: existingFile.sha,
    branch: branchName,
    committer: {
      name: user.name || user.login,
      email: user.email || `${user.id}+${user.login}@users.noreply.github.com`,
    },
    author: {
      name: user.name || user.login,
      email: user.email || `${user.id}+${user.login}@users.noreply.github.com`,
    },
  });
}

/**
 * Create a pull request from the user's fork branch to the upstream repo.
 * Returns { prUrl, prNumber }.
 */
export async function createPR(octokit, username, branchName, filePath, description) {
  const { owner, repo, baseBranch } = cfg();

  const prBody = [
    '## Community Edit',
    '',
    `**File:** \`${filePath}\``,
    `**Description:** ${description}`,
    '',
    '---',
    '*This PR was created via the [AnyChart documentation editor](https://docs.anychart.com).*',
  ].join('\n');

  const { data: pr } = await octokit.rest.pulls.create({
    owner,
    repo,
    title: `Docs: ${description}`,
    body: prBody,
    head: `${username}:${branchName}`,
    base: baseBranch,
    maintainer_can_modify: true,
  });

  // Try to add label
  try {
    await octokit.rest.issues.addLabels({
      owner,
      repo,
      issue_number: pr.number,
      labels: ['community-edit'],
    });
  } catch {
    // Label may not exist — that's fine
  }

  return {
    success: true,
    pr_url: pr.html_url,
    pr_number: pr.number,
  };
}

/**
 * Fetch file content from the upstream repo via GitHub API.
 * Returns { path, content }.
 */
export async function fetchContent(octokit, filePath) {
  const { owner, repo, baseBranch } = cfg();

  const { data } = await octokit.rest.repos.getContent({
    owner,
    repo,
    path: filePath,
    ref: baseBranch,
  });

  const content = Buffer.from(data.content, 'base64').toString('utf-8');
  return { path: filePath, content };
}

/**
 * Full edit submission flow: fork → sync → branch → commit → PR.
 * Orchestrates all steps.
 */
export async function submitEdit(token, { path, content, description }) {
  const octokit = createOctokit(token);

  // Get user identity
  const { data: user } = await octokit.rest.users.getAuthenticated();
  const username = user.login;

  // 1. Ensure fork exists and is synced
  await ensureFork(octokit, username);

  // 2. Create branch on fork
  const branchName = await createBranch(octokit, username, path);

  // 3. Commit the edited file
  await commitFile(octokit, username, branchName, path, content, description);

  // 4. Open PR
  const result = await createPR(octokit, username, branchName, path, description);

  return result;
}
