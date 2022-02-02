import { createStore } from 'vuex';

import blockchains from "./modules/blockchains";
import user from "./modules/user";
import theme from "./modules/theme";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    blockchains,
    user,
    theme,
  },
});
