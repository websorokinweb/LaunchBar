<template>
  <section class="admin-login">
    <div class="container">
      <form class="admin-login__inner"
      @submit.prevent="loginAdmin()"
      >
        <h1 class="admin-login__title title">
          Login admin
        </h1>
        <app-input
        descr="Login"
        :inputRequired="true"
        v-model="admin.login"
        ></app-input>
        <app-input
        descr="Password"
        :inputRequired="true"
        v-model="admin.password"
        type="password"
        ></app-input>
        <span class="admin-login__error"
        :class="error.length > 0 ? 'admin-login__error--active' : ''"
        >
          {{ error }}
        </span>
        <app-button
        title="Login"
        big
        type="submit"
        ></app-button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';

import { useCookies } from "vue3-cookies";

export default {
  title: 'Admin',
  data() {
    return {
      admin:{
        login: '',
        password: '',
      },
      error: '',
    }
  },
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  methods: {
    ...mapMutations(['setAdmin']),
    loginAdmin() {
      let isCorrect = false

      // Remove
      isCorrect = true
      this.cookies.set('isAdmin', true)
      // this.setAdmin()

      axios.post('/admin/login', {
          admin: this.admin
        })
          .then(response => {
            if(response.status === 200){
              isCorrect = true
            }
          })

      if(isCorrect){
        // this.setAdmin()
        this.cookies.set('isAdmin', true)
        this.$router.push({ path: '/admin/list' })
      }else{
        this.admin = {}
        this.error ='Something wrong'
      }
    }
  },
}
</script>