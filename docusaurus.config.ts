import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/**
 * AnyChart version вЂ” used for {{branch-name}} replacement.
 * This should match the version in config.toml.
 */
const ANYCHART_VERSION = process.env.ANYCHART_VERSION || '8.14.1';

/**
 * Markdown preprocessor: transforms AnyChart custom directives to valid MDX
 * BEFORE the MDX parser runs. This is critical because {sample}, {api:}, {pg:},
 * and {{branch-name}} would otherwise be interpreted as JSX expressions.
 */
function anychartPreprocessor({fileContent}: {filePath: string; fileContent: string}): string {
  let content = fileContent;

  // 1. {{branch-name}} в†’ version string
  //    Must be done first so URLs inside other replacements are also resolved.
  content = content.replace(/\{\{branch-name\}\}/g, ANYCHART_VERSION);

  // 2. {sample ...}NAME{sample} -> embedded sample iframe HTML.
  //    Supports width/height in any order, optional trailing spaces,
  //    and names with escaped underscores or hyphens.
  content = content.replace(
    /\{sample((?:\s+:[a-z]+\s+\d+\s*)*)\}([A-Za-z0-9_\\-]+)\{sample\}/g,
    (_match, params, name) => {
      const cleanName = name.replace(/\\/g, '');
      const width = params.match(/:width\s+(\d+)/)?.[1] || '100%';
      const height = params.match(/:height\s+(\d+)/)?.[1] || '400';
      const src = `/samples/${cleanName}.html`;
      const playgroundUrl = `https://playground.anychart.com/docs/v8/samples/${cleanName}`;
      return [
        '',
        '<div class="chart-sample-container">',
        `  <iframe src="${src}" width="${width}" height="${height}" loading="lazy" title="AnyChart Sample: ${cleanName}"></iframe>`,
        '  <div class="chart-sample-actions">',
        `    <a class="chart-sample-playground" href="${playgroundUrl}" target="_blank" rel="noopener noreferrer">&#x25B6; Playground</a>`,
        `    <a href="${src}" target="_blank" rel="noopener noreferrer">Open Sample &#x2197;</a>`,
        '  </div>',
        '</div>',
        '',
      ].join('\n');
    },
  );

  // 3. {api:target}text{api} -> [text](https://api.anychart.com/target)

  content = content.replace(
    /\{api:([^}]+)\}([^{]*)\{api\}/g,
    (_match, target, text) => {
      const displayText = text || target;
      return `[${displayText}](https://api.anychart.com/${target})`;
    },
  );

  // 4. {pg:location}text{pg} -> [text](https://playground.anychart.com/location)
  content = content.replace(
    /\{pg:([^}]+)\}([^{]*)\{pg\}/g,
    (_match, location, text) => {
      return `[${text}](https://playground.anychart.com/${location})`;
    },
  );

  // 5. Protocol-relative URLs in images: ![](//domain/...) -> ![](https://domain/...)
  content = content.replace(
    /!\[([^\]]*)\]\(\/\/([^)]+)\)/g,
    (_match, alt, url) => `![${alt}](https://${url})`,
  );

  return content;
}

const config: Config = {
  title: 'AnyChart Documentation',
  tagline: 'Interactive JavaScript/HTML5 Charts',
  favicon: 'img/favicon.ico',

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  url: 'https://docs.anychart.com',
  baseUrl: '/',

  organizationName: 'AnyChart',
  projectName: 'docs.anychart.com',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  markdown: {
    
    format: 'detect',
    preprocessor: anychartPreprocessor,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/AnyChart/docs.anychart.com/edit/develop/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/anychart-social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'AnyChart',
        src: 'img/anychart-logo.svg',
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://api.anychart.com',
          label: 'API Reference',
          position: 'left',
        },
        {
          href: 'https://playground.anychart.com',
          label: 'Playground',
          position: 'left',
        },
        {
          href: 'https://www.anychart.com',
          label: 'AnyChart.com',
          position: 'right',
        },
        {
          href: 'https://github.com/AnyChart/docs.anychart.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Quick Start', to: '/quick-start'},
            {label: 'Basic Charts', to: '/basic-charts'},
            {label: 'Stock Charts', to: '/stock-charts'},
            {label: 'Maps', to: '/maps'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'API Reference', href: 'https://api.anychart.com'},
            {label: 'Playground', href: 'https://playground.anychart.com'},
            {label: 'GitHub', href: 'https://github.com/AnyChart'},
          ],
        },
        {
          title: 'Company',
          items: [
            {label: 'AnyChart.com', href: 'https://www.anychart.com'},
            {label: 'Support', href: 'https://www.anychart.com/support'},
            {label: 'Blog', href: 'https://www.anychart.com/blog/'},
          ],
        },
      ],
      copyright: `Copyright В© ${new Date().getFullYear()} AnyChart.com. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: ['bash', 'json'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
