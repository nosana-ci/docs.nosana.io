import { defineUserConfig, defaultTheme } from 'vuepress';
import { copyCodePlugin } from 'vuepress-plugin-copy-code2';

const pages = {
  nodes: ['/nodes/start', '/nodes/stake', '/nodes/nft'],
  programs: ['/programs/staking', '/programs/rewards', '/programs/pools', '/programs/jobs', '/programs/voting'],
  tokens: ['/tokens/intro', '/tokens/token', '/tokens/nft', '/tokens/card'],
};

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'Next Gen CI/CD',

  theme: defaultTheme({
    logo: 'https://nosana.io/img/NOS_logo.png',
    repo: 'https://github.com/nosana-ci/docs.nosana.io',
    editLinkText: 'Edit this page on GitHub',
    docsDir: 'docs',
    plugins: [copyCodePlugin()],
    head: [
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Introduction',
        link: '/intro',
      },
      {
        text: 'F.A.Q.',
        link: '/faq',
      },
      {
        text: 'Nodes',
        link: '/nodes',
        children: pages.nodes,
      },
      {
        text: 'Programs',
        link: '/programs',
        children: pages.programs,
      },
      {
        text: 'Tokens',
        link: '/tokens',
        children: pages.tokens,
      },
      {
        text: 'Website',
        link: 'https://nosana.io',
      },
    ],
    sidebar: {
      '/faq/': [
        {
          text: 'Frequently Asked Questions',
          children: ['/faq'],
        },
      ],
      '/nodes/': [
        {
          text: 'Nosana Nodes',
          children: pages.nodes,
        },
      ],
      '/programs/': [
        {
          text: 'Nosana Programs',
          children: pages.programs,
        },
      ],
      '/tokens/': [
        {
          text: 'Nosana Tokens',
          children: pages.tokens,
        },
      ],
    },
  }),
});
