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

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://gitlab.com/nosana-ci/apps/docs/vuepress',
    logo: '/logo.svg',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Edit on GitLab 🦊',
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
            ['/intro', 'Introduction'],
            // ['/faq', 'F.A.Q.'],
          ]
        },
        {
          title: 'Platform',
          collapsable: false,
          children: [
            ['/platform/cicd', '🚀 CI/CD'],
            ['/platform/os', '👨‍💻 Open Source'],
            ['/platform/market', '💰 Market'],
            ['/platform/security', '🔒️Security'],
          ]
        },
        // {
        //   title: 'Project',
        //   collapsable: false,
        //   children: [
        //     ['/project/tokenomics', '🪙 Tokenomics'],
        //     ['/project/roadmap', '🛣 Roadmap'],
        //   ]
        // },
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
  }
}
