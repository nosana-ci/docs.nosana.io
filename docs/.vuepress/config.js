const {description} = require('../../package')
const path = require('path')

module.exports = {
  theme: 'reco',
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
    'reading-progress',
    'vuepress-plugin-code-copy',
    ['vuepress-plugin-global-variables', {variables: require('./variables.js')}],
    ['@maginapp/vuepress-plugin-katex', {delimiters: 'dollars'}],
    ['container', {type: 'col-wrapper', defaultTitle: '',}],
    ['container', {type: 'col-full', defaultTitle: '',}],
    ['container', {type: 'col-half', defaultTitle: '',}],
    ['container', {type: 'col-third', defaultTitle: '',}],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../assets')
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'));
      md.use(require('markdown-it-imsize'));
    },
    plugins: {
      '@centerforopenscience/markdown-it-video': {}
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    author: 'Nosana Team',
    editLinks: false,
    docsDir: 'docs',
    lastUpdated: true,
    mode: 'light',
    subSidebar: 'auto',
    locales: {
      '/': {label: '🇺🇸'},
      // '/zh/': {label: '🇨🇳'},
    },
    nav: [
      {
        text: 'F.A.Q.',
        link: '/overview/faq',
        icon: 'reco-faq'
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: 'Contact',
        link: 'mailto:team@nosana.io',
        icon: 'reco-mail'
      },
      {
        text: 'Website',
        link: 'https://nosana.io',
        icon: 'reco-home'
      },
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
            ['/overview/intro', 'Introduction'],
            ['/overview/background', 'Background'],
            ['/overview/roadmap', 'Roadmap'],
            ['/overview/faq', 'F.A.Q.'],
          ]
        },
        {
          title: 'Nosana',
          collapsable: false,
          children: [
            ['/nosana/testnet', 'Phase 0: Incentivized Testnet'],
            ['/nosana/ci', 'Phase 1: Test Suite'],
            ['/nosana/cd', 'Phase 2: Deployment Suite'],
            ['/nosana/dao', 'Phase 3: DAO'],
          ]
        },
        {
          title: 'Tokenomics',
          collapsable: false,
          children: [
            ['/tokenomics/metrics', 'Metrics'],
            ['/tokenomics/utility', 'Utility'],
          ]
        }
      ]
    }
  }
}
