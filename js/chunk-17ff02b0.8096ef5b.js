(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17ff02b0"],{"1af6":function(t,e,s){var a=s("63b6");a(a.S,"Array",{isArray:s("9003")})},"20fd":function(t,e,s){"use strict";var a=s("d9f6"),r=s("aebd");t.exports=function(t,e,s){e in t?a.f(t,e,r(0,s)):t[e]=s}},"549b":function(t,e,s){"use strict";var a=s("d864"),r=s("63b6"),i=s("241e"),c=s("b0dc"),o=s("3702"),n=s("b447"),l=s("20fd"),d=s("7cd6");r(r.S+r.F*!s("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,s,r,u,p=i(t),f="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,C=void 0!==v,_=0,b=d(p);if(C&&(v=a(v,m>2?arguments[2]:void 0,2)),void 0==b||f==Array&&o(b))for(e=n(p.length),s=new f(e);e>_;_++)l(s,_,C?v(p[_],_):p[_]);else for(u=b.call(p),s=new f;!(r=u.next()).done;_++)l(s,_,C?c(u,v,[r.value,_],!0):r.value);return s.length=_,s}})},"54a1":function(t,e,s){s("6c1c"),s("1654"),t.exports=s("95d5")},"774e":function(t,e,s){t.exports=s("d2d5")},"95d5":function(t,e,s){var a=s("40c3"),r=s("5168")("iterator"),i=s("481b");t.exports=s("584a").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||i.hasOwnProperty(a(e))}},a745:function(t,e,s){t.exports=s("f410")},aee3:function(t,e,s){"use strict";var a=s("d28d"),r=s.n(a);r.a},c7a3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{staticStyle:{"z-index":"1080 !important"},attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("template",{slot:"default"},[a("img",{attrs:{src:s("2dbe")}})])],2),a("div",{staticClass:"pt-8 container customerCart"},[t.cart.total?a("h1",{staticClass:"text-center customerCart-title mb-5 text-secondary"},[t._v("您的購物車")]):t._e(),t.cart.total?t._e():a("h5",{staticClass:"text-center py-5 mt-3 mb-5 nonecart"},[t._v("目前您的購物車沒有任何行程!")]),t.cart.total?t._e():a("hr"),t.cart.total?t._e():a("h3",{staticClass:"cart-recommend mb-4 pl-2"},[t._v("為您推薦!")]),t.cart.total?t._e():a("productSlide"),t.cart.total?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-7"},[a("ul",{staticClass:"list-unstyled customerCart-list"},t._l(t.cart.carts,function(e){return a("li",{key:e.id,staticClass:"p-3 mb-3"},[a("div",{staticClass:"d-flex flex-column flex-sm-row"},[a("div",{staticClass:"customerCart-img mr-sm-3 mb-sm-0 mb-3"},[a("img",{staticClass:"img-fluid",attrs:{src:e.product.imageUrl}})]),a("div",{staticClass:"d-flex align-items-center"},[a("div",[a("h4",{staticClass:"customerCart-list-title mb-3"},[t._v(t._s(e.product.title))]),a("div",{staticClass:"customerCart-list-info d-flex"},[a("span",{staticClass:"price mr-3"},[t._v(t._s(t._f("currency")(e.product.price)))]),a("span",{staticClass:"mr-2"},[t._v("x")]),a("span",[t._v(t._s(e.qty)+" "+t._s(e.product.unit))])])])]),a("div",{staticClass:"ml-auto align-self-center"},[a("button",{staticClass:"delete-cartlist",class:{disabled:e.id===t.cartdisable},attrs:{type:"button"},on:{click:function(s){return t.deleteCart(e.id)}}},[e.id!==t.cartItem?a("span",[t._v("刪除")]):a("font-awesome-icon",{attrs:{icon:"spinner",spin:""}})],1)])])])}),0)]),a("div",{staticClass:"col-lg-5"},[a("div",{staticClass:"customerCart-order mb-4"},[a("div",{staticClass:"p-3"},[a("h2",[t._v("訂單金額")]),a("hr",{staticClass:"mb-0"}),a("div",[t._l(t.cart.carts,function(e){return a("div",{key:e.id,staticClass:"d-flex customerCart-order-item align-items-start"},[a("div",{staticClass:"d-flex flex-column"},[a("h5",{staticClass:"mb-0"},[t._v(t._s(e.product.title))]),a("span",[t._v(t._s(e.qty)+" "+t._s(e.product.unit))])]),a("span",{staticClass:"ml-auto order-item-price"},[t._v(t._s(t._f("currency")(e.total)))])])}),t.cart.final_total&&t.cart.final_total!==t.cart.total?a("div",{staticClass:"d-flex customerCart-order-item align-items-start text-success"},[a("div",{staticClass:"d-flex flex-column"},[a("h5",{staticClass:"mb-0"},[t._v("已套用優惠")]),a("span",[t._v(t._s(t.cart.final_total/t.cart.total*100)+"% OFF")])]),a("span",{staticClass:"ml-auto order-item-price"},[t._v("-"+t._s(t._f("currency")(t.cart.total-t.cart.final_total)))])]):t._e(),t._m(0),t._m(1),a("hr",{staticClass:"mt-0"}),a("div",{staticClass:"input-group input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("套用優惠碼")])])])],2)]),a("div",{staticClass:"p-3 customerCart-order-Nextstep"},[a("div",{staticClass:"d-flex justify-content-end mb-3 align-items-end"},[a("span",{staticClass:"subtotal mr-2"},[t._v("總計")]),a("span",{staticClass:"total"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]),a("button",{attrs:{type:"button"},on:{click:t.toCreateOrder}},[t._v("下一步")])])])])]):t._e()],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex customerCart-order-item align-items-start"},[s("div",{staticClass:"d-flex flex-column"},[s("h5",{staticClass:"mb-0"},[t._v("簽證費")])]),s("span",{staticClass:"ml-auto order-item-price"},[t._v("免簽證")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex customerCart-order-item border-0 align-items-start"},[s("div",{staticClass:"d-flex flex-column"},[s("h5",{staticClass:"mb-0"},[t._v("機場稅、燃油費")])]),s("span",{staticClass:"ml-auto order-item-price"},[t._v("已內含")])])}],i=s("cebc"),c=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper"},[s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.theslideproducts,function(e){return s("swiper-slide",{key:e.id},[s("div",{staticClass:"px-2"},[s("div",{staticClass:"list-box"},[s("div",{staticClass:"list-img"},[s("img",{staticClass:"img-fluid",attrs:{src:e.imageUrl,alt:""}}),s("div",{staticClass:"list-more p-3 d-flex justify-content-center align-items-center"},[s("a",{attrs:{href:"#/ProductsDetails/"+e.id},on:{click:function(s){return s.preventDefault(),t.ToProductsDetaill(e.id)}}},[t._v("More")]),s("button",{staticClass:"list-btn",attrs:{type:"button"},on:{click:function(s){return t.getCurrentProduct(e.id)}}},[t._v("我要報名")])])]),s("div",{staticClass:"list-content p-3"},[s("h4",{staticClass:"mb-3"},[t._v(t._s(e.title))]),s("p",{staticClass:"text-secondary"},[t._v(t._s(e.description))]),s("div",{staticClass:"list-price d-flex justify-content-between align-items-center"},[s("span",{staticClass:"oldprice text-secondary"},[t._v(t._s(t._f("currency")(e.origin_price)))]),s("span",{staticClass:"newprice"},[t._v(t._s(t._f("currency")(e.price)))])])])])])])}),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),s("ProductModal",{attrs:{theProduct:t.temproduct,loadingtoCart:t.cartItem}})],1)},n=[],l=(s("ac6a"),s("a745")),d=s.n(l);function u(t){if(d()(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}var p=s("774e"),f=s.n(p),m=s("c8bb"),v=s.n(m);function C(t){if(v()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return f()(t)}function _(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function b(t){return u(t)||C(t)||_()}s("dfa4");var h=s("7212"),g=s("f0f0"),x={name:"slide",data:function(){return{swiperOption:{slidesPerView:2,spaceBetween:14,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:1,spaceBetween:30}}},theslideproducts:[]}},components:{swiper:h["swiper"],swiperSlide:h["swiperSlide"],ProductModal:g["a"]},methods:{getCurrentProduct:function(t){this.$store.dispatch("ProductModule/getCurrentProduct",t).then(function(){$("#productModal").modal("show")})},ToProductsDetaill:function(t){this.$router.push("/ProductsDetails/".concat(t))}},computed:Object(i["a"])({},Object(c["c"])("ProductModule",["slideproducts","temproduct"]),Object(c["c"])("CartModule",["cartItem"])),created:function(){var t=this;this.$store.dispatch("ProductModule/getSlideProducts").then(function(){var e=t,s=b(e.slideproducts);s.forEach(function(t,a){if(a<8){var r=Math.floor(Math.random()*s.length);e.theslideproducts.push(s.splice(r,1)[0])}})})}},y=x,w=(s("aee3"),s("2877")),O=Object(w["a"])(y,o,n,!1,null,null,null),P=O.exports,j={name:"customerCart",data:function(){return{cartdisable:"",coupon_code:""}},methods:Object(i["a"])({deleteCart:function(t){var e=this;e.cartdisable=t,this.$store.dispatch("CartModule/deleteCart",t)},addCouponCode:function(){var t=this;""!==t.coupon_code&&this.$store.dispatch("CartModule/addCouponCode",t.coupon_code).then(function(){t.coupon_code=""})},toCreateOrder:function(){this.$router.push("/CreateOrder")}},Object(c["b"])("CartModule",["getCart"])),computed:Object(i["a"])({},Object(c["c"])(["isLoading"]),Object(c["c"])("CartModule",["cart","cartItem"])),components:{productSlide:P},created:function(){this.getCart()}},M=j,k=Object(w["a"])(M,a,r,!1,null,null,null);e["default"]=k.exports},c8bb:function(t,e,s){t.exports=s("54a1")},d28d:function(t,e,s){},d2d5:function(t,e,s){s("1654"),s("549b"),t.exports=s("584a").Array.from},f410:function(t,e,s){s("1af6"),t.exports=s("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-17ff02b0.8096ef5b.js.map