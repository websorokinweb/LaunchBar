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
        <img :src="social.src" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    custom: {
      type: Array,
      default: null,
    },
  },
  computed: {
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
          type: 'telegram',
        },
        {
          href: '#',
          src: require('@/assets/images/twitter.svg'),
          type: 'twitter',
        },
        {
          href: '#',
          src: require('@/assets/images/discord.svg'),
          type: 'discord',
        },
      ],
    }
  },
}
</script>