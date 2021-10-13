const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gwen',
  tagline: 'Automation Bindings for Gherkin',
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
      title: 'Gwen',
      logo: {
        alt: 'Gwen Logo',
        src: 'img/gwen-attractor.svg',
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
          label: 'GitHub',
          href: 'https://github.com/gwen-interpreter/gwen-web',
          position: 'right',
        },
        {
          label: 'Blog',
          href: 'https://gweninterpreter.wordpress.com',
          position: 'right',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/gweninterpreter',
          position: 'right',
        },
        {
          label: 'Support',
          href: 'https://gwenify.com',
          position: 'right',
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
              href: 'https://reportportal.io',
            }
          ],
        },
        {
          title: 'Known Users',
          items: [
            {
              label: 'SmartStream',
              href: 'https://www.smartstream-stp.com',
            },
          ],
        },
      ],
      copyright: `© gweninterpreter.org`,
    },
    prism: {
      additionalLanguages: ['gherkin', 'properties'],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
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
