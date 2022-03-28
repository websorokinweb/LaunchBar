<template>
  <app-header></app-header>
  <div class="header-gap"></div>
  <router-view/>
  <admin-actions></admin-actions>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from '@/components/App/AppHeader.vue'
import AppFooter from '@/components/App/AppFooter.vue'
import AdminActions from '@/components/App/AdminActions.vue'


export default {
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