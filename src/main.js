// vue套件
import Vue from 'vue';

// Ajax套件
import axios from 'axios';
import VueAxios from 'vue-axios';

// bootstrap
import 'bootstrap';

// v-charts
import VCharts from 'v-charts';

// Loading套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// jquery
import 'jquery';
import './jquery-vendor';

// 背景套件
import VideoBg from 'vue-videobg';

// 驗證套件
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';

// 自訂義套件
import App from './App';
import router from './router';
import store from './store';
import './bus';
import currencyFilter from './filters/currency';
import timetampsFilter from './filters/timetamps';
import giveclass from './filters/giveclass';

Vue.component('video-bg', VideoBg);
Vue.use(VCharts);

VeeValidate.Validator.localize('zhTW', zhTW);
Vue.use(VeeValidate, {
  locale: 'zhTW',
  events: 'input|blur',
});

library.add(fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('getTime', timetampsFilter);
Vue.filter('giveclass', giveclass);

axios.defaults.withCredentials = true;
// window.$ = $;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');

router.beforeEach((to, from, next) => {
  /* global $ */
  $('.modal').modal('hide');
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`;

    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
