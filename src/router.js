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
      component: () => import('../src/views/layout.vue'),
      children: [
        {
          path: 'index',
          name: 'Home',
          component: () => import('../src/views/Home.vue'),
        },
        {
          path: 'Products',
          name: 'Products',
          component: () => import('../src/views/Products.vue'),
        },
        {
          path: 'ProductsDetails/:id',
          name: 'ProductsDetails',
          component: () => import('../src/views/ProductsDetails.vue'),
        },
        {
          path: 'Guide',
          name: 'Guide',
          component: () => import('../src/views/Guide.vue'),
        },
        {
          path: 'customerCart',
          name: 'customerCart',
          component: () => import('../src/views/customerCart.vue'),
        },
        {
          path: 'CreateOrder',
          name: 'CreateOrder',
          component: () => import('../src/views/CreateOrder.vue'),
        },
        {
          path: 'OrderPayment/:orderId',
          name: 'OrderPayment',
          component: () => import('../src/views/OrderPayment.vue'),
        },
        {
          path: 'OrderComplete/:orderId',
          name: 'OrderComplete',
          component: () => import('../src/views/OrderComplete.vue'),
        },
      ],
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../src/views/Login.vue'),
    },
    {
      name: 'dashboard',
      path: '/admin',
      component: () => import('../src/views/Backstage/dashboard.vue'),
      children: [
        {
          name: 'buildProducts',
          path: 'buildProducts',
          component: () => import('../src/views/Backstage/buildProducts.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'coupons',
          path: 'coupons',
          component: () => import('../src/views/Backstage/coupons.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'report',
          path: 'report',
          component: () => import('../src/views/Backstage/report.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
