import axios from 'axios';
import router from '../router';

export default {
  strict: true,
  namespaced: true,
  state: {
    order: {
      user: {},
    },
  },
  actions: {
    createOrder(context, order) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/order`;

      context.commit('ISLOADING', true, { root: true });
      return new Promise((resolve) => {
        axios.post(api, { data: order }).then((response) => {
          context.commit('ISLOADING', false, { root: true });
          if (response.data.success) {
            resolve();
            context.dispatch('CartModule/getCart', null, { root: true });
            setTimeout(() => { // 為了讓resolve有穩定時間改變leave狀態
              router.replace(`/OrderPayment/${response.data.orderId}`);
            }, 200);
          } else {
            context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
          }
        });
      });
    },
    getOrder(context, id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/order/${id}`;
      axios.get(api).then((response) => {
        context.commit('GETORDER', response.data.order);
      });
    },
    payOrder(context, id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/pay/${id}`;

      context.commit('ISLOADING', true, { root: true });
      return new Promise((resolve) => {
        axios.post(api).then((response) => {
          context.commit('ISLOADING', false, { root: true });
          if (response.data.success) {
            resolve();
            context.dispatch('AlertModule/updateMessage', { message: '付款完成', status: 'success' }, { root: true });
            context.dispatch('CartModule/getCart', null, { root: true });
            setTimeout(() => { // 為了讓resolve有穩定時間改變leave狀態
              router.replace(`/OrderComplete/${id}`);
            }, 200);
          } else {
            context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
          }
        });
      });
    },
  },
  mutations: {
    GETORDER(state, payload) {
      state.order = payload;
    },
  },
  getters: {
    order: state => state.order,
  },
};
