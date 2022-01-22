const state = {
  user:{
    logo: {
      src: '',
    },
    username: '',
  },
  wallet:{
   id: '', 
  }
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