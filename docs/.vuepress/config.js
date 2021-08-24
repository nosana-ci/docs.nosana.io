const { description } = require('../../package')
const path = require("path")

module.exports = {
  theme: 'book',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Nosana',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'));
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo.svg',
    editLinks: false,
    docsDir: 'docs',
    lastUpdated: true,
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
          sidebarDepth: 0,
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
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    // 'vuepress-plugin-clean-urls',
    // {
    //   normalSuffix: '/'
    // }
  ],

  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets")
      }
    }
  },
}
