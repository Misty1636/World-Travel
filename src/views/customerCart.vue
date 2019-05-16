<template>
  <div>
    <loading :active.sync="isLoading" style="z-index:1080 !important;">
      <template slot="default">
        <img src="../assets/002.gif">
      </template>
    </loading>

    <div class="pt-8 container customerCart">
      <h1 class="text-center customerCart-title mb-5 text-secondary" v-if="cart.total">您的購物車</h1>
      <h5 class="text-center py-5 mt-3 mb-5 nonecart" v-if="!cart.total">目前您的購物車沒有任何行程!</h5>
      <hr v-if="!cart.total">
      <h3 class="cart-recommend mb-4 pl-2" v-if="!cart.total">為您推薦!</h3>
      <productSlide v-if="!cart.total"/>

      <div class="row" v-if="cart.total">
        <div class="col-lg-7">
          <ul class="list-unstyled customerCart-list">
            <li class="p-3 mb-3" v-for="item in cart.carts" :key="item.id">
              <div class="d-flex flex-column flex-sm-row">
                <div class="customerCart-img mr-sm-3 mb-sm-0 mb-3">
                  <img :src="item.product.imageUrl" class="img-fluid">
                </div>
                <div class="d-flex align-items-center">
                  <div>
                    <h4 class="customerCart-list-title mb-3">{{item.product.title}}</h4>
                    <div class="customerCart-list-info d-flex">
                      <span class="price mr-3">{{item.product.price | currency}}</span>
                      <span class="mr-2">x</span>
                      <span>{{ item.qty }} {{ item.product.unit }}</span>
                    </div>
                  </div>
                </div>
                <div class="ml-auto align-self-center">
                  <button type="button" class="delete-cartlist" :class="{disabled:item.id === cartdisable}" @click="deleteCart(item.id)">
                    <span v-if="item.id !== cartItem">刪除</span>
                    <font-awesome-icon icon="spinner" spin v-else/>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-lg-5">
          <div class="customerCart-order mb-4">
            <div class="p-3">
              <h2>訂單金額</h2>
              <hr class="mb-0">
              <div>
                <div class="d-flex customerCart-order-item align-items-start"  v-for="items in cart.carts" :key="items.id">
                  <div class="d-flex flex-column">
                    <h5 class="mb-0">{{items.product.title}}</h5>
                    <span>{{ items.qty }} {{ items.product.unit }}</span>
                  </div>
                <span class="ml-auto order-item-price">{{ items.total | currency }}</span>
                </div>

                <div class="d-flex customerCart-order-item align-items-start text-success" v-if="cart.final_total&&cart.final_total !==cart.total">
                  <div class="d-flex flex-column">
                    <h5 class="mb-0">已套用優惠</h5>
                    <span>{{ (cart.final_total/cart.total*100) }}% OFF</span>
                  </div>
                  <span class="ml-auto order-item-price">-{{ (cart.total -cart.final_total) | currency }}</span>
                </div>
                <div class="d-flex customerCart-order-item align-items-start">
                  <div class="d-flex flex-column">
                    <h5 class="mb-0">簽證費</h5>
                  </div>
                  <span class="ml-auto order-item-price">免簽證</span>
                </div>
                <div class="d-flex customerCart-order-item border-0 align-items-start">
                  <div class="d-flex flex-column">
                    <h5 class="mb-0">機場稅、燃油費</h5>
                  </div>
                  <span class="ml-auto order-item-price">已內含</span>
                </div>
                <hr class="mt-0">
                <div class="input-group input-group-sm">
                  <input type="text" class="form-control"  placeholder="請輸入優惠碼" v-model="coupon_code">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">套用優惠碼</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3 customerCart-order-Nextstep">
              <div class="d-flex justify-content-end mb-3 align-items-end">
                <span class="subtotal mr-2">總計</span>
                <span class="total">{{ cart.final_total | currency }}</span>
              </div>
              <button type="button" @click="toCreateOrder">下一步</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import productSlide from '../components/productSlide';

export default {
  name: 'customerCart',
  data() {
    return {
      cartdisable: '',
      coupon_code: '',
    };
  },
  methods: {
    deleteCart(id) {
      const vm = this;
      vm.cartdisable = id;
      this.$store.dispatch('CartModule/deleteCart', id);
    },
    addCouponCode() {
      const vm = this;
      if (vm.coupon_code !== '') {
        this.$store.dispatch('CartModule/addCouponCode', vm.coupon_code).then(() => {
          vm.coupon_code = '';
        });
      }
    },
    toCreateOrder() {
      this.$router.push('/CreateOrder');
    },
    ...mapActions('CartModule', ['getCart']),
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('CartModule', ['cart', 'cartItem']),
  },
  components: {
    productSlide,
  },
  created() {
    this.getCart();
  },
};
</script>
