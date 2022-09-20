import { hopeTheme } from 'vuepress-theme-hope';
import { default as pages } from './pages';

export default hopeTheme({
  hostname: 'https://docs.nosana.io',
  logo: 'https://nosana.io/img/NOS_logo.png',
  repo: 'https://github.com/nosana-ci/docs.nosana.io',
  docsDir: 'docs',
  iconAssets: 'fontawesome',

  // footer
  footer: 'MIT Licensed | Copyright © 2021-present Nosana',
  copyright: false,
  displayFooter: true,
  contributors: false,

  // navigation
  sidebar: [
    {
      text: 'About',
      icon: 'lightbulb',
      prefix: '/about/',
      children: ['intro', 'terminology'],
    },
    ...pages,
  ],
  navbar: [
    ...pages,
    {
      text: 'Website',
      icon: 'link',
      link: 'https://nosana.io',
    },
  ],

  pageInfo: ['Category', 'Tag', 'ReadingTime'],

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234'],
    },
  },

  plugins: {
    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommanded',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommanded',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff',
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [],
      },
    },
  },
});
