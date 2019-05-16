<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for='item in theslideproducts' :key="item.id">
        <div class="px-2">
          <div class="list-box">
            <div class="list-img">
              <img class="img-fluid" :src="item.imageUrl" alt="">
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
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <ProductModal :theProduct="temproduct" :loadingtoCart="cartItem"/>

  </div>
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import ProductModal from './productModal';

export default {
  name: 'slide',
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 14,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
      },
      theslideproducts: [],
    };
  },
  components: {
    swiper,
    swiperSlide,
    ProductModal,
  },
  methods: {
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
    ...mapGetters('ProductModule', ['slideproducts', 'temproduct']),
    ...mapGetters('CartModule', ['cartItem']),
  },
  created() {
    this.$store.dispatch('ProductModule/getSlideProducts').then(() => {
      const vm = this;
      const array = [...vm.slideproducts];

      array.forEach((item, i) => {
        if (i < 8) {
          const randomNum = Math.floor(Math.random() * array.length);
          vm.theslideproducts.push(array.splice(randomNum, 1)[0]);
        }
      });
    });
  },
};
</script>

<style lang="scss" scpoed>
  .swiper-container {
    height: 430px;
      @media (min-width: 440px){
        height: 470px;
        @media (min-width: 500px){
        height: 500px;
        @media (min-width: 768px){
          height: 420px;
          @media (min-width: 992px){
            height: 500px;
            @media (min-width: 1140px){
              height: 530px;
            }
          }
        }
      }
    }
  }
</style>
