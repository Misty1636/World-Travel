<template>
  <div>
    <div class="Products-banner">
      <loading :active.sync="isLoading" style="z-index:1080 !important;">
        <template slot="default">
          <img src="../assets/002.gif">
        </template>
      </loading>

      <slide />

      <section class="Products-main pt-6 container" id="MainProducts">
        <div class="d-flex justify-content-center Products-title">
          <h1 class="mb-4 px-5">
             <font-awesome-icon icon="plane"  />
            精選行程
          </h1>
        </div>
        <div class="Products-continent mb-6">
          <ul class="list-unstyled d-flex justify-content-center mb-0">
            <li><a href="#" class="Asia" :class="{active: continent == '亞洲'}" @click.prevent="currentContinent('亞洲')">亞洲</a></li>
            <li><a href="#" class="Europe" :class="{active: continent == '歐洲'}" @click.prevent="currentContinent('歐洲')">歐洲</a></li>
            <li><a href="#" class="Oceania" :class="{active: continent == '大洋洲'}" @click.prevent="currentContinent('大洋洲')">大洋洲</a></li>
            <li><a href="#" class="America" :class="{active: continent == '美洲'}" @click.prevent="currentContinent('美洲')">美洲</a></li>
            <li><a href="#" class="Africa" :class="{active: continent == '非洲'}" @click.prevent="currentContinent('非洲')">非洲</a></li>
          </ul>
        </div>
        <div class="Products-list row">

          <div class="col-md-6 col-12 mb-6" v-for='item in products' :key="item.id">
            <div class="list-box">
              <div class="list-img">
                <img class="img-fluid" :src="item.imageUrl">
                <div class="list-more p-3 d-flex justify-content-center align-items-center">
                  <a :href="`#/ProductsDetails/${item.id}`" @click.prevent="ToProductsDetaill(item.id)">More</a>
                  <button type="button" class="list-btn" @click="getCurrentProduct(item.id)">我要報名</button>
                </div>
              </div>
              <div class="list-content p-3">
                <h4 class="mb-3">{{item.title}}</h4>
                <p class="text-secondary">{{item.description}}</p>
                <div class="list-price d-flex justify-content-between align-items-center">
                  <span class="oldprice text-secondary">{{item.origin_price | currency}}</span>
                  <span class="newprice">{{item.price | currency}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pagination :pages="pagination" @thePage="getProducts" @scrollTarget="scroll" class="d-flex justify-content-center mb-6"/>
    </div>

    <ProductModal :theProduct="temproduct" :loadingtoCart="cartItem" />

  </div>
</template>

<script>
/* global $ */
import { mapGetters, mapActions } from 'vuex';
import slide from '../components/slide';
import Pagination from '../components/pagination';
import ProductModal from '../components/productModal';

export default {
  name: 'Products',
  components: {
    slide,
    Pagination,
    ProductModal,
  },
  methods: {
    currentContinent(item) { // 當前區域給予樣式及過濾資料
      this.$store.commit('ProductModule/CURRENTCONTINENT', item); // 不做任何異步可以直接commit
      this.getProducts();
      const { top } = $('#MainProducts').offset();
      $('html,body').animate({ scrollTop: (top - 47.5) }, 1000);
    },
    scroll() { // 分頁點擊滾動
      setTimeout(() => {
        const { top } = $('#MainProducts').offset();
        $('html,body').animate({ scrollTop: (top - 47.5) }, 1000);
      }, 1000);
    },
    ...mapActions('ProductModule', ['getProducts']),
    getCurrentProduct(id) {
      this.$store.dispatch('ProductModule/getCurrentProduct', id).then(() => {
        $('#productModal').modal('show');
      });
    },
    ToProductsDetaill(id) {
      this.$router.push(`/ProductsDetails/${id}`);
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('ProductModule', ['products', 'temproduct', 'continent', 'pagination']),
    ...mapGetters('CartModule', ['cartItem']),
  },
  created() {
    this.$store.commit('ProductModule/CURRENTCONTINENT', '');
    this.getProducts();
  },
};
</script>
