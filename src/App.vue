<template>
  <app-header></app-header>
  <div class="header-gap"></div>
  <router-view/>
  <admin-actions
  v-if="isAdmin"
  ></admin-actions>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from '@/components/App/AppHeader.vue'
import AppFooter from '@/components/App/AppFooter.vue'
import AdminActions from '@/components/App/AdminActions.vue'

import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();

    return { cookies };
  },
  computed: {
    isAdmin() {
      return this.cookies.get('isAdmin')
    }
  },
  components:{
    AppHeader,
    AppFooter,
    AdminActions,
  }
}
</script>

<style lang="scss">
@import './assets/style/main.scss';
</style>