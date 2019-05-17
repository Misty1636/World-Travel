(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00949dc4"],{4702:function(t,e,s){"use strict";var a=s("f35f"),i=s.n(a);i.a},6407:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination mb-0"},[s("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,function(e){return s("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e},attrs:{pages:e}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.getPages(e)}}},[t._v(t._s(e))])])}),s("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],n={props:{pages:{type:Object,default:function(){}}},methods:{getPages:function(t){this.$store.dispatch("ProductModule/getProducts",t),this.$emit("scrollTarget"),this.$emit("thePage",t)}}},c=n,r=s("2877"),o=Object(r["a"])(c,a,i,!1,null,null,null);e["a"]=o.exports},e6dc:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"Products-banner"},[a("loading",{staticStyle:{"z-index":"1080 !important"},attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("template",{slot:"default"},[a("img",{attrs:{src:s("2dbe")}})])],2),a("slide"),a("section",{staticClass:"Products-main pt-6 container",attrs:{id:"MainProducts"}},[a("div",{staticClass:"d-flex justify-content-center Products-title"},[a("h1",{staticClass:"mb-4 px-5"},[a("font-awesome-icon",{attrs:{icon:"plane"}}),t._v("\n          精選行程\n        ")],1)]),a("div",{staticClass:"Products-continent mb-6"},[a("ul",{staticClass:"list-unstyled d-flex justify-content-center mb-0"},[a("li",[a("a",{staticClass:"Asia",class:{active:"亞洲"==t.continent},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.currentContinent("亞洲")}}},[t._v("亞洲")])]),a("li",[a("a",{staticClass:"Europe",class:{active:"歐洲"==t.continent},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.currentContinent("歐洲")}}},[t._v("歐洲")])]),a("li",[a("a",{staticClass:"Oceania",class:{active:"大洋洲"==t.continent},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.currentContinent("大洋洲")}}},[t._v("大洋洲")])]),a("li",[a("a",{staticClass:"America",class:{active:"美洲"==t.continent},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.currentContinent("美洲")}}},[t._v("美洲")])]),a("li",[a("a",{staticClass:"Africa",class:{active:"非洲"==t.continent},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.currentContinent("非洲")}}},[t._v("非洲")])])])]),a("div",{staticClass:"Products-list row"},t._l(t.products,function(e){return a("div",{key:e.id,staticClass:"col-md-6 col-12 mb-6"},[a("div",{staticClass:"list-box"},[a("div",{staticClass:"list-img"},[a("img",{staticClass:"img-fluid",attrs:{src:e.imageUrl}}),a("div",{staticClass:"list-more p-3 d-flex justify-content-center align-items-center"},[a("a",{attrs:{href:"#/ProductsDetails/"+e.id},on:{click:function(s){return s.preventDefault(),t.ToProductsDetaill(e.id)}}},[t._v("More")]),a("button",{staticClass:"list-btn",attrs:{type:"button"},on:{click:function(s){return t.getCurrentProduct(e.id)}}},[t._v("我要報名")])])]),a("div",{staticClass:"list-content p-3"},[a("h4",{staticClass:"mb-3"},[t._v(t._s(e.title))]),a("p",{staticClass:"text-secondary"},[t._v(t._s(e.description))]),a("div",{staticClass:"list-price d-flex justify-content-between align-items-center"},[a("span",{staticClass:"oldprice text-secondary"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("span",{staticClass:"newprice"},[t._v(t._s(t._f("currency")(e.price)))])])])])])}),0)]),a("Pagination",{staticClass:"d-flex justify-content-center mb-6",attrs:{pages:t.pagination},on:{thePage:t.getProducts,scrollTarget:t.scroll}})],1),a("ProductModal",{attrs:{theProduct:t.temproduct,loadingtoCart:t.cartItem}})],1)},i=[],n=s("cebc"),c=s("2f62"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper"},[s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperSlides,function(e,a){return s("swiper-slide",{key:a,style:"background-image: url("+e.imgPath+"); background-position: center center;\n      background-size: cover;"},[s("div",{staticClass:"container d-flex align-items-center h-100 swiper-box"},[s("div",{staticClass:"swipertext d-flex flex-column align-items-center"},[s("h2",{staticClass:"mb-1 pb-1"},[t._v(t._s(e.country))]),s("span",[t._v(t._s(e.en))])])])])}),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},o=[],l=s("7212"),u={name:"slide",data:function(){return{swiperOption:{loop:!0,centeredSlides:!0,effect:"fade",autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}},swiperSlides:[{imgPath:"pro/Fiji-lg.jpg",country:"斐濟",en:"Fiji"},{imgPath:"pro/Japan-lg2.jpg",country:"日本",en:"Japan"},{imgPath:"pro/Paris-lg.jpg",country:"法國",en:"France"},{imgPath:"pro/Switzerland-lh.jpg",country:"瑞士",en:"Swiss"},{imgPath:"pro/China-lg.jpg",country:"中國",en:"China"}]}},components:{swiper:l["swiper"],swiperSlide:l["swiperSlide"]}},d=u,p=(s("4702"),s("2877")),f=Object(p["a"])(d,r,o,!1,null,"0d33ace0",null),g=f.exports,m=s("6407"),v=s("f0f0"),C={name:"Products",components:{slide:g,Pagination:m["a"],ProductModal:v["a"]},methods:Object(n["a"])({currentContinent:function(t){this.$store.commit("ProductModule/CURRENTCONTINENT",t),this.getProducts();var e=$("#MainProducts").offset(),s=e.top;$("html,body").animate({scrollTop:s-47.5},1e3)},scroll:function(){setTimeout(function(){var t=$("#MainProducts").offset(),e=t.top;$("html,body").animate({scrollTop:e-47.5},1e3)},1e3)}},Object(c["b"])("ProductModule",["getProducts"]),{getCurrentProduct:function(t){this.$store.dispatch("ProductModule/getCurrentProduct",t).then(function(){$("#productModal").modal("show")})},ToProductsDetaill:function(t){this.$router.push("/ProductsDetails/".concat(t))}}),computed:Object(n["a"])({},Object(c["c"])(["isLoading"]),Object(c["c"])("ProductModule",["products","temproduct","continent","pagination"]),Object(c["c"])("CartModule",["cartItem"])),created:function(){this.$store.commit("ProductModule/CURRENTCONTINENT",""),this.getProducts()}},h=C,P=Object(p["a"])(h,a,i,!1,null,null,null);e["default"]=P.exports},f35f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-00949dc4.a8665b09.js.map