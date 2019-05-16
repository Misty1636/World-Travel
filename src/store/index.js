import Vue from 'vue';
import Vuex from 'vuex';

import AlertModule from './alertModule';
import BackstageModule from './backstageModule';
import CartModule from './cartModule';
import OrderModule from './orderModule';
import ProductModule from './productModule';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
  },
  actions: {},
  mutations: {
    ISLOADING(state, status) {
      state.isLoading = status;
    },
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  modules: {
    AlertModule,
    BackstageModule,
    CartModule,
    OrderModule,
    ProductModule,
  },
});
