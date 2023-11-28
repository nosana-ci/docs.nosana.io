import { defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import theme from './theme.js';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'The Decentralized Physical GPU Network',
  base: '/',
  theme,
  shouldPrefetch: false,
  plugins: [
    docsearchPlugin({
      appId: 'O80DOX8SB5',
      apiKey: '3419239266c440c627d6bdd2f1cb82ea',
      indexName: 'nosana',
    }),
  ],
});
