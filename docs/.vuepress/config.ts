import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'The Web3 trusted DevOps platform',
  base: '/',
  theme,
  shouldPrefetch: false,
});
