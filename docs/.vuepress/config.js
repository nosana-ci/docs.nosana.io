const {description} = require('../../package')
const path = require("path")

module.exports = {
  theme: 'book',
  title: 'Nosana',
  description: description,
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
  ],
  locales: {
    '/': {lang: 'en-US'},
    // '/zh/': {lang: 'zh-CN'},
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'reading-progress',
    'vuepress-plugin-code-copy',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets")
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'));
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    editLinks: false,
    docsDir: 'docs',
    lastUpdated: true,
    locales: {
      '/': {label: '🇺🇸'},
      // '/zh/': {label: '🇨🇳'},
    },
    nav: [
      {
        text: 'Website',
        link: 'https://nosana.io'
      }
    ],
    sidebar: {
      '/': [
        {
          title: '',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['/', 'Home'],
          ]
        },
        {
          title: 'Overview',
          collapsable: false,
          children: [
            ['/abstract/intro', 'Introduction'],
            ['/abstract/background', 'Background'],
            ['/abstract/roadmap', 'Roadmap'],
            ['/abstract/faq', 'F.A.Q.'],
          ]
        },
        {
          title: 'The Nosana Pipeline',
          collapsable: false,
          children: [
            ['/nosana/integration', 'Phase 1: Integration'],
            ['/nosana/delivery', 'Phase 2: Delivery'],
            ['/nosana/deployment', 'Phase 3: Deployment'],
          ]
        },
        {
          title: 'Tokenomics',
          collapsable: false,
          children: [
            ['/tokenomics/metrics', 'Metrics'],
            ['/tokenomics/utility', 'Utility'],
          ]
        },
        {
          title: 'Links',
          collapsable: false,
          children: [
            ['https://nosana.io', 'Website'],
          ]
        }
      ]
    }
  }
}
