import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../src/views/Home.vue";
import Products from "../src/views/Products.vue";
import Guide from "../src/views/Guide.vue";
import Login from "../src/views/Login.vue";
import layout from "../src/views/layout.vue";

Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: "active",
  routes: [
    {
      path: "*",
      redirect: "/index"
    },
    {
      path: "/",
      // name: "layout",
      redirect: "/index",
      component: layout,
      children: [
        {
          path: "index",
          name: "Home",
          component: Home
        },
        {
          path: "/Products",
          name: "Products",
          component: Products
        },
        {
          path: "/Guide",
          name: "Guide",
          component: Guide
        }
      ]
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    }
  ]
});
