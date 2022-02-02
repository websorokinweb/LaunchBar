<template>
  <ul class="social__list">
    <li class="social__item"
    v-for='social in items'
    :key='social'
    >
      <a class='social__link' :href='social.href'
      :class='social.type == "telegram" ? "social__link--telegram" : ""'
      target="_blank"
      >
        <img :src="theme === '' ? social.src : social.themeSrc" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    custom: {
      type: Array,
      default: null,
    },
  },
  computed: {
    ...mapGetters(['theme']),
    items() {
      return this.custom ? this.custom : this.socials
    }
  },
  data() {
    return {
      socials:[
        {
          href: 'https://www.instagram.com',  
          src: require('@/assets/images/telegram.svg'),
          themeSrc: require('@/assets/images/telegram--theme.svg'),
          type: 'telegram',
        },
        {
          href: '#',
          src: require('@/assets/images/twitter.svg'),
          themeSrc: require('@/assets/images/twitter--theme.svg'),
          type: 'twitter',
        },
        {
          href: '#',
          src: require('@/assets/images/discord.svg'),
          themeSrc: require('@/assets/images/discord--theme.svg'),
          type: 'discord',
        },
      ],
    }
  },
}
</script>