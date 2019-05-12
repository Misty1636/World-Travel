<template>
  <div>
    <div class="Guide">
      <div class="Guide-bg">
        <img class="img-fluid" src="../assets/spain/spain.png" >
        <a href="#Guide-strat" class="explore-icon text-center text-white" @click.prevent="toTarget('Guide-strat')">
          <font-awesome-icon icon="angle-double-down" class="angle-down" />
        </a>
      </div>

      <section class="Guide-strat-box container-fluid" id="Guide-strat">
        <div class="Guide-title row">
          <div class="col d-flex  justify-content-center align-items-center flex-column">
            <div class="text-center mb-2">
              <img src="../assets/spain-cion.png" height="40px">
              <i class="ml-2">España</i>
            </div>
            <h1 class="mb-1 text-center">遇見陽光下的西班牙</h1>
            <span>
              <font-awesome-icon icon="glass-cheers" />
              沉浸在拉丁的異國情調
            </span>
          </div>
        </div>
        <div class="row Guide-map  justify-content-xl-start justify-content-lg-center">
          <div class="col-xl-6 col-lg-7 col-12 reference-map animated-left">
            <img class="img-fluid" src="../assets/spain/001.png">
          </div>
          <div class="col-xl-4 col-lg-5 col-lg-5 col-md-8 col-sm-10  m-lg-0 mx-auto animated-right">
            <div class="px-lg-4 py-lg-7 p-4 text-white">
              <h2 class="mb-3">行程導覽地圖</h2>
              <ul class="list-unstyled pl-0 mb-0">
                <li class="mb-1">1.獨家特別企劃：北部西班牙行程－坎塔布里亞、巴斯克、納瓦拉三個自治區。</li>
                <li>2.高第大師之旅：聖家堂、米拉之家、巴特婁之家。</li>
                <li class="my-1">3.西班牙波爾多：西班牙產區最大的葡萄產地－里歐哈酒莊品酒。</li>
                <li>4.世界文化遺產：阿罕布拉宮、塞維亞大教堂、哥多華、托雷多、阿維拉、塞哥維亞舊城區、阿爾塔米拉史前洞窟、比斯開橋..</li>
                <li class="my-1">5.門票絕對不少：阿卡薩城堡、馬德里皇宮、普拉多美術館、大教堂、聖多美教堂、風車、哥多華清真寺、阿罕布拉皇宮和阿拉伯式宮廷花園、塞維亞大教堂及希拉達塔、畢卡索美術館、聖家族教堂、阿爾塔米拉史前洞窟、VIZCAYA BRIDGE懸浮列車、ARTXANDA纜車、古根漢美術館、里歐哈酒莊品酒。</li>
                <li>6.大啖經典美味：佛朗明歌劇場晚宴、伊比利5J火腿、四貓餐廳、1903 Iruna百年美食餐廳。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid attractions-box mb-8">
        <h2 class="mb-3 py-5 justify-content-center d-flex align-items-center">
          <font-awesome-icon icon="synagogue" class="synagogue" />
          <span class="ml-1">特色一覽</span>
        </h2>
        <div class="attractions-Alhambra d-flex justify-content-between flex-lg-row flex-column">
           <div class="Alhambra-img animated-left">
             <img class="img-fluid" src="../assets/spain/阿爾罕布拉宮-02.jpg">
           </div>
           <div class="Alhambra-img animated-right">
             <img class="img-fluid" src="../assets/spain/阿爾罕布拉宮-04.jpg">
           </div>
           <div class="Alhambra-description animated-bottom">
             <h4 class="mb-0">阿爾罕布拉宮</h4>
             <hr class="my-1">
             <div class="text-center">
               <span>璀璨的回教文化</span>
             </div>
           </div>
        </div>
      </section>

      <section class="mb-8 animated-bottom">
        <div class="container">
          <div class="attractions-Gaudí">
            <h3 class="mb-3 text-right title">高第大師建築藝術</h3>
            <div class="row Guell mb-sm-6 mb-5 no-gutters animated-right">
              <div class="col-sm-3 d-flex align-items-center justify-content-end">
                <span>
                  奎爾公園
                  <small>since 1984</small>
                </span>
              </div>
              <div class="col-sm-9">
                <img class="img-fluid" src="../assets/spain/奎爾公園-02.jpg">
              </div>
            </div>
            <div class="row Sagrada mb-sm-6 mb-5 no-gutters flex-sm-row flex-column-reverse animated-left">
              <div class="col-sm-9">
                <img class="img-fluid" src="../assets/spain/聖家堂-01.jpg">
              </div>
              <div class="col-sm-3 d-flex align-items-center">
                <span>
                  聖家堂
                  <small>since 1984</small>
                </span>
              </div>
            </div>
            <div class="row mila mb-sm-6 mb-5 no-gutters animated-right">
              <div class="col-sm-3 d-flex align-items-center justify-content-end">
                <span>
                  米拉之家
                  <small>since 1984</small>
                </span>
              </div>
              <div class="col-sm-9">
                <img class="img-fluid" src="../assets/spain/米拉之家-01.jpg">
              </div>
            </div>
            <h4 class="mb-0">Antoni Gaudí</h4>
          </div>
        </div>
      </section>

      <section class="container-fluid attractions-Prado-box bg-light mb-md-8 mb-6">
        <div class="attractions-Prado">
          <div class="row animated-left">
            <div class="col-lg-5 col-md-6 Prado-img">
               <div class="Prado-mark"></div>
            </div>
            <div class="container">
              <div class="row justify-content-end">
                <div class="col-lg-7 col-md-6 py-5 Prado-info">
                  <div class="pl-lg-0 pl-sm-2">
                    <h3 class="mb-3">普多拉美術館</h3>
                    <p class="Prado-description">普拉多博物館繼承了皇室珍藏，在19世紀末期就被譽為「世界四大美術館」之一。然而由於西班牙在20世紀的政治動蕩，其收藏增長緩慢，逐漸被不少博物館在總量上超越。但是普拉多擁有的傑作數量卻是後來者無法企及的，除了涵蓋歐洲所有流派和所有名家之外，還幾乎囊括了哥雅的全部精品。此外還有眾多西班牙本土畫家的代表作在這裡集中展示。</p>
                    <div class="small-img">
                      <img src="../assets/spain/人間樂園.jpg">
                      <span>《人間樂園》</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid attractions-Boqueria animated-bottom mb-6">
        <hr class="d-md-none">
        <div class="row justify-content-center no-gutters">
          <div class="col d-flex justify-content-center align-items-center Boqueria-title">
            <h3 class="mb-0 chinese">博蓋利亞市場</h3>
          </div>
          <div class="col-xl-5 col-lg-7 col-md-8  Boqueria-img my-2 my-md-0">
            <img class="img-fluid" src="../assets/spain/博蓋利亞市場-01.jpg">
          </div>
          <div class="col d-flex justify-content-center align-items-center">
            <h3 class="mb-0 english">Boqueria</h3>
          </div>
        </div>
        <hr class="d-md-none">
      </section>

      <section class="container-fluid attractions-Mayor bg-light mb-2">
        <div class="row no-gutters Mayor-box animated-bottom">
          <div class="col-xl-4 col-lg-3 col-md-2 d-flex justify-content-lg-center align-items-center Mayor-title">
            <div class="d-flex flex-column align-items-center Mayor-title-bg">
              <h3 class="mb-0">馬約爾廣場</h3>
              <small>since 1756</small>
            </div>
          </div>
          <div class="col-xl-8 col-lg-9 col-md-10">
            <div class="row no-gutters p-2 Mayor-img">
              <div class="col-sm-8 mb-sm-0 mb-2">
                <img class="img-fluid pr-sm-2" src="../assets/spain/馬約爾廣場-01.jpg">
              </div>
              <div class="col-sm-4 d-flex flex-sm-column justify-content-between">
                <div>
                  <img class="img-fluid pr-sm-0 pr-1" src="../assets/spain/馬德里-01.jpg">
                </div>
                <div>
                  <img class="img-fluid pl-sm-0 pl-1" src="../assets/spain/馬德里-02.jpg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="feature-eat mb-sm-6 mb-5 animated-bottom">
        <div class="container">
          <img class="img-fluid" src="../assets/spain/eat-01.jpg">
          <img class="img-fluid" src="../assets/spain/eat-02.jpg">
        </div>
      </section>

      <div class="container-fluid mb-sm-8 mb-6">
        <div class="row justify-content-center">
          <div class="col-xl-3 col-md-4 col-sm-5 col-7">
            <a class="toPrdductSpain" href="#/ProductsDetails/-LdXqJIhL8dBMDYV2vg4" @click.prevent="toSpain">
              立即報名西班牙行程!
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>


<script>
/* global $ */
export default {
  name: 'Guide',
  methods: {
    toTarget(target) {
      const { top } = $(`#${target}`).offset();
      if (target) {
        $('html,body').animate({ scrollTop: top }, 1000);
      }
    },
    toSpain() {
      this.$router.push('/ProductsDetails/-LdXqJIhL8dBMDYV2vg4');
    },
  },
  mounted() {
    $('html,body').animate({ scrollTop: 0 }, 10);

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

      // eslint-disable-next-line func-names
      $('.animated-bottom').each(function () {
        const thisPos = $(this).offset().top;
        if (windowHeight + scrollPos >= thisPos + 200) {
          $(this).addClass('bottom-In');
        }
      });
    });
  },
};
</script>
