import * as nearAPI from "near-api-js";
const { connect, keyStores, WalletConnection } = nearAPI;

const keyStore = new keyStores.BrowserLocalStorageKeyStore();

async function connectNear(){
  const config = {
    networkId: "testnet",
    keyStore, // optional if not signing transactions
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };
  const near = await connect(config);

  const wallet = new WalletConnection(near);

  const signIn = () => {
    wallet.requestSignIn(
      "example-contract.testnet", // contract requesting access
      "Example App", // optional
      "http://YOUR-URL.com/success", // optional
      "http://YOUR-URL.com/failure" // optional
    );
  };
  
  console.log(signIn)
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
  near: null,
};

const getters = {
  userLogged: state => state.username !== '',
  user: state => state.user,
  wallet: state => state.wallet,
  walletConnected: state => state.wallet.id !== '',
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
  quitWallet(state){
    state.wallet = {id: ''}
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