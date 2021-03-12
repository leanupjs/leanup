module.exports = {
  base: '/1.2/',
  lang: 'en-US',
  title: 'LeanupJS',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    repo: 'leanupjs/leanup',
    docsDir: 'docs',

    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   apiKey: "c57105e511faa5558547599f120ceeba",
    //   indexName: "vitepress",
    // },

    // carbonAds: {
    //   carbon: "CEBDT27Y",
    //   custom: "CKYD62QM",
    //   placement: "vuejsorg",
    // },

    nav: [
      {
        text: 'Motivation',
        link: '/',
        activeMatch: '^/$',
      },
      {
        text: 'Guide',
        link: '/guide/',
        activeMatch: '^/guide/',
      },
      {
        text: 'Achitecture',
        link: '/arc/',
        activeMatch: '^/arc/',
      },
      {
        text: 'Configuration',
        link: '/config/',
        activeMatch: '^/config/',
      },
      {
        text: 'Changelog',
        link: '/changelog/',
        activeMatch: '^/changelog/',
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/leanupjs/leanup/releases',
      },
    ],

    // sidebar: {
    //   "/guide/": getGuideSidebar(),
    //   "/config/": getConfigSidebar(),
    //   "/": getGuideSidebar(),
    // },
  },
};

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Deploying', link: '/guide/deploy' },
      ],
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Global Computed', link: '/guide/global-computed' },
        { text: 'Global Component', link: '/guide/global-component' },
        { text: 'Customization', link: '/guide/customization' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress',
        },
      ],
    },
  ];
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }],
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' },
      ],
    },
  ];
}
