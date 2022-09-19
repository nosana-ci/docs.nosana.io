import { defineUserConfig } from 'vuepress';
import { copyrightPlugin } from 'vuepress-plugin-copyright2';
import theme from './theme.js';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'Next Gen CI/CD',
  base: '/',
  theme,
  plugins: [
    copyrightPlugin({
      author: 'Nosana',
      license: 'MIT',
      hostname: 'https://docs.nosana.io',
      global: true,
    }),
  ],
});
