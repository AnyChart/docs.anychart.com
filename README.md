# docs.anychart.com

Documentation site for the [AnyChart](https://www.anychart.com/) JavaScript charting library, built with [Docusaurus 3](https://docusaurus.io/).

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
npm run prepare-samples   # copies sample HTML files into static/samples/
```

## Development

### Docusaurus dev server (docs browsing only)

```bash
npm start
```

Opens a local dev server at `http://localhost:3000` with hot reload. The community edit feature is **not** available in this mode — it requires the Express server (see below).

### Full stack with community editing

```bash
# 1. Build the Docusaurus site first
npm run build

# 2. Configure the server
cp server/.env.example server/.env
# Edit server/.env — fill in your GitHub OAuth credentials (see "GitHub OAuth Setup" below)

# 3. Install server dependencies
cd server && npm install && cd ..

# 4. Start the Express server
node server/index.mjs
```

The server runs at `http://localhost:3001` and serves the built site + OAuth + edit API.

## Production Build

```bash
npm run build
```

Generates static output into `build/`.

## Project Structure

```
docs/           421 migrated markdown pages
src/            components, theme overrides, CSS
scripts/        migration & sample preparation scripts
static/         images, generated samples, edit page
static/edit/    community edit page (CodeMirror 6 editor)
samples/        1607 source HTML sample files
server/         Express server (OAuth, edit API, static serving)
server/lib/     github.mjs (GitHub API), preprocess.mjs (directive translation)
server/routes/  auth.mjs (OAuth flow), api.mjs (content & suggest endpoints)
config.toml     AnyChart version config (used by prepare-samples)
```

## Community Edit System

The site includes a "Suggest Changes" feature that lets community users propose edits to documentation pages via GitHub pull requests — all without cloning the repo.

### How it works

1. User clicks "Suggest Changes" on any doc page
2. They log in with GitHub OAuth at `/auth/github`
3. The edit page (`/edit?path=docs/...`) loads the file content
4. A **CodeMirror 6** markdown editor shows the content with directives preprocessed into readable form (no raw `{api:}` tags, no YAML frontmatter, no `{{branch-name}}`)
5. User edits and submits
6. Server reverse-preprocesses the content, applies a line-level merge against the original to produce a **clean diff**, then creates a fork + branch + commit + PR on the user's behalf

### Preprocessing pipeline

The docs use custom directives (`{api:target}text{api}`, `{sample}NAME{sample}`, `{pg:location}text{pg}`, `{{branch-name}}`) that community users shouldn't need to understand. The edit system translates these:

| Direction | Transform |
|-----------|-----------|
| Load (preprocess) | `{api:anychart#graph}anychart.graph(){api}` → `[anychart.graph()](https://api.anychart.com/anychart#graph)` |
| Load (preprocess) | `{sample}BCT_Line_01{sample}` → `<!-- sample: BCT_Line_01 -->` |
| Load (preprocess) | `{{branch-name}}` → `8.14.1` |
| Load (preprocess) | `{pg:path}text{pg}` → `[text](https://playground.anychart.com/path)` |
| Load (preprocess) | YAML frontmatter → stripped (stored separately) |
| Save (reverse) | All transforms reversed; frontmatter re-added |
| Save (merge) | Line-by-line merge with original — only user's actual changes appear in the PR diff |

### Key files

| File | Purpose |
|------|---------|
| `static/edit/index.html` | Edit page UI — CodeMirror 6 editor loaded via ESM import map from esm.sh |
| `server/lib/preprocess.mjs` | `preprocessForEditor()`, `reversePreprocess()`, `mergeByLines()` |
| `server/routes/api.mjs` | `GET /api/content` (fetch + preprocess), `POST /api/suggest` (reverse + merge + PR) |
| `server/lib/github.mjs` | GitHub API: fork management, branch creation, commits, PRs |
| `server/routes/auth.mjs` | GitHub OAuth flow (`/auth/github`, `/auth/callback`, `/auth/user`, `/auth/logout`) |

### API endpoints

#### `GET /api/content?path=docs/basic-charts/line-chart.md`

Requires auth. Returns:

```json
{
  "path": "docs/basic-charts/line-chart.md",
  "content": "# Line Chart\n\nPreprocessed markdown without frontmatter...",
  "frontmatter": "---\nslug: \"/Basic_Charts/Line_Chart\"\nsidebar_position: 1.10\n---\n",
  "rawContent": "---\nslug: ...\n---\n# Line Chart\n\nOriginal source with {api:} directives..."
}
```

#### `POST /api/suggest`

Requires auth. Body:

```json
{
  "path": "docs/basic-charts/line-chart.md",
  "content": "edited preprocessed content",
  "frontmatter": "---\nslug: ...\n---\n",
  "rawContent": "original raw source",
  "description": "Fixed typo in chart configuration example"
}
```

Returns `{ "success": true, "pr_url": "https://github.com/...", "pr_number": 123 }`.

## GitHub OAuth Setup

To enable community editing locally:

1. Go to https://github.com/settings/developers
2. Create a new **OAuth App**
3. Set **Authorization callback URL** to `http://localhost:3001/auth/callback`
4. Copy the Client ID and Client Secret into `server/.env`:

```env
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
SESSION_SECRET=any_random_string_for_dev
```

For production, set the callback URL to `https://docs.anychart.com/auth/callback`.
