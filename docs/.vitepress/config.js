module.exports = {
  base: '/1.1/',
  lang: 'en-US',
  title: 'LeanupJS',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    repo: 'leanupjs/leanup',
    docsDir: 'docs',

    editLinks: true,
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
        text: 'Release Notes',
        link: 'https://github.com/leanupjs/leanup/releases',
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      // "/config/": getConfigSidebar(),
      // "/": getGuideSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      link: '/guide/',
      children: [
        {
          text: 'Installation',
          link: '/guide/installation/',
        },
        {
          text: 'Migration',
          link: '/guide/migration/',
        },
        {
          text: 'Usage',
          link: '/guide/usage/',
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
