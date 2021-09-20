/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */


export default async (
  {
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
    isServer
  }) => {
  // ...apply enhancements for the site.

  // https://github.com/vuejs/vuepress/issues/791
  if (!isServer) {
    await import('vue-apexcharts').then(module => {
      Vue.use(module.default)
      Vue.component('apexchart', module.default)
    })
  }
}
