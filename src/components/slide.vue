<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="`background-image: url(${slide.imgPath}); background-position: center center;
        background-size: cover;`">
        <div class="container d-flex align-items-center h-100 swiper-box">
          <div class="swipertext d-flex flex-column align-items-center">
            <h2 class="mb-1 pb-1">{{slide.country}}</h2>
            <span>{{slide.en}}</span>
          </div>  
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: "slide",
  data(){
    return {
      swiperOption: {
        loop: true,
        centeredSlides: true,
        effect : 'fade',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperSlides: [
        {
          imgPath: 'pro/Fiji-lg.jpg',
          country: '斐濟',
          en: 'Fiji'
        }, 
        {
          imgPath: 'pro/Japan-lg2.jpg',
          country: '日本',
          en: 'Japan'
        }, 
        {
          imgPath: 'pro/Paris-lg.jpg',
          country: '法國',
          en: 'France'
        }, 
        {
          imgPath: 'pro/Switzerland-lh.jpg',
          country: '瑞士',
          en: 'Swiss'
        }, 
        {
          imgPath: 'pro/China-lg.jpg',
          country: '中國',
          en: 'China'
        }
      ]
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  mounted(){
    // $('.swiper-container').on('mouseover', function(e) {
    //   this.swiper.autoplay.stop()
    // })
    // $('.swiper-container').on('mouseout', function(e) {
    //   this.swiper.autoplay.start()
    // })
  }
};
</script>

<style lang="scss" scpoed>
  .swiper-container {
    height: 350px;
    @media (min-width: 576px){
      height: 450px;
      @media (min-width: 768px){
        height: 600px;
      }
    }
  }

  .swiper-box{
    transform: translateX(40px);
    @media (min-width: 576px){
      transform: translateX(30px);
      @media (min-width: 768px){
        transform: translateX(20px);
        @media (min-width: 992x){
          transform: translateX(0);
        }
      }
    }
  }

  .swipertext{
    border-radius: 50%;
    background:rgba(#444444,.5); 
    color: #f2f2f2;
    padding: 16px 22.25px;
    @media (min-width: 768px){
        padding: 20px 24px;
      }
    h2{
      font-size: 25px;
      font-weight: 300;
      border-bottom: 1px solid rgba(#fff,.7);
      @media (min-width: 768px){
        font-size: 35px;
      }
    }
    span{
      font-style: italic;
      font-size: 16px;
      @media (min-width: 768px){
        font-size: 18px;
      }
    }
  }
</style>