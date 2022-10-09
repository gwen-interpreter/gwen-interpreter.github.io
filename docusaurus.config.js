const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gwen',
  tagline: 'Automation',
  url: 'https://gweninterpreter.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gwen-interpreter', // Usually your GitHub org/user name.
  projectName: 'gwen-interpreter.github.io', // Usually your repo name.
  trailingSlash: false,
  customFields: {
    subtitle: 'Automate E2E testing and robotic processing with the Gherkin language',
  },
  themeConfig: {
    image: 'img/gwen-logo.png',
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
          href: '/docs/dsl/reference#csv-lookups',
          position: 'left',
          label: "What's new?",
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
          label: 'Support',
          href: 'https://gwenify.com',
          position: 'right'
        },
        {
          type: 'html',
          position: 'right',
          value: '<div class="sponsor"><iframe src="https://github.com/sponsors/gwen-interpreter/button" title="Sponsor gwen-interpreter" height="32" width="114" style="border: 0; border-radius: 6.5px; overflow: hidden;"></iframe></div>',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Open Source',
          items: [
            {
              label: 'Apache 2 License',
              href: 'https://www.apache.org/licenses/LICENSE-2.0',
            },
          ],
        },
        {
          title: 'Built On',
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
          title: 'Drives Browsers',
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
          title: 'Known Users',
          items: [
            {
              label: 'SmartStream',
              href: 'https://www.smartstream-stp.com',
              className: 'navicon icon-smartstream'
            },
            {
              label: 'Origin Energy',
              href: 'https://www.originenergy.com.au/',
              className: 'navicon icon-originenergy'
            },
          ],
        },
      ],
      copyright: `© gweninterpreter.org`,
    },
    prism: {
      additionalLanguages: ['gherkin', 'properties', 'groovy'],
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
