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
      md.use(require('markdown-it-task-lists'), {enabled: true});
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
          title: 'Abstract',
          collapsable: false,
          children: [
            ['/abstract/intro', 'Introduction'],
            ['/abstract/roadmap', 'Roadmap'],
            ['/abstract/faq', 'F.A.Q.'],
          ]
        },
        {
          title: 'Nosana',
          collapsable: false,
          children: [
            ['/nosana/recap', 'CI/CD recap'],
            ['/nosana/unit', 'Phase 1: Unit'],
            ['/nosana/integration', 'Phase 2: Integration'],
            ['/nosana/delivery', 'Phase 3: Delivery'],
            ['/nosana/deployment', 'Phase 4: Deployment'],
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
