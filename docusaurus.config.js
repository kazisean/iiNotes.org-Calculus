// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iiNotes',
  tagline: 'A non-profit free online university for the inquisitive',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://iinotes.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iiNotes', // Usually your GitHub org/user name.
  projectName: 'iiNotes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kazisean/iinotes_v1/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kazisean/iinotes_v1/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/iiNotes_ogBanner.png',
      navbar: {
        title: 'iiNotes',
        logo: {
          alt: 'iiNotes Logo',
          src: 'img/iiNotes_Logo.png',
          
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'All Courses',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'},
          {
            href: 'https://github.com/kazisean/iinotes_v1/tree/main',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                to: 'about',
              },
              {
                label: 'Meet the Team',
                to: 'about',
              },
              {
                label: 'Press',
                to: 'about',
              },
              {
                label: 'Donation',
                to: 'about',
              },
              {
                label: 'Help Center',
                to: 'about',
              },
            ],
          },
          {
            title: 'Terms',
            items: [
              {
                label: 'Privacy policy',
                to: '#',
              },
              {
                label: 'Terms of service',
                to: '#',
              },
              {
                label: 'Cookie policy',
                to: '#',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'How to Contribute',
                href: '#',
              },
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCDmSzgMcJTJlICegAV4ORxA',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iiNotes`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
