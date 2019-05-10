import Vue from "vue";
import VueRouter from "vue-router";

// 前台
import Home from "../src/views/Home.vue";
import Products from "../src/views/Products.vue";
import Guide from "../src/views/Guide.vue";
import ProductsDetails from "../src/views/ProductsDetails.vue";
import Login from "../src/views/Login.vue";
import layout from "../src/views/layout.vue";
import customerCart from "../src/views/customerCart.vue";
import CreateOrder from "../src/views/CreateOrder.vue";
import Navlayout from "../src/views/Navlayout.vue";
import OrderPayment from "../src/views/OrderPayment.vue";
import OrderComplete from "../src/views/OrderComplete.vue";

// 後台
import dashboard from "../src/views/Backstage/dashboard.vue";
import buildProducts from "../src/views/Backstage/buildProducts.vue";
import coupons from "../src/views/Backstage/coupons.vue";
import report from "../src/views/Backstage/report.vue";

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
      redirect: "/index",
      component: layout,
      children: [
        {
          path: "index",
          name: "Home",
          component: Home
        },
        {
          path: "/",
          name: "Navlayout",
          redirect: "/index",
          component: Navlayout,
          children: [
            {
              path: "Products",
              name: "Products",
              component: Products
            },
            {
              path: "ProductsDetails/:id",
              name: "ProductsDetails",
              component: ProductsDetails
            },
            {
              path: "Guide",
              name: "Guide",
              component: Guide
            },
            {
              path: "customerCart",
              name: "customerCart",
              component: customerCart
            },
            {
              path: "CreateOrder",
              name: "CreateOrder",
              component: CreateOrder
            },
            {
              path: "OrderPayment/:orderId",
              name: "OrderPayment",
              component: OrderPayment
            },
            {
              path: "OrderComplete/:orderId",
              name: "OrderComplete",
              component: OrderComplete
            }
          ]
        }
      ]
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      name: "dashboard",
      path: "/admin",
      component: dashboard,
      children: [
        {
          name: "buildProducts",
          path: "buildProducts",
          component: buildProducts,
          meta: { requiresAuth: true }
        },
        {
          name: "coupons",
          path: "coupons",
          component: coupons,
          meta: { requiresAuth: true }
        },
        {
          name: "report",
          path: "report",
          component: report,
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
});
