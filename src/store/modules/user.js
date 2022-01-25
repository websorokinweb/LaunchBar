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

  // let walletId = state.nearWallet.getAccountId()
  // mutations.changeWallet(walletId)

  state.nearWalletId = state.nearWallet.getAccountId()

  state.wallet.id = state.nearWallet.getAccountId()

  console.log(state.wallet.id)

  localStorage.setItem('walletId', state.wallet.id)

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
}

async function leaveNear(){
  await state.nearWallet.signOut()

  let result = state.nearWallet.isSignedIn()
  let id = state.nearWallet.getAccountId()
  console.log(result, id)

  localStorage.setItem('undefined_wallet_auth_key', null)
  state.nearWallet = null
  state.nearWalletId = null
}


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
  walletConnected: window.localStorage.getItem('undefined_wallet_auth_key').accountId !== '',
};

const getters = {
  userLogged: state => state.username !== '',
  user: state => state.user,
  wallet: state => state.wallet,
  walletConnected: state => state.walletConnected,
  // walletConnected: state => state.wallet,
  nearWallet: state => state.nearWallet,
  nearWalletId: state => state.nearWalletId,
};

const mutations = {
  saveUserSettings(state, payload){
    state.user = JSON.parse(JSON.stringify(payload))
  },

  connectWallet(){
    connectNear()
  },
  quitWallet(){

    leaveNear()
  },
  // connectWallet(state){

  clearWalletData(){
    localStorage.setItem('undefined_wallet_auth_key', null)
    state.nearWallet = null
    state.nearWalletId = null
  },
  
  // changeWallet(state, payload){
  //   state.wallet.id = payload
  // },
  clearUserLogo(state){
    state.user.logo = {src: ''}
  }
};

const actions = {
  async connectWallet({state}){
    await state.nearWallet.requestSignIn(
      "example-contract.testnet", // contract requesting access
      );
  },
  quitWallet({state, commit}){
    state.nearWallet.signOut()
    commit('clearWalletData')
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
};