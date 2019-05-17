# World Travel (Vue Cli 3)
![index](https://user-images.githubusercontent.com/47848363/57911507-8ad55e00-78ba-11e9-8971-9b47afcb7d71.png)
## Demo  
https://misty1636.github.io/World-Travel/
## 簡介
此作品的功能有:
+ 前台: 商品導覽、商品一覽、購物車、商品購買、優惠券套用、訂單結帳
+ 後台: 商品管理、簡易訂單統計、優惠券管理
## 主要技術
+ Vue Cli 3
+ VueRouter
+ Vuex管理
+ Webpack
+ RWD(支援到iphone5 320px)
+ Bootstrap 4 + 大量手刻SCSS
+ Ajax串接API
+ ESlint(Airbnb)提升程式碼品質
## 使用的Plugin
+ [Vue-axios](https://www.npmjs.com/package/vue-axios)
+ [Vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)
+ [Vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay)
+ [Vee-validate](https://baianat.github.io/vee-validate/)
+ [Vue-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs)
+ [Vue-videobg](https://github.com/pespantelis/vue-videobg)
+ [V-charts](https://v-charts.js.org/#/)
# 前台介紹
## loading動畫
+ 大部分頁面使用

![loading](https://user-images.githubusercontent.com/47848363/57913243-bfe3af80-78be-11e9-8022-5461d53d72a4.gif)
## 首頁
![Home1](https://user-images.githubusercontent.com/47848363/57911507-8ad55e00-78ba-11e9-8971-9b47afcb7d71.png)
![Home2](https://user-images.githubusercontent.com/47848363/57916114-c6752580-78c4-11e9-951a-9a34bbd7a044.png)
## 精彩介紹
![Guide1](https://user-images.githubusercontent.com/47848363/57918594-ab58e480-78c9-11e9-8df3-2828c7c2b9ea.png)
![Guide2](https://user-images.githubusercontent.com/47848363/57916717-0983c880-78c6-11e9-9ac2-d7851782b7a8.png)
## 商品列表
+ 點擊區域自動挑選對應區域，再次點擊當前已選擇區域，則會回到顯示所有
+ 鼠標滑入，會出現2個按鈕選項
![Products](https://user-images.githubusercontent.com/47848363/57916402-5c10b500-78c5-11e9-9b14-14c7e80d87db.png)
## 商品各別介紹
![ProductsDetails](https://user-images.githubusercontent.com/47848363/57916403-5c10b500-78c5-11e9-8be2-f28ec8129d96.png)
## 購物車
+ 小型簡易購物車

![smallCart](https://user-images.githubusercontent.com/47848363/57918783-07bc0400-78ca-11e9-859a-4d5df9b40d15.png)
+ 購物車頁面
![customerCart1](https://user-images.githubusercontent.com/47848363/57916406-5c10b500-78c5-11e9-82b4-12d6b3255fd6.png)
+ 如果購物車為空，自動隨機生成8個推薦商品
![customerCart2](https://user-images.githubusercontent.com/47848363/57916405-5c10b500-78c5-11e9-8840-c90b8990f548.png)
## 訂單資料
![CreateOrder1](https://user-images.githubusercontent.com/47848363/57916407-5ca94b80-78c5-11e9-83b8-29d9cb82ad30.png)
+ 如果點擊上一頁或上一步，導航守衛會做判斷，跳出防手殘確認
![CreateOrder2](https://user-images.githubusercontent.com/47848363/57916408-5ca94b80-78c5-11e9-9624-5b58ce54c274.png)
## 付款頁面
+ 訂單成立後，右上角購物車即清空
![OrderPayment](https://user-images.githubusercontent.com/47848363/57916409-5ca94b80-78c5-11e9-89c6-37d92a4f5c3b.png)
## 結帳完成
![OrderComplete](https://user-images.githubusercontent.com/47848363/57916410-5d41e200-78c5-11e9-9dc0-17dd44ec369c.png)
# 後台
## 登入
![Login](https://user-images.githubusercontent.com/47848363/57916412-5d41e200-78c5-11e9-9547-d96b3bd09e83.png)
## 商品管理
![buildProducts](https://user-images.githubusercontent.com/47848363/57923779-d2b5ae80-78d5-11e9-83e8-f4d82e2b8d14.png)
## 訂單統計
![report](https://user-images.githubusercontent.com/47848363/57942924-46bb7b00-7905-11e9-9b58-fb5a41a8bf48.png)
# 聲明
+ 圖片和資料來源皆來自Google
+ 本作品內的圖片和文字內容，皆為個人技術練習使用，不做任何商業用途
