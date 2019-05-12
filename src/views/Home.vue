<template>
  <div id="home">

    <transition name="fade">
      <div class="loading-box">
        <div class="loading-bg d-flex justify-content-center align-items-center h-100">
          <div class="d-flex flex-column loading-img justify-content-center">
            <img src="../assets/001.gif">
            <span class="text-center h3 mb-0">
              <img src="../assets/Opening.png">
              <em></em>
            </span>
          </div>
        </div>
      </div>
    </transition>

    <div class="banner-bg">
      <video-bg :sources="['./Croatia short.mp4']">
        <div class="banner-mask d-flex justify-content-center align-items-center">
          <div class="p-2 title-bg">
            <div class="title-box p-3 pr-4">
              <small class="mb-3 text-white">Discover All That's Possible</small>
              <h1 class="mb-0 text-white">
                <em>Enjoy Your Travel</em>
              </h1>
            </div>
          </div>
          <a href="#newzealand" class="explore-icon text-center text-white" @click.prevent="toTarget('newzealand')">
            <font-awesome-icon icon="angle-double-down" class="angle-down" />
          </a>
        </div>
      </video-bg>
    </div>

    <section class="container-fluid common newzealand-bg" id="newzealand">
      <div class="newzealand-content">
        <div class="newzealand-box p-md-4 p-3 text-white animated-left">
          <div class="hr-style"></div>
          <h3 class="py-3 mb-0 d-flex justify-content-between">
            <span>紐西蘭</span>
            <em class="align-self-end">New Zealand</em>
          </h3>
          <div class="hr-style mb-2"></div>
          <h5>東格里羅國家公園</h5>
          <p class="mb-3">東格里羅國家公園於1993年成為第一個被列入世界遺產目錄的公園，位於紐西蘭北島中部的一個火山類型的國家公園，在東格里羅國家公園內有許多火山，最典型的為湯加里羅山、魯阿佩胡山和奈烏魯赫山。這三座火山在距今200萬年前就開始噴發，至今仍處於活躍狀態。</p>
          <div class="text-right">
            <a href="#/Products" class="common-btn" @click.prevent="toProducts">
              <font-awesome-icon icon="arrow-right" />
              看行程
            </a>
          </div>
          <div class="d-md-none mt-3">
            <img src="../assets/images/new-zealand-sm.jpg">
          </div>
        </div>
      </div>
      <a href="#Maldives" class="explore-icon text-center text-white d-none d-md-block" @click.prevent="toTarget('Maldives')">
        <font-awesome-icon icon="angle-double-down" class="angle-down" />
      </a>
    </section>

    <section class="container-fluid common Maldives-bg" id="Maldives">
      <div class="Maldives-content">
        <div class="Maldives-box p-md-4 p-3 text-white animated-right">
          <div class="hr-style"></div>
          <h3 class="py-3 mb-0 d-flex justify-content-between">
            <span>馬爾地夫</span>
            <em class="align-self-end">Maldives</em>
          </h3>
          <div class="hr-style mb-2"></div>
          <h5>美祿島</h5>
          <p class="mb-3">位於斯里蘭卡西南方，由一千多座珊瑚環礁島嶼組成，其中約200個有人居住，80多個島由政府提供出租權給業者經營度假飯店。珊瑚礁島面積都很小，步行繞島一圈通常只需30分鐘，因此一島一飯店的度假型態讓馬爾地夫成為高私密度的蜜月首選地，並洋溢著獨特的浪漫氣息。</p>
          <div class="text-right">
            <a href="#/Products" class="common-btn" @click.prevent="toProducts">
              <font-awesome-icon icon="arrow-right" />
              看行程
            </a>
          </div>
          <div class="d-md-none mt-3">
            <img src="../assets/images/Maldives-sm.jpg">
          </div>
        </div>
      </div>
      <a href="#Egypt" class="explore-icon text-center text-white d-none d-md-block" @click.prevent="toTarget('Egypt')">
        <font-awesome-icon icon="angle-double-down" class="angle-down" />
      </a>
    </section>

    <section class="container-fluid common Egypt-bg" id="Egypt">
      <div class="Egypt-content">
        <div class="Egypt-box p-md-4 p-3 text-white animated-left">
          <div class="hr-style"></div>
          <h3 class="py-3 mb-0 d-flex justify-content-between">
            <span>埃及</span>
            <em class="align-self-end">Egypt</em>
          </h3>
          <div class="hr-style mb-2"></div>
          <h5>吉薩金字塔</h5>
          <p class="mb-3">主要由三個金字塔組成，當中最大的是胡夫金字塔-又稱大金字塔，也是古代世界七大奇蹟中最古老及唯一尚存的建築物，現在旁邊還設立了太陽船博物館；次大的是卡夫拉金字塔；最小的是孟卡拉金字塔。在這三個主要金字塔旁有著名的獅身人面像和3座屬於皇后的小型金字塔。</p>
          <div class="text-right">
            <a href="#/Products" class="common-btn" @click.prevent="toProducts">
              <font-awesome-icon icon="arrow-right" />
              看行程
            </a>
          </div>
          <div class="d-md-none mt-3">
            <img src="../assets/images/Egypt-sm.jpg">
          </div>
        </div>
      </div>
      <a href="#Peru" class="explore-icon text-center text-white d-none d-md-block" @click.prevent="toTarget('Peru')">
        <font-awesome-icon icon="angle-double-down" class="angle-down" />
      </a>
    </section>

    <section class="container-fluid common Peru-bg" id="Peru">
      <div class="Peru-content">
        <div class="Peru-box p-md-4 p-3 text-white animated-right">
          <div class="hr-style"></div>
          <h3 class="py-3 mb-0 d-flex justify-content-between">
            <span>秘魯</span>
            <em class="align-self-end">Peru</em>
          </h3>
          <div class="hr-style mb-2"></div>
          <h5>馬丘比丘</h5>
          <p class="mb-3">馬丘比丘為著名的前哥倫布時期時印加帝國的遺蹟，西北方距庫斯科130公里，位於祕魯的安地斯山脈之中，整個遺址高聳在海拔2000多米的山脊上，俯瞰著烏魯班巴河谷，因此有著天空之城之稱，也是世界新七大奇蹟之一，同時也被聯合國科教文組織列為世界遺產保護區。</p>
          <div class="text-right">
            <a href="#/Products" class="common-btn" @click.prevent="toProducts">
              <font-awesome-icon icon="arrow-right" />
              看行程
            </a>
          </div>
          <div class="d-md-none mt-3">
            <img src="../assets/images/Peru-sm.jpg">
          </div>
        </div>
      </div>
      <a href="#Iceland" class="explore-icon text-center text-white d-none d-md-block" @click.prevent="toTarget('Iceland')">
        <font-awesome-icon icon="angle-double-down" class="angle-down" />
      </a>
    </section>

    <section class="container-fluid common Iceland-bg" id="Iceland">
      <div class="Iceland-content">
        <div class="Iceland-box p-md-4 p-3 text-white animated-left">
          <div class="hr-style"></div>
          <h3 class="py-3 mb-0 d-flex justify-content-between">
            <span>冰島</span>
            <em class="align-self-end">Iceland</em>
          </h3>
          <div class="hr-style mb-2"></div>
          <h5>藍湖溫泉</h5>
          <p class="mb-3">位於首都雷克雅維克的西南方,為全世界最大的露天溫泉,常保持在37度~39度的溫度，不僅水質受到國際BLUE FLAG肯定，池裡內含矽土、礦物質、海藻等成分擁有美容功效，因反射陽光照射、加上湖水映射出蔚藍天空的美麗，所以溫泉呈現難得可貴的夢幻牛奶藍。</p>
          <div class="text-right">
            <a href="#/Products" class="common-btn" @click.prevent="toProducts">
              <font-awesome-icon icon="arrow-right" />
              看行程
            </a>
          </div>
          <div class="d-md-none mt-3">
            <img src="../assets/images/Iceland-sm.jpg">
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
/* global $ */
export default {
  name: 'Home',
  data() {
    return {
      cart: {},
      cartlength: 0,
    };
  },
  methods: {
    // scrollToTop(scrollDuration) {
    //   const scrollHeight = window.scrollY;
    //   const scrollStep = Math.PI / (scrollDuration / 15);
    //   const cosParameter = scrollHeight / 2;
    //   let scrollCount = 0;
    //   let scrollMargin;
    //   const scrollInterval = setInterval(() => {
    //     if (window.scrollY !== 0) {
    //       scrollCount += 1;
    //       scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
    //       window.scrollTo(0, (scrollHeight - scrollMargin));
    //     } else clearInterval(scrollInterval);
    //   }, 15);
    // },
    toProducts() {
      this.$router.push('/Products');
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/cart`;
      const vm = this;

      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.cartlength = vm.cart.carts.length;
      });
    },
    ToCustomerCart() {
      this.$router.push('/customerCart');
    },
    toTarget(target) {
      const { top } = $(`#${target}`).offset();
      if (target) {
        $('html,body').animate({ scrollTop: top }, 1000);
      }
    },
    // goTop () {
    //   let self = this
    //   self.timer = setInterval(function () {
    //     let osTop = document.documentElement.scrollTop || document.body.scrollTop
    //     let ispeed = Math.floor(-osTop / 5)
    //     document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
    //     self.isTop = true
    //     if (osTop === 0) {
    //       clearInterval(self.timer)
    //     }
    //   }, 30)
    // }

  },
  mounted() {
    $('html,body').animate({ scrollTop: 0 }, 10);

    setTimeout(() => {
      $('.loading-box').addClass('index0');
    }, 2000);

    $(window).scroll(() => {
      const scrollPos = $(window).scrollTop();
      const windowHeight = $(window).height();

      // eslint-disable-next-line func-names
      $('.animated-left').each(function () {
        const thisPos = $(this).offset().top;
        if (windowHeight + scrollPos >= thisPos + 200) {
          $(this).addClass('fade-X');
        }
      });

      // eslint-disable-next-line func-names
      $('.animated-right').each(function () {
        const thisPos = $(this).offset().top;
        if (windowHeight + scrollPos >= thisPos + 200) {
          $(this).addClass('fade-X');
        }
      });
    });
  },
  created() {
    this.getCart();
  },
};
</script>
