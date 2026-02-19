/**
 * Remark plugin for AnyChart {sample} directive.
 *
 * Transforms:
 *   {sample}BCT_Line_Chart_01{sample}
 *   {sample :height 700}PERT_Basic_Sample{sample}
 *   {sample :width 830 :height 150}GFX_Transformation_01{sample}
 *
 * Into JSX: <ChartSample name="..." height={...} width={...} />
 */
import {visit} from 'unist-util-visit';

const SAMPLE_REGEX =
  /\{sample(?:\s+:width\s+(\d+))?(?:\s+:height\s+(\d+))?\}([A-Za-z0-9_]+)\{sample\}/g;

function remarkSamplePlugin() {
  return (tree: any) => {
    visit(tree, 'text', (node: any, index: number | undefined, parent: any) => {
      if (!parent || index === undefined) return;
      const value: string = node.value;
      if (!value.includes('{sample}') && !value.includes('{sample ')) return;

      const parts: any[] = [];
      let lastIndex = 0;

      // Reset regex
      SAMPLE_REGEX.lastIndex = 0;
      let match;
      while ((match = SAMPLE_REGEX.exec(value)) !== null) {
        const [fullMatch, width, height, name] = match;
        const matchStart = match.index;

        // Text before the match
        if (matchStart > lastIndex) {
          parts.push({type: 'text', value: value.slice(lastIndex, matchStart)});
        }

        // Build JSX attributes
        const attrs: string[] = [`name="${name}"`];
        if (height) attrs.push(`height={${height}}`);
        if (width) attrs.push(`width={${width}}`);

        parts.push({
          type: 'mdxJsxFlowElement',
          name: 'ChartSample',
          attributes: [
            {type: 'mdxJsxAttribute', name: 'name', value: name},
            ...(height
              ? [
                  {
                    type: 'mdxJsxAttribute',
                    name: 'height',
                    value: {
                      type: 'mdxJsxAttributeValueExpression',
                      value: height,
                      data: {
                        estree: {
                          type: 'Program',
                          body: [
                            {
                              type: 'ExpressionStatement',
                              expression: {type: 'Literal', value: parseInt(height), raw: height},
                            },
                          ],
                          sourceType: 'module',
                        },
                      },
                    },
                  },
                ]
              : []),
            ...(width
              ? [
                  {
                    type: 'mdxJsxAttribute',
                    name: 'width',
                    value: {
                      type: 'mdxJsxAttributeValueExpression',
                      value: width,
                      data: {
                        estree: {
                          type: 'Program',
                          body: [
                            {
                              type: 'ExpressionStatement',
                              expression: {type: 'Literal', value: parseInt(width), raw: width},
                            },
                          ],
                          sourceType: 'module',
                        },
                      },
                    },
                  },
                ]
              : []),
          ],
          children: [],
        });

        lastIndex = matchStart + fullMatch.length;
      }

      if (parts.length === 0) return;

      // Remaining text after last match
      if (lastIndex < value.length) {
        parts.push({type: 'text', value: value.slice(lastIndex)});
      }

      parent.children.splice(index, 1, ...parts);
    });
  };
}

export default remarkSamplePlugin;
