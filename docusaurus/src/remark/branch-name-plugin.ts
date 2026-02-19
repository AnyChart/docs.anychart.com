/**
 * Remark plugin for {{branch-name}} template variable replacement.
 *
 * Replaces all occurrences of {{branch-name}} with the configured version
 * string (e.g., "8.14.1") at build time.
 *
 * Usage in docusaurus.config.ts:
 *   [remarkBranchNamePlugin, { version: '8.14.1' }]
 */
import {visit} from 'unist-util-visit';

interface BranchNameOptions {
  version?: string;
}

function remarkBranchNamePlugin(options: BranchNameOptions = {}) {
  const version = options.version || process.env.ANYCHART_VERSION || '{{branch-name}}';

  return (tree: any) => {
    visit(tree, (node: any) => {
      // Replace in text nodes
      if (node.type === 'text' && typeof node.value === 'string') {
        node.value = node.value.replace(/\{\{branch-name\}\}/g, version);
      }
      // Replace in inline code
      if (node.type === 'inlineCode' && typeof node.value === 'string') {
        node.value = node.value.replace(/\{\{branch-name\}\}/g, version);
      }
      // Replace in code blocks
      if (node.type === 'code' && typeof node.value === 'string') {
        node.value = node.value.replace(/\{\{branch-name\}\}/g, version);
      }
      // Replace in HTML nodes
      if (node.type === 'html' && typeof node.value === 'string') {
        node.value = node.value.replace(/\{\{branch-name\}\}/g, version);
      }
      // Replace in link URLs
      if (node.type === 'link' && typeof node.url === 'string') {
        node.url = node.url.replace(/\{\{branch-name\}\}/g, version);
      }
      // Replace in image URLs
      if (node.type === 'image' && typeof node.url === 'string') {
        node.url = node.url.replace(/\{\{branch-name\}\}/g, version);
      }
    });
  };
}

export default remarkBranchNamePlugin;
