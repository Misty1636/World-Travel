(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66113254"],{"5a54":function(t,a,s){"use strict";var r=s("d357"),e=s.n(r);e.a},"9c18":function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid pt-7 d-flex flex-column align-items-center"},[s("h1",{staticClass:"text-primary mb-6"},[t._v("報表")]),s("div",{staticClass:"report-content p-3 text-primary"},[s("div",{staticClass:"report-item mb-3 h6"},[s("span",{staticClass:"report-name"},[t._v("預估總營收")]),s("span",{staticClass:"report-num"},[t._v(t._s(t._f("currency")(t.total+t.waittotal)))])]),s("div",{staticClass:"report-item mb-3"},[s("span",{staticClass:"report-name"},[t._v("實際營收")]),s("span",{staticClass:"report-num"},[t._v(t._s(t._f("currency")(t.total)))])]),s("div",{staticClass:"report-item"},[s("span",{staticClass:"report-name"},[t._v("等待營收")]),s("span",{staticClass:"report-num"},[t._v(t._s(t._f("currency")(t.waittotal)))])]),t._m(0),s("div",{staticClass:"report-item mb-3"},[s("span",{staticClass:"report-name"},[t._v("總訂單數量")]),s("span",{staticClass:"report-num"},[t._v(t._s(t.allOrder.length))])]),s("div",{staticClass:"report-item mb-3"},[s("span",{staticClass:"report-name"},[t._v("已付款")]),s("span",{staticClass:"report-num"},[t._v(t._s(t.pay))])]),s("div",{staticClass:"report-item"},[s("span",{staticClass:"report-name"},[t._v("未付款")]),s("span",{staticClass:"report-num"},[t._v(t._s(t.allOrder.length-t.pay))])]),t._m(1),s("div",{staticClass:"report-item"},[s("span",{staticClass:"report-name"},[t._v("完成訂單比例")]),s("span",{staticClass:"report-num"},[t._v(t._s(Math.round(t.pay/t.allOrder.length*100))+"%")])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"report-item text-center"},[s("hr")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"report-item"},[s("hr")])}],n=(s("ac6a"),{data:function(){return{order:{},pagination:{},isLoading:!1,allOrder:[]}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/orders?page=").concat(t),s=this;this.$http.get(a).then(function(t){for(var a=t.data.orders.length,r=0;r<a;r++)s.allOrder.push(t.data.orders[r])})},getAllOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/orders?page=",1);this.$http.get(a).then(function(a){for(var s=a.data.pagination.total_pages,r=1;r<s+1;r++)t.getProducts(r)})}},computed:{total:function(){var t=0;return this.allOrder.forEach(function(a){a.is_paid&&(t+=a.total)}),t},waittotal:function(){var t=0;return this.allOrder.forEach(function(a){a.is_paid||(t+=a.total)}),t},pay:function(){var t=0;return this.allOrder.forEach(function(a){a.is_paid&&(t+=1)}),t}},mounted:function(){this.getAllOrder()}}),i=n,o=(s("5a54"),s("2877")),c=Object(o["a"])(i,r,e,!1,null,"dabbdef6",null);a["default"]=c.exports},d357:function(t,a,s){}}]);
//# sourceMappingURL=chunk-66113254.d6e8ceed.js.map