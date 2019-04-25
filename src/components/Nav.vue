<template>
  <div>
    <header class="header container-fluid">
      <div class="d-flex justify-content-end nav">
        <div class="offcanvas-bg"></div>  
        <ul class="menu list-unstyled d-lg-flex mb-0"> 
          <li class="d-lg-none">
            <a href="#" class="close-link" @click.prevent="closeOffcanvas">
              <font-awesome-icon icon="times" class="close-menu"/>
            </a>
          </li>
          <li><router-link to="/index"> 首頁</router-link></li>
          <li class="menu-item"><router-link to="/Guide"> 精彩介紹</router-link></li>
          <li class="menu-item"><router-link to="/Products"> 行程一覽</router-link></li>
          <li class="menu-item"><router-link to="/Login"> 訂單查詢</router-link></li>
          <li class="menu-item"><router-link to="/Login"> 登入</router-link></li>
        </ul>
        <div class="cart">
          <button type="button" class="dropdown-toggle cart-check" data-toggle="dropdown">
            <font-awesome-icon icon="shopping-cart" class="shopping-cart" />
            <span class="cart-num  text-center text-white">26</span>
          </button>
          <div class="dropdown-menu p-2">
            <h6 class="dropdown-item">已選擇行程</h6>
            <table class="table mb-2">
              <tbody>
                <tr>
                  <td>
                    <a href="#" class="text-secondary" data-toggle="modal" data-target="#deleteModal" data-title=" [ 落肩針織外套" data-number=" 1件 ]">
                      <i class="fas fa-trash-alt" ></i>
                    </a>
                  </td>
                  <td class="py-2 d-iphone8"><img src="https://img.sonyunara.com/files/goods/46023/1548031286_3.jpg" style="height: 32px;"></td>
                  <td>落肩針</td>
                  <td>1件</td>
                  <td class="text-right">$990</td>
                </tr>
                <tr>
                  <td>
                    <a href="#" class="text-secondary" data-toggle="modal" data-target="#deleteModal" data-title=" [ 羅紋高領針織衫" data-number=" 1件 ]">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </td>
                  <td class="py-2 d-iphone8"><img src="https://img.sonyunara.com/files/goods/45557/1545036741_2.jpg" style="height: 32px;"></td>
                  <td class="text-nowrap">羅紋高</td>
                  <td class="text-nowrap">1件</td>
                  <td class="text-nowrap text-right">$1990</td>
                </tr>
              </tbody>
            </table>
            <button type="button" class="btn btn-block btn-primary">
              結帳去
            </button>
          </div>
        </div>
        <button type="button" class="mobile-link ml-2" @click.prevent="openOffcanvas">
          <font-awesome-icon icon="bars" />
        </button>
      </div>
    </header>
  </div>
</template>


<script>

export default {
  name: "Nav",
  methods:{
    closeOffcanvas(){
      $(".menu").removeClass("open-offcanvas");
      $(".offcanvas-bg").removeClass("opening-menu");
    },
    openOffcanvas(){
      $(".menu").addClass("open-offcanvas");
      $(".offcanvas-bg").addClass("opening-menu");
    },
 }
};
</script>



