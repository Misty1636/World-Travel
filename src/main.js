// vue套件
import Vue from "vue";

// Ajax套件
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap";

// Loading套件
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// jquery
import $ from "jquery";
// import "jquery";
import "jquery.mb.ytplayer";
// import VideoBg from "vue-videobg";
// Vue.component("video-bg", VideoBg);
import "../src/customJS";

// 驗證套件

import VeeValidate from "vee-validate";
import zh_TW from "vee-validate/dist/locale/zh_TW";

// 自訂義套件
import App from "./App.vue";
import router from "./router";
import "./bus";
import currencyFilter from "./filters/currency";
import timetampsFilter from "./filters/timetamps";

VeeValidate.Validator.localize("zh_TW", zh_TW);
Vue.use(VeeValidate, {
  locale: "zh_TW",
  events: "input|blur"
});

library.add(fab, far, fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

Vue.component("Loading", Loading);
Vue.filter("currency", currencyFilter);
Vue.filter("getTime", timetampsFilter);

axios.defaults.withCredentials = true;
window.$ = $;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`;

    axios.post(api).then(response => {
      // console.log(response.data)
      if (response.data.success) {
        next();
      } else {
        next({
          path: "/login"
        });
      }
    });
  } else {
    next();
  }
});
