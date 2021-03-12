module.exports = {
  base: '/1.2/',
  lang: 'en-US',
  title: 'LeanupJS (v1.2)',
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

    sidebar: {
      '/guide/': getGuideSidebar(),
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
          text: 'Showcase',
          link: '/guide/showcase/',
        },
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
