const isProd = process.env.NODE_ENV === 'production';

const title = 'leanûp (v1.1)';
const description = 'Make things pure ... to become lean.';
const site = isProd ? 'https://leanupjs.org' : 'http://localhost:3000';
const image = `${site}/assets/logo.svg`;

const head = [
  ['style', {}, 'img { border-radius: 5px }' + 'h1.title { margin-top: 0 !important }'],
  ['meta', { name: 'author', content: 'leanûp Team' }],
  [
    'meta',
    {
      name: 'keywords',
      content: `eslint, esbuild, babel, vite, snowpack, webpack, angular, angularjs, aurelia, inferno, react, preact, svelte, vue, mocha, cucumber, prettier, nightwatch, windicss, tailwindcss, less, sass, scss, typescript, spa, pwa, graphql, postcss, pwa, hint, workbox, mono-repo,  lerna`,
    },
  ],

  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/logo.svg' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#cc0000' }],

  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: site }],
  ['meta', { name: 'twitter:title', value: title }],
  ['meta', { name: 'twitter:description', value: description }],
  ['meta', { name: 'twitter:image', content: image }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'en_US' }],
  ['meta', { property: 'og:site', content: site }],
  ['meta', { property: 'og:site_name', content: title }],
  ['meta', { property: 'og:title', content: title }],
  ['meta', { property: 'og:image', content: image }],
  ['meta', { property: 'og:description', content: description }],
];

module.exports = {
  base: '/1.1/',
  lang: 'en-US',
  head,
  title: 'leanûp (v1.1)',
  description: 'Make things pure ... to become lean.',

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    repo: 'leanupjs/leanup',
    docsDir: 'docs',

    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      apiKey: '4c7336288ccbc89f063ce54a26e9dc95',
      indexName: 'leanupjs',
    },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg',
    // },

    nav: [
      {
        text: 'Motivation',
        link: '/motivation/',
        activeMatch: '^/motivation/',
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
