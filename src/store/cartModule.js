import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    cart: {},
    cartlength: 0,
    cartItem: '',
  },
  actions: {
    getCart(context) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/cart`;
      context.commit('ISLOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('ISLOADING', false, { root: true });
        if (response.data.success) {
          context.commit('CRAT', response.data.data);
          context.commit('CRATITEM', '');
        } else {
          context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
        }
      });
    },
    addtoCart(context, { id, qty = 1 }) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/cart`;
      context.commit('ISLOADING', true, { root: true });
      context.commit('CRATITEM', id);
      const cart = {
        product_id: id,
        qty,
      };
      return new Promise((resolve) => {
        axios.post(api, { data: cart }).then((response) => {
          context.commit('ISLOADING', false, { root: true });
          if (response.data.success) {
            context.dispatch('AlertModule/updateMessage', { message: '此行程已加入購物車', status: 'success' }, { root: true });
            context.dispatch('getCart');
            resolve();
          } else {
            context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
          }
        });
      });
    },
    deleteCart(context, id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/cart/${id}`;
      context.commit('CRATITEM', id);
      context.commit('ISLOADING', true, { root: true });
      axios.delete(api).then((response) => {
        context.commit('ISLOADING', false, { root: true });
        if (response.data.success) {
          context.dispatch('getCart');
          context.dispatch('AlertModule/updateMessage', { message: '成功刪除此行程', status: 'success' }, { root: true });
        } else {
          context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
        }
      });
    },
    addCouponCode(context, couponcode) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/coupon`;
      const coupon = {
        code: couponcode,
      };
      context.commit('ISLOADING', true, { root: true });
      return new Promise((resolve) => {
        axios.post(api, { data: coupon }).then((response) => {
          context.commit('ISLOADING', false, { root: true });
          if (response.data.success) {
            context.dispatch('AlertModule/updateMessage', { message: '已套用優惠券', status: 'success' }, { root: true });
            context.dispatch('getCart');
            resolve();
          } else {
            context.dispatch('AlertModule/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
            resolve();
          }
        });
      });
    },
  },
  mutations: {
    CRAT(state, payload) {
      state.cart = payload;
      state.cartlength = payload.carts.length;
    },
    CRATITEM(state, payload) {
      state.cartItem = payload;
    },
  },
  getters: {
    cart: state => state.cart,
    cartlength: state => state.cartlength,
    cartItem: state => state.cartItem,
  },
};
