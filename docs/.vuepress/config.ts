import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nosana Documentation',
  description: 'Next Gen CI/CD',
  base: '/',
  theme,
  shouldPrefetch: false,
});
