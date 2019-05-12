import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/index',
    },
    {
      path: '/',
      redirect: '/index',
      component: () => import('./views/layout.vue'),
      children: [
        {
          path: 'index',
          name: 'Home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: 'Products',
          name: 'Products',
          component: () => import('./views/Products.vue'),
        },
        {
          path: 'ProductsDetails/:id',
          name: 'ProductsDetails',
          component: () => import('./views/ProductsDetails.vue'),
        },
        {
          path: 'Guide',
          name: 'Guide',
          component: () => import('./views/Guide.vue'),
        },
        {
          path: 'customerCart',
          name: 'customerCart',
          component: () => import('./views/customerCart.vue'),
        },
        {
          path: 'CreateOrder',
          name: 'CreateOrder',
          component: () => import('./views/CreateOrder.vue'),
        },
        {
          path: 'OrderPayment/:orderId',
          name: 'OrderPayment',
          component: () => import('./views/OrderPayment.vue'),
        },
        {
          path: 'OrderComplete/:orderId',
          name: 'OrderComplete',
          component: () => import('./views/OrderComplete.vue'),
        },
      ],
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
    },
    {
      name: 'dashboard',
      path: '/admin',
      component: () => import('./views/Backstage/dashboard.vue'),
      children: [
        {
          name: 'buildProducts',
          path: 'buildProducts',
          component: () => import('./views/Backstage/buildProducts.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'coupons',
          path: 'coupons',
          component: () => import('./views/Backstage/coupons.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'report',
          path: 'report',
          component: () => import('./views/Backstage/report.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
