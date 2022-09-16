import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'Next Gen CI/CD',
  base: '/',
  theme,
});
