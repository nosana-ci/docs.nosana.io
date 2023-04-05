import { defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import theme from './theme.js';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'The Web3 trusted DevOps platform',
  base: '/',
  theme,
  shouldPrefetch: false,
  plugins: [
    docsearchPlugin({
      appId: 'O80DOX8SB5',
      apiKey: '4cda0685d3eac8d69041dd61f5d5d68e',
      indexName: 'nosana',
    }),
  ],
});
