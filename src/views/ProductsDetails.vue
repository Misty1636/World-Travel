<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="../assets/002.gif">
      </template>
    </loading>

    <div class="ProductsDetails pt-7">
      <div class="container ProductsDetails-box mx-auto" v-if="currentPageProduct.title">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent p-0 text-secondary">
            <li class="breadcrumb-item">精選行程</li>
            <li class="breadcrumb-item">{{currentPageProduct.category}}</li>
            <li class="breadcrumb-item">{{currentPageProduct.title}}</li>
          </ol>
        </nav>
        <div class="row ProductsDetails-main mb-5">
          <div class="col-xl-7 col-lg-8 ProductsDetails-img mb-lg-0 mb-4">
            <img class="img-fluid" :src="currentPageProduct.imageUrl" alt="">
          </div>
          <div class="col-xl-5 col-lg-4 pt-xl-3">
            <div class="ProductsDetails-content">
              <h1 class="mb-0 font-weight-bold">{{currentPageProduct.title}}</h1>
              <hr>
              <div class="d-flex justify-content-between align-items-center mb-4">
                <span class="text-secondary oldprice">原價 {{currentPageProduct.origin_price | currency}}</span>
                <span class="offer">現在報名 {{currentPageProduct.price | currency}}</span>
              </div>
              <ul class="list-unstyled remind mb-3">
                <li>
                  <span><font-awesome-icon icon="check-square" /></span>
                  含國內外機場稅
              </li>
                <li>
                  <span><font-awesome-icon icon="user" /></span>
                  15人以上成行
                </li>
                <li>
                  <span><font-awesome-icon icon="comments" /></span>
                  超過10人請洽客服享額外優惠
                </li>
              </ul>
              <select name="count" class="form-control mb-3" v-model="counts">
                <option :value="num" v-for="num in 10" :key="num">
                  總共 {{num}} {{currentPageProduct.unit}}
                </option>
              </select>
              <div class="d-flex justify-content-end total-price">
                <span class="">小計 <strong>{{ counts * currentPageProduct.price | currency}}</strong></span>
              </div>
              <div class="text-right">
                <button type="button" class="registration-btn"  @click="addtoCart(currentPageProduct.id, counts)">
                  立即報名
                  <font-awesome-icon icon="spinner" spin  v-if="currentPageProduct.id === cartItem"/>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="ProductsDetails-description pt-3 mb-6">
          <div class="d-flex align-items-center mb-3">
            <span class="bookmark" ><font-awesome-icon icon="bookmark"/></span>
            <h3 class="ml-2 mb-0">特色介紹</h3>
          </div>
          <p class="mb-5 text-secondary">{{currentPageProduct.description}}</p>
          <div class="d-flex align-items-center mb-3">
            <span class="star"><font-awesome-icon icon="star"/></span>
            <h3 class="ml-2 mb-0">注意事項</h3>
          </div>
          <Attention :attentionItem="currentPageProduct" />
        </div>

      </div>
    </div>

  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import Attention from '../components/attention';

export default {
  name: 'ProductsDetails',
  data() {
    return {
      counts: 1,
      currentPageProduct: {},
    };
  },
  methods: {
    addtoCart(id, qty = 1) {
      const vm = this;
      this.$store.dispatch('CartModule/addtoCart', { id, qty }).then(() => {
        vm.counts = 1;
      });
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('ProductModule', ['currentProduct']),
    ...mapGetters('CartModule', ['cartItem']),
  },
  components: {
    Attention,
  },
  created() {
    this.$store.dispatch('ProductModule/getCurrentPageProduct', this.$route.params.id).then(() => {
      this.currentPageProduct = Object.assign({}, this.currentProduct);
    });
  },
};
</script>

<style lang="scss" scoped>
  .bg-transparent{
    background: transparent;
    font-size: 14px;
    @media (min-width: 576px){
      font-size: 16px;
    }
  }
</style>
