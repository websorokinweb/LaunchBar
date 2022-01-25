<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <app-logo></app-logo>
        <app-button
        innerLink
        view="lined"
        title="Create"
        href="gfgffg/"
        ></app-button>
        <button class="header__blockchain btn btn--lined"
        :class='openedBlockchains !== false ? "header__blockchain--active" : ""'
        @click='togglePopUpBlockchains'
        >
          <header-blockchains
          :opened='openedBlockchains'
          ></header-blockchains>
          <div class="header__blockchain-icon">
            <img :src="currentBlockchain.image" alt=""
            v-if="currentBlockchain.value === 'near'"
            >
            <img :src="currentBlockchain.image" alt=""
            v-else
            >
          </div>
          <span class="header__blockchain-name">
            {{ currentBlockchain.label }}
          </span>
          <div class="header__blockchain-arrow">
            <img src="@/assets/images/arrow.svg" alt="">
          </div>
        </button>
        <!-- {{ 'walletConnected - ' + walletConnected }} -->
        <!-- {{ wallet }} -->
        {{ wallet.id }}
        <br>
        {{ walletConnected }}
        <br>
        {{ 'wallet id - '}}
        {{ wallet.id !== '' }}
        <button class="header__wallets btn btn--blue"
        :class='[walletIsOpen, walletIsConnected]'
        @click='[togglePopUpWallets(), copyWalletId()]'
        >
          <span>
            {{ walletConnected ? walletMin : 'Connect' }}
          </span>
          <span class="header__wallets-imgwrapper"
          v-if="walletConnected"
          >
           <img src="@/assets/images/copy.svg" alt="">
          </span>
          <header-wallets
          :opened="openedWallets"
          >
          </header-wallets>
        </button>
        <button class="header__profile btn-clear"
        :class='openedProfile !== false ? "header__profile--active" : ""'
        @click='togglePopUpProfile'
        v-if="walletConnected"
        >
          <img src="@/assets/images/user.svg" alt=""
          v-if="user.logo.src === ''"
          >
          <img class="header__profile-logo"
          v-else
          :src="user.logo.src"
          >
          <header-profile
          :opened="openedProfile"
          >
          </header-profile>
        </button>
        <button class="header__menu-btn header__menu-btn--not-main btn-clear"
        @click='toggleMenu()'
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
    <div class="header__menu"
    :class='[menuIsOpen, menuIsNotOnMainPage]'
    @click='toggleMenu()'
    >
      <button class="header__blockchain btn-clear"
      :class='openedBlockchains ? "header__blockchain--active" : ""'
      @click.stop='togglePopUpBlockchains'
      >
        <header-blockchains
        :opened='openedBlockchains'
        ></header-blockchains>
        <div class="header__blockchain-icon">
          <img :src="currentBlockchain.imageMin" alt=""
          v-if="currentBlockchain.value === 'near'"
          >
          <img :src="currentBlockchain.image" alt=""
          v-else
          >
        </div>
        <span class="header__blockchain-name">
          {{ currentBlockchain.label }}
        </span>
        <div class="header__blockchain-arrow">
          <img src="@/assets/images/arrow.svg" alt="">
        </div>
      </button>
      <button class="header__wallets btn-clear"
      :class='[walletIsOpen, walletIsConnected]'
      @click.stop='togglePopUpWallets'
      >
        <span>
          {{ walletConnected ? walletMin : 'Connect' }}
        </span>
        <span class="header__wallets-imgwrapper"
        v-if="walletConnected"
        >
         <img src="@/assets/images/copy.svg" alt=""
         @click="copyWalletId()"
         >
        </span>
        <header-wallets
        :opened="openedWallets"
        >
        </header-wallets>
      </button>
      <button class="header__profile btn-clear"
      :class='openedProfile !== false ? "header__profile--active" : ""'
      @click.stop='togglePopUpProfile'
      >
        <img src="@/assets/images/user.svg" alt=""
        v-if="user.logo.src === ''"
        >
        <img class="header__profile-logo"
        v-else
        :src="user.logo.src"
        >
        <header-profile
        :opened="openedProfile"
        >
        </header-profile>
      </button>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import AppLogo from '@/components/App/AppLogo.vue';
import HeaderBlockchains from '@/components/Header/HeaderBlockchains.vue';
import HeaderWallets from '@/components/Header/HeaderWallets.vue';
import HeaderProfile from '@/components/Header/HeaderProfile.vue';

export default {
  data() {
    return {
      menuOpened: false,
      links:[
        {
          label: 'About',
          href: 'cover',
        },
        {
          label: 'Game',
          href: 'play',
        },
        {
          label: 'NFT',
          href: 'collection',
        },
        {
          label: 'Roadmap',
          href: 'roadmap',
        },
        {
          label: 'How to buy?',
          href: 'buy',
        },
      ],
      headerLinkTitle: 'Mint NFT',
      headerLinkHref: 'http://flokicyberpunk.mantial.com/',
      headerLinkDescr: 'You go to mantial.com',
    }
  },
  methods: {
    toggleMenu(){
      this.menuOpened = !this.menuOpened
    },
    ...mapMutations([
      'togglePopUpBlockchains',
      'togglePopUpWallets',
      'togglePopUpProfile',
    ]),
    copyWalletId(){
      const el = document.createElement('textarea');
      el.value = this.wallet.id;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
  },
  computed: {
    ...mapGetters([
      'currentBlockchain',
      'openedBlockchains',
      'openedWallets',
      'openedProfile',
      'walletConnected',
      'wallet',
      'user',
    ]),
    walletIsOpen(){
      return this.openedWallets !== false ? "header__wallets--active" : ""
    },
    walletIsConnected(){
      return this.walletConnected !== false ? "header__wallets--connected" : ""
    },
    walletMin(){
      return this.wallet.id.substr(0, 5) + '...' + this.wallet.id.substr(-4, this.wallet.id.length)
    },
    menuIsOpen(){
      if(this.menuOpened || this.openedWallets){
        return "header__menu--active"
      }
      return ""
    },
    menuIsNotOnMainPage(){
      return this.$route.name === 'Index' ?  "" : "header__menu--not-main"
    },
  },
  components: {
    AppLogo,
    HeaderBlockchains,
    HeaderWallets,
    HeaderProfile,
  },
}
</script>