import { hopeTheme } from 'vuepress-theme-hope';
import { default as pages } from './pages';

export default hopeTheme({
  hostname: 'https://docs.nosana.io',
  logo: 'https://nosana.io/img/NOS_logo.png',
  repo: 'https://github.com/nosana-ci/docs.nosana.io',
  docsDir: 'docs',
  iconAssets: 'fontawesome',
  author: {
    name: 'Nosana',
    url: 'mailto:team@nosana.io',
  },

  // footer
  footer: 'Made by Nosana with ❤️',
  displayFooter: true,

  // navidation
  sidebar: pages,
  navbar: [
    ...pages,
    {
      text: 'Website',
      icon: 'link',
      link: 'https://nosana.io',
    },
  ],

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234'],
    },
  },

  plugins: {
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
      tex: true,
      vpre: true,
      vuePlayground: true,
    },
  },
});
