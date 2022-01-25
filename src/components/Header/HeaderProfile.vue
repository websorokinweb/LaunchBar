<template>
  <div class="profile"
  :class='[profileState, profileConnected]'
  @click.stop
  >
    <app-button
    title='Leave wallet'
    @click='[togglePopUpWallets(), quitWallet()]'
    view="out"
    ></app-button>
    <p class="profile__title">
      Your Profile Settings
    </p>
    <span class="profile__form">
      <app-upload
      @uploaded="setLogo"
      >
        <span class="profile__imgwrapper-uploaded"
        :class="user.logo.src || form.logo.src !== '' ? 'profile__imgwrapper-uploaded--active' : ''"
        >
          <img :src="form.logo.src || user.logo.src" alt="">
        </span>
        <span class="profile__imgwrapper"
        :class="user.logo.src || form.logo.src !== '' ? 'profile__imgwrapper--active' : ''"
        >
          <img v-if="user.logo.src || form.logo.src" src="@/assets/images/trash.svg" alt=""
          @click.prevent="[clearUserLogo(), form.logo = {src: ''}]"
          >
          <img v-else src="@/assets/images/add.svg" alt="">
        </span>
        <p
        v-if="user.logo.src || form.logo.src !== ''"
        ></p>
        <p class="profile__sizes"
        v-else
        >
          512x512
        </p>
        <p
        v-if="user.logo.src || form.logo.src !== ''"
        ></p>
        <p class="profile__file-types"
        v-else
        >
          png, jpg
        </p>
      </app-upload>
      <app-input
      descr="Your username:"
      placeholderText="Launchbar"
      v-model="form.username"
      ></app-input>
    </span>
    <app-button
    title='Save Settings'
    @click='[togglePopUpProfile(), saveUserSettings(form)]'
    ></app-button>
  </div>
  <div class="profile__pad"></div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import AppUpload from '@/components/App/AppUpload.vue';

import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
    },
  },
  data() {
    return {
      form:{
        username: '',
        logo: {
          src: '',
        },
      },
    }
  },
  computed: {
    ...mapGetters(['allWallets']),
    ...mapGetters([
      'currentWallet',
      'user',
      'walletConnected',
    ]),
    profileState() {
      return this.opened ? 'profile--active' : ''
    },
    profileConnected() {
      return this.walletConnected ? 'profile--connected' : ''
    },
  },
  methods: {
    blockchainCheckedState(value){
      return value === this.currentWallet.value
    },
    setLogo(value){
      this.form.logo = value
      this.form.logo.src = URL.createObjectURL(value)
    },
    ...mapMutations([
      'saveUserSettings',
      'togglePopUpProfile',
      'clearUserLogo',
      'togglePopUpWallets',
      'quitWallet'
    ])
  },
  components: {
    AppInput,
    AppUpload,
  },
}
</script>