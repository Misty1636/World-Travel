import axios from 'axios';
import router from '../router';

export default {
  strict: true,
  namespaced: true,
  state: {},
  actions: {
    signin(context, user) {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      context.commit('ISLOADING', true, { root: true });
      return new Promise((resolve) => {
        axios.post(api, user).then((response) => {
          context.commit('ISLOADING', false, { root: true });
          if (response.data.success) {
            context.dispatch('AlertModule/updateMessage', { message: '登入成功', status: 'success' }, { root: true });
            router.push('/admin/buildProducts');
          } else {
            context.dispatch('AlertModule/updateMessage', { message: '帳號或密碼有誤', status: 'danger' }, { root: true });
            resolve();
          }
        });
      });
    },
    logout(context) {
      const api = `${process.env.VUE_APP_API}/logout`;

      axios.post(api).then((response) => {
        if (response.data.success) {
          router.push('/Login');
        } else {
          context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
        }
      });
    },
  },
  mutations: {},
  getters: {},
};
