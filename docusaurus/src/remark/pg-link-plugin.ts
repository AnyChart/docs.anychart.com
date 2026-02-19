/**
 * Remark plugin for AnyChart {pg:...}...{pg} directive.
 *
 * Transforms:
 *   {pg:gallery/Graphics/Galaxy-plain}galaxy{pg}
 *   {pg:docs/samples/quick_start_pie-plain}basic AnyChart chart{pg}
 *
 * Into a link to playground.anychart.com
 */
import {visit} from 'unist-util-visit';

const PG_REGEX = /\{pg:([^}]+)\}([^{]*)\{pg\}/g;

function remarkPgLinkPlugin() {
  return (tree: any) => {
    visit(tree, 'text', (node: any, index: number | undefined, parent: any) => {
      if (!parent || index === undefined) return;
      const value: string = node.value;
      if (!value.includes('{pg:')) return;

      const parts: any[] = [];
      let lastIndex = 0;

      PG_REGEX.lastIndex = 0;
      let match;
      while ((match = PG_REGEX.exec(value)) !== null) {
        const [fullMatch, location, text] = match;
        const matchStart = match.index;

        if (matchStart > lastIndex) {
          parts.push({type: 'text', value: value.slice(lastIndex, matchStart)});
        }

        const url = `https://playground.anychart.com/${location}`;

        parts.push({
          type: 'link',
          url,
          title: text,
          children: [{type: 'text', value: text}],
          data: {
            hProperties: {
              target: '_blank',
              rel: 'noopener',
            },
          },
        });

        lastIndex = matchStart + fullMatch.length;
      }

      if (parts.length === 0) return;

      if (lastIndex < value.length) {
        parts.push({type: 'text', value: value.slice(lastIndex)});
      }

      parent.children.splice(index, 1, ...parts);
    });
  };
}

export default remarkPgLinkPlugin;
