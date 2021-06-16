const { description } = require('../../package')

module.exports = {
  theme: "book",

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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Introduction',
        link: '/intro/',
      },
      {
        text: 'Platform',
        link: '/platform/',
      },
      {
        text: 'Website',
        link: 'https://nosana.io'
      }
    ],
    sidebar: {
      "/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            ["/", "Home"],
            ["/intro", "Introduction"],
            ["/tokenomics", "Tokenomics"],
          ]
        },
        {
          title: "Platform",
          collapsable: false,
          children: [
            ["/platform/cicd", "🤖 CI/CD"],
            ["/platform/compute", "🌏 Compute"],
            ["/platform/market", "💰 Market"],
            ["/platform/security", "🔒️Security"],
          ]
        },
        {
          title: "Links",
          collapsable: false,
          children: [
            ['https://nosana.io', "Website"],
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
  ]
}
