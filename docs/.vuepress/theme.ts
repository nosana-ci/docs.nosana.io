import { hopeTheme } from 'vuepress-theme-hope';
import { default as pages } from './pages';

export default hopeTheme({
  hostname: 'https://docs.nosana.io',
  logo: 'assets/token.png',
  repo: 'https://github.com/nosana-ci/docs.nosana.io',
  docsDir: 'docs',
  iconAssets: 'fontawesome',
  editLink: false,

  // footer
  footer: 'MIT Licensed | Copyright © 2021-present Nosana',
  copyright: false,
  displayFooter: true,
  contributors: false,

  // navigation
  sidebar: pages,
  navbar: [
    ...pages,
    {
      text: 'Site',
      // icon: 'link',
      icon: 'globe',
      link: 'https://nosana.io/',
    },
    {
      text: 'Staking',
      icon: 'coins',
      // icon: 'network-wired',
      link: 'https://app.nosana.io/stake',
    },
    {
      text: 'Explorer',
      icon: 'gauge',
      // icon: 'network-wired',
      link: 'https://explorer.nosana.io/',
    },
    // {
    //   text: 'Burner Phones',
    //   // icon: 'link',
    //   icon: 'mobile',
    //   link: 'https://nft.nosana.io/',
    // },
  ],

  pageInfo: ['Category', 'Tag', 'ReadingTime'],

  plugins: {
    copyright: true,

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      revealjs: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
        themes: [
          'auto',
          'beige',
          'black',
          'blood',
          'league',
          'moon',
          'night',
          'serif',
          'simple',
          'sky',
          'solarized',
          'white',
        ],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }: { tag: string }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-touch-icon.png',
        statusBarColor: 'black',
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-512x512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192x192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [],
      },
    },
  },
});
