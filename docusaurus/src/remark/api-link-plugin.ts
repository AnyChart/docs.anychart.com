/**
 * Remark plugin for AnyChart {api:...}...{api} directive.
 *
 * Transforms:
 *   {api:anychart.core.cartesian.series.Line}anychart.core.cartesian.series.Line{api}
 *   {api:anychart.charts.Cartesian#area}area(){api}
 *   {api:anychart#area}anychart.area(){api}
 *
 * Into: <ApiLink target="..." /> which renders as a link to api.anychart.com
 */
import {visit} from 'unist-util-visit';

const API_REGEX = /\{api:([^}]+)\}([^{]*)\{api\}/g;

function remarkApiLinkPlugin() {
  return (tree: any) => {
    visit(tree, 'text', (node: any, index: number | undefined, parent: any) => {
      if (!parent || index === undefined) return;
      const value: string = node.value;
      if (!value.includes('{api:')) return;

      const parts: any[] = [];
      let lastIndex = 0;

      API_REGEX.lastIndex = 0;
      let match;
      while ((match = API_REGEX.exec(value)) !== null) {
        const [fullMatch, target, text] = match;
        const matchStart = match.index;

        if (matchStart > lastIndex) {
          parts.push({type: 'text', value: value.slice(lastIndex, matchStart)});
        }

        // Build the API URL
        // api.anychart.com uses format: /anychart.core.Class#method
        // Hash in target means method, dot means class path
        const apiPath = target.replace('#', '#');
        const url = `https://api.anychart.com/${apiPath}`;

        parts.push({
          type: 'link',
          url,
          title: target,
          children: [{type: 'text', value: text || target}],
          data: {
            hProperties: {
              className: 'api-link',
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

export default remarkApiLinkPlugin;
