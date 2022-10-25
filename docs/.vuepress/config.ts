import { defineUserConfig } from 'vuepress';
import { addViteSsrNoExternal } from 'vuepress-shared';
import theme from './theme.js';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'Next Gen CI/CD',
  base: '/',
  theme,
  shouldPrefetch: false,
  extendsBundlerOptions: (config, app) => {
    addViteSsrNoExternal ({ app, config }, 'vuepress-shared');
  },
});
