<template>
  <div>
    <div class="Products-banner">
      <loading :active.sync="isLoading">
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
        </div>
      </section>
      
      <Pagination :pages="pagination" @thePage="getProducts" @scrollTarget="scroll" class="d-flex justify-content-center mb-6"/>

    </div>

    <ProductModal :theProduct="temproduct" :loadingtoCart="loadingtoCart"  @addtheCart="addtoCart" />

  </div>
</template>

<script>
import Nav from "../components/Nav";
import slide from "../components/slide";
import Pagination from '../components/pagination';
import ProductModal from '../components/productModal';

export default {
  name: "Products",
  data(){
    return {
      continent: '',
      products: [],
      temproduct: {},
      pagination:{
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false,
        page_size: 8 
      },
      isLoading: false,
      loadingtoCart:''
    }
  },
  components:{
    Nav,
    slide,
    Pagination,
    ProductModal
  },
  methods:{
    currentContinent(item){ //當前區域給予樣式及過濾資料
      this.continent = item;
      this.getProducts();
      let top = $('#MainProducts').offset().top;
      $('html,body').animate({scrollTop:(top-47.5)},1000);
      
    },
    scroll(){ // 分頁點擊滾動
      setTimeout(()=> {
        let top = $('#MainProducts').offset().top;
        $('html,body').animate({scrollTop:(top-47.5)},1000);
      },1000);
    },
    getProducts(page=1) {
      const vm = this;
      const api2 = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/products/all`;
      vm.isLoading = true;
      this.$http.get(api2).then((response)=> {
        vm.isLoading = false;
        vm.products = response.data.products;

        if(vm.continent !== '') { // 判別地區
          vm.products = vm.products.filter((item)=> {
            return item.category == vm.continent;
          })
        }
 
        const len = vm.products.length;
        const size = vm.pagination.page_size;
        vm.pagination.total_pages = Math.ceil(len/size);  //限制最多8個一頁
        vm.pagination.current_page = page;
        if(page>1) {
          vm.pagination.has_pre = true;
        } else {
          vm.pagination.has_pre = false;
        }
        if(page <vm.pagination.total_pages) {
          vm.pagination.has_next = true;
        } else {
          vm.pagination.has_next = false;
        }

        vm.products = vm.products.slice((0+size*(page-1)),size*page);  //取出第幾頁資料

      })

    },
    getCurrentProduct(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/product/${id}`;
      const vm = this;
      this.$http.get(api).then(response => {    
        $('#productModal').modal('show');
        vm.temproduct = response.data.product;
      })
    },
    ToProductsDetaill(id) {
      this.$router.push(`/ProductsDetails/${id}`);
    },
    addtoCart(id,qty=1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/cart`;
      const vm = this;
      vm.loadingtoCart = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api,{data:cart}).then(response => {
        $('#productModal').modal('hide');
        vm.loadingtoCart = '';
        vm.$bus.$emit('message:push','此行程已加入購物車','success');
        vm.$bus.$emit('pushCart');
      });
    },
  },
  mounted() {
    this.getProducts();
    $('html,body').animate({scrollTop:0},10);
  }
};
</script>
