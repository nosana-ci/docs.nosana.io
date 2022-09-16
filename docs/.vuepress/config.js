import { defineUserConfig , defaultTheme} from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'Next Gen CI/CD',

  theme: defaultTheme({
    logo: 'https://nosana.io/img/NOS_logo.png',
    repo: 'https://github.com/nosana-ci/docs.nosana.io',
    editLinkText: 'Edit this page on GitHub',
    docsDir: 'docs',
    head: [
      ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}],
      ['meta', {name: 'theme-color', content: '#3eaf7c'}],
      ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
      ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Overview',
        link: '/overview',
      },
      {
        text: 'Programs',
        link: '/nosana',
        children: [
          '/nosana/index.md',
          '/nosana/staking.md',
          '/nosana/rewards.md',
          '/nosana/pools.md',
          '/nosana/jobs.md',
          '/nosana/voting.md',
          '/nosana/token.md',
        ],
      }
    ],
    sidebar: {
      '/overview/': [
        {
          text: 'Overview',
          children: [
            '/overview/index.md',
            '/overview/faq.md',
          ],
        },
      ],
      '/nosana/': [
        {
          text: 'Nosana',
          children: [
            '/nosana/index.md',
            '/nosana/staking.md',
            '/nosana/rewards.md',
            '/nosana/pools.md',
            '/nosana/jobs.md',
            '/nosana/voting.md',
            '/nosana/token.md',
          ],
        },
      ]
    },
  }),
})
