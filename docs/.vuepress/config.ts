import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'Powering the AI revolution',
  base: '/',
  theme,
  shouldPrefetch: false,
});
