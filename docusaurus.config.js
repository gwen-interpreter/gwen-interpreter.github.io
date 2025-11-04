const prismReactRenderer = require('prism-react-renderer');
const lightCodeTheme = prismReactRenderer.themes.github;
const darkCodeTheme = prismReactRenderer.themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gwen',
  tagline: 'Automation',
  url: 'https://gweninterpreter.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  favicon: 'img/favicon.ico',
  organizationName: 'gwen-interpreter', // Usually your GitHub org/user name.
  projectName: 'gwen-interpreter.github.io', // Usually your repo name.
  trailingSlash: false,
  customFields: {
    subtitle: 'Specifications Driven Automation',
    description: 'Gwen is a Gherkin interpreter with built-in automation capabilities that can readily be utilised for end-to-end testing and robotic processing.'
  },
  themeConfig: {
    image: 'img/gwen-logo-media.png',
    navbar: {
      title: 'gwen',
      logo: {
        alt: 'Gwen Home Page',
        src: 'img/gwen-navicon-c.png',
        srcDark: 'img/gwen-navicon-w.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'faq',
          position: 'left',
          label: 'FAQ',
        },
        {
          href: '/docs/dsl#js-actions',
          position: 'left',
          label: "What's New?",
        },
        { 
          label: 'GitHub', 
          href: 'https://github.com/gwen-interpreter',
          position: 'right'
        },
        {
          label: 'Blog',
          href: 'https://gweninterpreter.wordpress.com',
          position: 'right'
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/gweninterpreter',
          position: 'right'
        },
        {
          label: 'Gwenify',
          href: 'https://gwenify.com',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Open source',
          items: [
            {
              label: 'Apache 2 license',
              href: 'https://www.apache.org/licenses/LICENSE-2.0',
            },
          ],
        },
        {
          title: 'Built on',
          items: [
            {
              label: 'Gherkin',
              href: 'https://cucumber.io/docs/gherkin/reference',
            },
            {
              label: 'Selenium',
              href: 'https://www.selenium.dev',
            },
          ],
        },
        {
          title: 'Drives browsers',
          items: [
            {
              label: 'Chrome',
              href: 'https://www.google.com/intl/en_au/chrome/',
            },
            {
              label: 'Edge',
              href: 'https://www.microsoft.com/en-us/edge',
            },
          ],
        },
        {
          title: '‎',
          items: [
            {
              label: 'Firefox',
              href: 'https://www.mozilla.org/en-US/firefox/new/',
            },
            {
              label: 'Safari',
              href: 'https://www.apple.com/au/safari/',
            },
          ],
        },
        {
          title: 'RPA',
          items: [
            {
              label: 'Gwenify',
              href: 'https://gwenify.com',
            },
          ],
        },
      ],
      copyright: `© gweninterpreter.org`,
    },
    prism: {
      additionalLanguages: ['bash', 'gherkin', 'groovy', 'json', 'properties'],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: 'WCHUTX69XW',
      apiKey: 'ed729096cf0cc470ca9724bfe3f20576',
      indexName: 'gweninterpreter'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
             'https://github.com/gwen-interpreter/gwen-interpreter.github.io/edit/master',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://gweninterpreter.wordpress.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
