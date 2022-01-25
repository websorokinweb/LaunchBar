const state = {
  user:{
    logo: {
      src: '',
    },
    username: '',
  },
  wallet:{
   id: '', 
  },
  nearWallet: null,
  nearWalletId: null,
};

import * as nearAPI from "near-api-js";
// const { connect, keyStores } = nearAPI;
const { connect, keyStores, WalletConnection } = nearAPI;

async function nearSetup(){

  const keyStore = new keyStores.BrowserLocalStorageKeyStore();
  
  const config = {
    networkId: "testnet",
    keyStore, // optional if not signing transactions
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
    // contractId: 'nepheline.testnet',
    // marketId: "market." + 'nepheline.testnet',
    // GAS: "200000000000000",
  };
  
  const near = await connect({ ...config, keyStore });
  state.nearWallet = new WalletConnection(near);

  state.wallet.id = state.nearWallet.getAccountId()

  state.nearWalletId = state.nearWallet.getAccountId()

  console.log(state.wallet.id)

  // state.walletConnected = state.wallet.id !== ''
}

// function checkIfNearConnected(){
//   console.log(nearWallet)
//   // state.nearWalletId = nearWallet.getAccountId()
// }

nearSetup()

// checkIfNearConnected()

async function connectNear(){

  await state.nearWallet.requestSignIn(
    "example-contract.testnet", // contract requesting access
    );

  // state.nearWalletId = state.nearWallet.getAccountId()

  console.log(state.nearWallet, state.nearWalletId)
}

function leaveNear(){
  state.nearWallet.signOut()
  console.log(state.nearWallet)

  localStorage.setItem('undefined_wallet_auth_key', null)
  state.nearWallet = null
  state.nearWalletId = null
}

const getters = {
  userLogged: state => state.username !== '',
  user: state => state.user,
  wallet: state => state.wallet,
  walletConnected: state => state.nearWalletId === null,
  nearWallet: state => state.nearWallet,
  nearWalletId: state => state.nearWalletId,
};

const mutations = {
  saveUserSettings(state, payload){
    state.user = JSON.parse(JSON.stringify(payload))
  },

  // connectWallet(state){
  connectWallet(){
    connectNear()
    // state.wallet.id = 'anvc6-vxkdpwn2ks2rm4l-gae'
  },
  // quitWallet(state){
  quitWallet(){
    // state.wallet = {id: ''}

    leaveNear()
  },
  clearUserLogo(state){
    state.user.logo = {src: ''}
  }
};

export default {
  state,
  getters,
  mutations,
};