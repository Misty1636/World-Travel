(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19227269"],{"85f5":function(t,a,e){"use strict";var s=e("d939"),r=e.n(s);r.a},"9c18":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid pt-7 d-flex flex-column align-items-center"},[e("h1",{staticClass:"text-primary mb-6"},[t._v("報表")]),e("div",{staticClass:"report-content p-3 text-primary"},[e("div",{staticClass:"report-item mb-3 h6"},[e("span",{staticClass:"report-name"},[t._v("預估總營收")]),e("span",{staticClass:"report-num"},[t._v(t._s(t._f("currency")(t.total+t.waittotal)))])]),e("div",{staticClass:"report-item mb-3"},[e("span",{staticClass:"report-name"},[t._v("實際營收")]),e("span",{staticClass:"report-num"},[t._v(t._s(t._f("currency")(t.total)))])]),e("div",{staticClass:"report-item"},[e("span",{staticClass:"report-name"},[t._v("等待營收")]),e("span",{staticClass:"report-num"},[t._v(t._s(t._f("currency")(t.waittotal)))])]),t._m(0),e("div",{staticClass:"report-item mb-3"},[e("span",{staticClass:"report-name"},[t._v("總訂單數量")]),e("span",{staticClass:"report-num"},[t._v(t._s(t.allOrder.length))])]),e("div",{staticClass:"report-item mb-3"},[e("span",{staticClass:"report-name"},[t._v("已付款")]),e("span",{staticClass:"report-num"},[t._v(t._s(t.pay))])]),e("div",{staticClass:"report-item"},[e("span",{staticClass:"report-name"},[t._v("未付款")]),e("span",{staticClass:"report-num"},[t._v(t._s(t.allOrder.length-t.pay))])]),t._m(1),e("div",{staticClass:"report-item"},[e("span",{staticClass:"report-name"},[t._v("完成訂單比例")]),e("span",{staticClass:"report-num"},[t._v(t._s(Math.round(t.pay/t.allOrder.length*100))+"%")])])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"report-item text-center"},[e("hr")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"report-item"},[e("hr")])}],i=(e("ac6a"),{data:function(){return{order:{},pagination:{},isLoading:!1,allOrder:[]}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/orders?page=").concat(t),e=this;this.$http.get(a).then(function(t){for(var a=t.data.orders.length,s=0;s<a;s++)e.allOrder.push(t.data.orders[s])})},getAllOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/orders?page=",1);this.$http.get(a).then(function(a){for(var e=a.data.pagination.total_pages,s=1;s<e+1;s++)t.getProducts(s)})}},computed:{total:function(){var t=0;return this.allOrder.forEach(function(a){a.is_paid&&(t+=a.total)}),t},waittotal:function(){var t=0;return this.allOrder.forEach(function(a){a.is_paid||(t+=a.total)}),t},pay:function(){var t=0;return this.allOrder.forEach(function(a){a.is_paid&&(t+=1)}),t}},mounted:function(){this.getAllOrder()}}),n=i,o=(e("85f5"),e("2877")),c=Object(o["a"])(n,s,r,!1,null,"ff2b1d4a",null);a["default"]=c.exports},ac6a:function(t,a,e){for(var s=e("cadf"),r=e("0d58"),i=e("2aba"),n=e("7726"),o=e("32e9"),c=e("84f2"),l=e("2b4c"),p=l("iterator"),u=l("toStringTag"),d=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(m),h=0;h<f.length;h++){var v,_=f[h],C=m[_],L=n[_],g=L&&L.prototype;if(g&&(g[p]||o(g,p,d),g[u]||o(g,u,_),c[_]=d,C))for(v in s)g[v]||i(g,v,s[v],!0)}},d939:function(t,a,e){}}]);
//# sourceMappingURL=chunk-19227269.2dccdd08.js.map