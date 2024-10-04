<template>
  <div class="is-flex is-align-items-center">
    <a
      v-for="social in socials"
      :key="social.icon"
      :href="social.link"
      target="_blank"
      class="mr-5"
    >
      <img :src="social.iconLight">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
  data () {
    return {
      socials: [
        {
          link: 'https://twitter.com/nosana_ai',
          iconLight: '/assets/icon/x-light.svg'
        },
        {
          link: 'https://t.me/NosanaCompute',
          iconLight: '/assets/icon/telegram-light.svg'
        },
        {
          link: 'https://github.com/nosana-ci',
          iconLight: '/assets/icon/github-light.svg'
        },
        {
          link: 'https://discord.gg/nosana-ai',
          iconLight: '/assets/icon/discord-light.svg'
        },
        {
          link: 'https://nosana.medium.com/',
          iconLight: '/assets/icon/medium-light.svg'
        },
        {
          link: 'https://www.linkedin.com/company/nosana',
          iconLight: '/assets/icon/linkedin-light.svg'
        },
        {
          link: 'https://www.youtube.com/@NosanaAI',
          iconLight: '/assets/icon/youtube-light.svg'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  color: white !important;
  &.dark {
    color: black !important;
  }
  img {
    width: 24px;
  }
}
</style>
