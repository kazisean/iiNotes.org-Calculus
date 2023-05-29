// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/okaidia');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iiNotes | Self-guided learning made easy',
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
        gtag: {
          trackingID: "G-W96Q37RCQF",
          anonymizeIP: true,
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
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],





  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    
    ({


      // meta data seo

      metadata: [
        { name: 'author', content: 'iiNotes' },
        { name: 'msvalidate.01', content: '948B64EA9A379E64FA7CC35E52BCDE60' },
        { name: 'tags', content: 'iiNotes, Self Learning Guide, Calculus Notes, Learn Calculus, iiNotes Self Guided Lessons' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://iinotes.org' },
        { property: 'og:site_name', content: 'iiNotes' },
        { property: 'og:site_name', content: 'iiNotes' },
        { property: 'twitter:image', content: 'https://iinotes.org/img/iiNotes_ogBanner.png' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:title', content: 'iiNotes | Self-guided learning made easy' },
        { itemprop: 'name', content: 'iiNotes | Self-guided learning made easy' },
        { itemprop: 'description', content: 'iiNotes is an open-source free learning environment for various subjects. With Self- Learning guides following similar curriculum from universities like MIT, Stanford and NYU.' },
        { itemprop: 'url', content: 'https://iinotes.org' },
        { itemprop: 'logo', content: 'https://iinotes.org/img/iiNotes_Logo.png' },
        { itemprop: 'sameAs', content: 'https://github.com/iiNotes/' },
        { itemprop: 'sameAs', content: 'https://www.youtube.com/channel/UCDmSzgMcJTJlICegAV4ORxA' },

      
      ],

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
            to: 'courses',
            position: 'left',
            label: 'All Courses',
          },

          {
            type: 'dropdown',
            label: 'Mathematics',
            position: 'left',
            items: [




              {
                type: 'docSidebar',
                label: 'Calculus',
                sidebarId: 'calcSideBar',
              },
              
              // ... more items



            ],
          },



          
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },


          /*

            {
              to: '/friends', 
              label: 'Sciences', 
              position: 'left'},

          {
            to: '/friends', 
            label: 'Engineering', 
            position: 'left'},
          


              {
                to: '/friends', 
                label: 'Philosophies', 
                position: 'left'},


                  {
                    to: '/friends', 
                    label: 'Humanities', 
                    position: 'left'},

                    {
                      to: '/friends', 
                      label: 'Skills', 
                      position: 'left'},
                      
                      */






                    {
                      to: '/friends', 
                      label: 'Friends', 
                      position: 'right'},

          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'},
      
          {
          href: "https://github.com/iiNotes/iiNotes_base",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
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
