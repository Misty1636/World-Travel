(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0909fac7"],{"1af6":function(t,a,r){var e=r("63b6");e(e.S,"Array",{isArray:r("9003")})},"20fd":function(t,a,r){"use strict";var e=r("d9f6"),n=r("aebd");t.exports=function(t,a,r){a in t?e.f(t,a,n(0,r)):t[a]=r}},"549b":function(t,a,r){"use strict";var e=r("d864"),n=r("63b6"),c=r("241e"),o=r("b0dc"),i=r("3702"),s=r("b447"),l=r("20fd"),u=r("7cd6");n(n.S+n.F*!r("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var a,r,n,h,d=c(t),f="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,m=void 0!==v,x=0,b=u(d);if(m&&(v=e(v,p>2?arguments[2]:void 0,2)),void 0==b||f==Array&&i(b))for(a=s(d.length),r=new f(a);a>x;x++)l(r,x,m?v(d[x],x):d[x]);else for(h=b.call(d),r=new f;!(n=h.next()).done;x++)l(r,x,m?o(h,v,[n.value,x],!0):n.value);return r.length=x,r}})},"54a1":function(t,a,r){r("6c1c"),r("1654"),t.exports=r("95d5")},"75fc":function(t,a,r){"use strict";var e=r("a745"),n=r.n(e);function c(t){if(n()(t)){for(var a=0,r=new Array(t.length);a<t.length;a++)r[a]=t[a];return r}}var o=r("774e"),i=r.n(o),s=r("c8bb"),l=r.n(s);function u(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return i()(t)}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return c(t)||u(t)||h()}r.d(a,"a",function(){return d})},"774e":function(t,a,r){t.exports=r("d2d5")},9003:function(t,a,r){var e=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==e(t)}},"95d5":function(t,a,r){var e=r("40c3"),n=r("5168")("iterator"),c=r("481b");t.exports=r("584a").isIterable=function(t){var a=Object(t);return void 0!==a[n]||"@@iterator"in a||c.hasOwnProperty(e(a))}},"9c18":function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"pt-3"},[r("h1",{staticClass:"text-center text-primary h2"},[t._v("報表")]),r("hr",{staticClass:"my-5"}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 col-sm-6 col-12"},[r("h2",{staticClass:"h3 text-primary text-center"},[t._v("行程比例")]),r("ve-pie",{attrs:{data:t.chartData1}}),r("h3",{staticClass:"h4 mb-0 text-primary text-center"},[t._v("超過10萬訂單")]),r("ve-liquidfill",{attrs:{data:t.chartData4}})],1),r("div",{staticClass:"col-md-4 col-sm-6 col-12"},[r("h2",{staticClass:"h3 text-primary text-center"},[t._v("訂單狀態")]),r("ve-histogram",{attrs:{data:t.chartData2}}),r("h3",{staticClass:"h4 mb-0 text-primary text-center"},[t._v("完成付款比例")]),r("ve-liquidfill",{attrs:{data:t.chartData5}})],1),r("div",{staticClass:"col-md-4 col-sm-6 col-12"},[r("h2",{staticClass:"h3 text-primary text-center"},[t._v("營收統計")]),r("ve-waterfall",{attrs:{data:t.chartData3,settings:t.chartSettings}}),r("h3",{staticClass:"h4 mb-0 text-primary text-center"},[t._v("營收獲得比例")]),r("ve-liquidfill",{attrs:{data:t.chartData6}})],1)])])},n=[],c=(r("ac6a"),r("75fc")),o={data:function(){return this.chartSettings={stack:{dimension:"狀態",metrics:"金額"}},{order:{},pagination:{},allOrder:[],chartData1:{columns:["區域","行程數量"],rows:[{"區域":"歐洲","行程數量":20},{"區域":"亞洲","行程數量":16},{"區域":"非洲","行程數量":4},{"區域":"大洋洲","行程數量":5},{"區域":"美洲","行程數量":11}]},chartData2:{columns:["訂單","數量"],rows:[]},chartData3:{columns:["狀態","金額"],rows:[]},chartData4:{columns:["訂單","percent"],rows:[{"訂單":"大金額",percent:0}]},chartData5:{columns:["訂單","percent"],rows:[{"訂單":"已完成",percent:0}]},chartData6:{columns:["營收","percent"],rows:[{"營收":"已入賬",percent:0}]}}},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/orders?page=").concat(a),e=this;this.$http.get(r).then(function(a){var r;(r=e.allOrder).push.apply(r,Object(c["a"])(a.data.orders)),t.ordernum(),t.ordertotal(),t.largeAmount()})},getAllOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/orders?page=",1);this.$http.get(a).then(function(a){for(var r=a.data.pagination.total_pages,e=1;e<r+1;e+=1)t.getProducts(e)})},ordernum:function(){var t=0,a=0,r=[{"訂單":"已付款","數量":0},{"訂單":"未付款","數量":0}];this.allOrder.forEach(function(r){r.is_paid?t+=1:a+=1}),r[0]["數量"]=t,r[1]["數量"]=a,this.chartData2.rows=[].concat(r),this.chartData5.rows[0].percent=t/(t+a)},ordertotal:function(){var t=0,a=0,r=[{"狀態":"實際營收","金額":0},{"狀態":"未入賬","金額":0}];this.allOrder.forEach(function(r){r.is_paid?t+=r.total:a+=r.total}),r[0]["金額"]=t,r[1]["金額"]=a,this.chartData3.rows=r,this.chartData6.rows[0].percent=t/(t+a)},largeAmount:function(){var t=0,a=0;this.allOrder.forEach(function(r){r.total>=1e5?t+=1:a+=1}),this.chartData4.rows[0].percent=t/(t+a)}},mounted:function(){this.getAllOrder()}},i=o,s=r("2877"),l=Object(s["a"])(i,e,n,!1,null,null,null);a["default"]=l.exports},a745:function(t,a,r){t.exports=r("f410")},c8bb:function(t,a,r){t.exports=r("54a1")},d2d5:function(t,a,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},f410:function(t,a,r){r("1af6"),t.exports=r("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-0909fac7.c0bf480d.js.map