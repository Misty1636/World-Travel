import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    products: [],
    slideproducts: [],
    temproduct: {},
    currentProduct: {},
    copycurrentProduct: {},
    continent: '',
    pagination: {
      total_pages: 1,
      current_page: 1,
      has_pre: false,
      has_next: false,
      page_size: 8,
    },
  },
  actions: {
    getProducts(context, page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/products/all`;
      context.commit('ISLOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('ISLOADING', false, { root: true });
        if (response.data.success) {
          context.commit('GETPRODUCTS', response.data.products);
          context.commit('FILTERPRODUCTS', page);
        } else {
          context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
        }
      });
    },
    getCurrentProduct(context, id) { // Modal用
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/product/${id}`;
      return new Promise((resolve) => {
        axios.get(api).then((response) => {
          if (response.data.success) {
            context.commit('GETCURRENTPRODUCT', response.data.product);
            resolve();
          } else {
            context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
          }
        });
      });
    },
    getCurrentPageProduct(context, id) { // 頁面用
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/product/${id}`;
      context.commit('ISLOADING', true, { root: true });
      return new Promise((resolve) => {
        axios.get(api).then((response) => {
          context.commit('ISLOADING', false, { root: true });
          if (response.data.success) {
            context.commit('GETCURRENTPAGEPRODUCT', response.data.product);
            resolve();
            setTimeout(() => {
              context.commit('GETCURRENTPAGEPRODUCT', {});
            }, 500);
          } else {
            context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
          }
        });
      });
    },
    getSlideProducts(context) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/products/all`;
      context.dispatch('CartModule/getCart', null, { root: true });
      return new Promise((resolve) => {
        axios.get(api).then((response) => {
          if (response.data.success) {
            context.commit('GETSLIDEPRODUCTS', response.data.products);
            resolve();
          } else {
            context.dispatch('AlertModule/updateMessage', { message: '出現異常，請稍後再試', status: 'danger' }, { root: true });
          }
        });
      });
    },
  },
  mutations: {
    GETPRODUCTS(state, payload) {
      state.products = payload;
    },
    FILTERPRODUCTS(state, payload) {
      if (state.continent !== '') { // 判別地區
        state.products = state.products.filter(item => item.category === state.continent);
      }
      const len = state.products.length;
      const size = state.pagination.page_size;
      state.pagination.total_pages = Math.ceil(len / size); // 限制最多8個一頁
      state.pagination.current_page = payload;
      if (payload > 1) {
        state.pagination.has_pre = true;
      } else {
        state.pagination.has_pre = false;
      }
      if (payload < state.pagination.total_pages) {
        state.pagination.has_next = true;
      } else {
        state.pagination.has_next = false;
      }

      state.products = state.products.slice((0 + size * (payload - 1)), size * payload); // 取出第幾頁資料
    },
    GETCURRENTPAGEPRODUCT(state, payload) {
      state.currentProduct = payload;
    },
    GETCURRENTPRODUCT(state, payload) {
      state.temproduct = payload;
    },
    CURRENTCONTINENT(state, payload) {
      if (state.continent === payload && payload !== '') { // 點擊當前區域清空
        state.continent = '';
      } else {
        state.continent = payload;
      }
    },
    GETSLIDEPRODUCTS(state, payload) {
      state.slideproducts = payload;
    },
  },
  getters: {
    products: state => state.products,
    temproduct: state => state.temproduct,
    currentProduct: state => state.currentProduct,
    continent: state => state.continent,
    pagination: state => state.pagination,
    slideproducts: state => state.slideproducts,
  },
};
