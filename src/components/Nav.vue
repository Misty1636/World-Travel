<template>
  <div>
    <header class="header container-fluid">
      <div class="px-lg-5 px-3">
        <div class="d-flex justify-content-end nav">
          <div class="offcanvas-bg"></div>
          <div class="mr-auto align-self-center">
            <router-link to="/index" class="d-block">
              <img src="../assets/worldtravel-logo2.png" style="height:35px;">
              <img src="../assets/worldtravel-logo.png" style="height:40px;transform: translateX(-8px);" alt="World Travel">
            </router-link>
          </div>
          <ul class="menu list-unstyled d-lg-flex mb-0">
            <li class="d-lg-none">
              <a href="#" class="close-link" @click.prevent="closeOffcanvas">
                <font-awesome-icon icon="times" class="close-menu"/>
              </a>
            </li>
            <li><a href="#/index"  @click.prevent="toView('index')"> 首頁</a></li>
            <li class="menu-item"><a href="#/Guide" @click.prevent="toView('Guide')"> 精彩介紹</a></li>
            <li class="menu-item"><a href="#/Products" @click.prevent="toView('Products')"> 行程一覽</a></li>
            <!-- <li class="menu-item"><a href="#/Login" @click.prevent="toLogin"> 訂單查詢</a></li> -->
            <li class="menu-item"><a href="#/Login" @click.prevent="toView('Login')"> 登入</a></li>
          </ul>
          <div class="cart">
            <button type="button" class="dropdown-toggle cart-check" data-toggle="dropdown">
              <font-awesome-icon icon="shopping-cart" class="shopping-cart" />
              <span class="cart-num  text-center text-white" v-if="cartlength>0">{{cartlength}}</span>
            </button>
            <div class="dropdown-menu p-2">
              <h6 class="p-2"><font-awesome-icon icon="plane" class="mincart-icon mr-2"/>已選擇行程</h6>
              <table class="table mb-2">
                <tbody>
                  <tr class="text-nowrap" v-if="cartlength == 0">
                    <td>目前沒有行程，趕快報名吧!</td>
                  </tr>
                  <tr  v-for="item in cart.carts" :key="item.id">
                    <td class="px-2"><img :src="item.product.imageUrl" width="30"></td>
                    <td class="ellipsis px-2 align-middle">{{ item.product.title }}</td>
                    <td class="text-nowrap px-2 align-middle">{{ item.qty }} {{ item.product.unit }}</td>
                    <td class="text-right text-nowrap px-2 align-middle mincart-total">{{item.total | currency}}</td>
                  </tr>
                </tbody>
              </table>
              <button type="button" class="ToCustomerCart" @click="ToCustomerCart">
                前往購物車
              </button>
            </div>
          </div>
          <button type="button" class="mobile-link ml-2" @click.prevent="openOffcanvas">
            <font-awesome-icon icon="bars" />
          </button>
        </div>
      </div>
    </header>
    <Alert />
  </div>
</template>

<script>
/* global $ */
import Alert from '../components/AlertMessage';

export default {
  name: 'Nav',
  data() {
    return {
      cart: {},
      cartlength: 0,
    };
  },
  methods: {
    closeOffcanvas() {
      $('.menu').removeClass('open-offcanvas');
      $('.offcanvas-bg').removeClass('opening-menu');
    },
    openOffcanvas() {
      $('.menu').addClass('open-offcanvas');
      $('.offcanvas-bg').addClass('opening-menu');
    },
    ToCustomerCart() {
      this.$router.push('/customerCart');
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/cart`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.cartlength = vm.cart.carts.length;
      });
    },
    toView(name) {
      this.$router.push(`/${name}`);
      this.closeOffcanvas();
    },
    getrouter() {
      const { path } = this.$route;
      const search = 'index';
      if (path.indexOf(search) !== -1) {
        $('.header').addClass('header-transparent');
        $('.header').removeClass('header-dark');
      } else {
        $('.header').removeClass('header-transparent');
        $('.header').removeClass('header-dark');
      }
    },
  },
  components: {
    Alert,
  },
  mounted() {
    const vm = this;
    vm.getCart();
    vm.getrouter();

    $(window).scroll(() => {
      const { path } = vm.$route;
      const search = 'index';
      const scrollPos = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (path.indexOf(search) === -1) {
        return;
      }

      // eslint-disable-next-line func-names
      $('.header').each(function () {
        const thisPos = $(this).offset().top;
        if (windowHeight + scrollPos >= thisPos) {
          $(this).addClass('header-dark');
        }
        if (scrollPos === 0) {
          $(this).removeClass('header-dark');
        }
      });
    });

    this.$bus.$on(('pushCart'), () => {
      this.getCart();
    });
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    '$route'() {
      this.getrouter();
      // console.log(this.$route.path);
    },
  },
};
</script>

<style lang="scss" scoped>
  .header-transparent{
    background-image: none;
  }
</style>

