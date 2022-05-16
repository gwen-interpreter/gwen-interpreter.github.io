const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'gwen',
  tagline: 'Automation & Robotics for Gherkin',
  url: 'https://gweninterpreter.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gwen-interpreter', // Usually your GitHub org/user name.
  projectName: 'gwen-interpreter.github.io', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    image: 'img/gwen-media.png',
    navbar: {
      title: 'gwen',
      logo: {
        alt: 'Gwen Home Page',
        src: 'img/gwen-attractor-color.svg',
        srcDark: 'img/gwen-attractor-white.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          href: '/docs/dsl/reference#text-ref-should-be-similar-to-text',
          position: 'left',
          label: "What's new?",
        },
        { 
          label: 'GitHub',
          to: 'https://github.com/gwen-interpreter/gwen-web',
          position: 'right',
          className: 'navicon-top icon-github'
        },
        {
          label: 'Blog',
          to: 'https://gweninterpreter.wordpress.com',
          position: 'right',
          className: 'navicon-top icon-blog'
        },
        {
          label: 'Twitter',
          to: 'https://twitter.com/gweninterpreter',
          position: 'right',
          className: 'navicon-top icon-twitter'
        },
        {
          label: 'Support',
          to: 'https://gwenify.com',
          position: 'right',
          className: 'navicon-top icon-support'
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
          title: 'Integrates With',
          items: [
            {
              label: 'Report Portal',
              href: '/docs/reports/portal',
            }
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
