(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cae35e48"],{"2b8cb":function(t,e,a){"use strict";var s=a("6c4f"),o=a.n(s);o.a},"2f21":function(t,e,a){"use strict";var s=a("79e5");t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},"355d":function(t,e){e.f={}.propertyIsEnumerable},5176:function(t,e,a){t.exports=a("51b6")},"51b6":function(t,e,a){a("a3c3"),t.exports=a("584a").Object.assign},"55dd":function(t,e,a){"use strict";var s=a("5ca1"),o=a("d8e8"),n=a("4bf8"),i=a("79e5"),l=[].sort,r=[1,2,3];s(s.P+s.F*(i(function(){r.sort(void 0)})||!i(function(){r.sort(null)})||!a("2f21")(l)),"Array",{sort:function(t){return void 0===t?l.call(n(this)):l.call(n(this),o(t))}})},6407:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination mb-0"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e},attrs:{pages:e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPages(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},o=[],n={props:{pages:{type:Object,default:function(){}}},methods:{getPages:function(t){this.$store.dispatch("ProductModule/getProducts",t),this.$emit("scrollTarget"),this.$emit("thePage",t)}}},i=n,l=a("2877"),r=Object(l["a"])(i,s,o,!1,null,null,null);e["a"]=r.exports},"6c4f":function(t,e,a){},9306:function(t,e,a){"use strict";var s=a("c3a1"),o=a("9aa9"),n=a("355d"),i=a("241e"),l=a("335c"),r=Object.assign;t.exports=!r||a("294c")(function(){var t={},e={},a=Symbol(),s="abcdefghijklmnopqrst";return t[a]=7,s.split("").forEach(function(t){e[t]=t}),7!=r({},t)[a]||Object.keys(r({},e)).join("")!=s})?function(t,e){var a=i(t),r=arguments.length,c=1,u=o.f,d=n.f;while(r>c){var p,m=l(arguments[c++]),v=u?s(m).concat(u(m)):s(m),C=v.length,f=0;while(C>f)d.call(m,p=v[f++])&&(a[p]=m[p])}return a}:r},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a3c3:function(t,e,a){var s=a("63b6");s(s.S+s.F,"Object",{assign:a("9306")})},d610:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[s("template",{slot:"default"},[s("img",{attrs:{src:a("ebcd")}})])],2),s("div",{staticClass:"text-right mt-4"},[s("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新的優惠券")])]),s("table",{staticClass:"table mt-5 mb-6 table-responsive-lg"},[t._m(0),s("tbody",t._l(t.SortCoupons,function(e){return s("tr",{key:e.id},[s("td",{staticClass:"text-nowrap"},[t._v(t._s(e.title))]),s("td",{staticClass:"text-nowrap"},[t._v(t._s(e.percent))]),s("td",{staticClass:"text-nowrap"},[s("span",{class:{"overdue mr-2":t.currentTime>e.due_date}},[t._v(t._s(t._f("getTime")(e.due_date)))]),t.currentTime>e.due_date?s("span",[t._v("已失效")]):t._e()]),s("td",{staticClass:"text-nowrap"},[1==e.is_enabled?s("span",{staticClass:"text-success"},[t._v("啟用")]):s("span",{staticClass:"text-danger"},[t._v("未啟用")])]),s("td",{staticClass:"text-nowrap"},[s("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[s("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")]),s("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.delopenModal(e)}}},[t._v("刪除")])])])])}),0)]),s("div",{staticClass:"modal fade",attrs:{id:"CouponsModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[s("div",{staticClass:"modal-content border-0"},[s("div",{staticClass:"modal-header bg-dark text-white"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t.isNew?s("span",[t._v("新增優惠券")]):s("span",[t._v("修改優惠券")])]),t._m(1)]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("標題")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.title,expression:"temCoupons.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.temCoupons.title},on:{input:function(e){e.target.composing||t.$set(t.temCoupons,"title",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"code"}},[t._v("優惠碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.code,expression:"temCoupons.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"輸入優惠碼"},domProps:{value:t.temCoupons.code},on:{input:function(e){e.target.composing||t.$set(t.temCoupons,"code",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"due_date"}},[t._v("到期日")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.due_date,expression:"temCoupons.due_date"}],staticClass:"form-control",attrs:{type:"text",id:"due_date",placeholder:"輸入到期日"},domProps:{value:t.temCoupons.due_date},on:{input:function(e){e.target.composing||t.$set(t.temCoupons,"due_date",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"percent"}},[t._v("折扣百分比")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.percent,expression:"temCoupons.percent"}],staticClass:"form-control",attrs:{type:"text",id:"percent",placeholder:"輸入折扣"},domProps:{value:t.temCoupons.percent},on:{input:function(e){e.target.composing||t.$set(t.temCoupons,"percent",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.temCoupons.is_enabled,expression:"temCoupons.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.temCoupons.is_enabled)?t._i(t.temCoupons.is_enabled,null)>-1:t._q(t.temCoupons.is_enabled,1)},on:{change:function(e){var a=t.temCoupons.is_enabled,s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var n=null,i=t._i(a,n);s.checked?i<0&&t.$set(t.temCoupons,"is_enabled",a.concat([n])):i>-1&&t.$set(t.temCoupons,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.temCoupons,"is_enabled",o)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                    是否啟用\n                  ")])])])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupons}},[t._v("確認優惠券")])])])])]),s("Pagination",{staticClass:"d-flex justify-content-center",attrs:{pages:t.pagination},on:{thePage:t.getCoupons}}),s("DeleteModal",{attrs:{deleteName:t.temCoupons},on:{deleteCurrent:t.deleteCoupons}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("名稱")]),a("th",{staticClass:"text-nowrap"},[t._v("折扣百分比")]),a("th",[t._v("到期日")]),a("th",{staticClass:"text-nowrap",attrs:{width:"150"}},[t._v("是否啟用")]),a("th",{attrs:{width:"150"}},[t._v("編輯")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],n=(a("55dd"),a("5176")),i=a.n(n),l=(a("ac6a"),a("6407")),r=a("fdd5"),c={data:function(){return{Coupons:[],pagination:{},temCoupons:{},isNew:!1,isLoading:!1}},components:{Pagination:l["a"],DeleteModal:r["a"]},methods:{getCoupons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/admin/coupons?page=").concat(e),s=this;s.isLoading=!0,this.$http.get(a).then(function(e){s.isLoading=!1,s.Coupons=e.data.coupons,s.pagination=e.data.pagination,s.Coupons.forEach(function(e){t.currentTime>e.due_date&&(e.is_enabled=0)})})},openModal:function(t,e){t?(this.temCoupons={},this.isNew=!0):(this.temCoupons=i()({},e),this.isNew=!1),$("#CouponsModal").modal("show")},updateCoupons:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/admin/coupon"),e="post",a=this;a.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/admin/coupon/").concat(a.temCoupons.id),e="put"),a.temCoupons.title&&a.temCoupons.code&&a.temCoupons.due_date&&a.temCoupons.percent?this.currentTime>a.temCoupons.due_date?a.$bus.$emit("message:push","有效期限錯誤","danger"):this.$http[e](t,{data:a.temCoupons}).then(function(t){t.data.success?($("#CouponsModal").modal("hide"),a.getCoupons()):a.getCoupons()}):a.$bus.$emit("message:push","優惠券不完整","danger")},delopenModal:function(t){this.temCoupons=i()({},t),$("#delProductModal").modal("show")},deleteCoupons:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/admin/coupon/").concat(t.temCoupons.id);this.$http.delete(e).then(function(e){e.data.success?($("#delProductModal").modal("hide"),t.getCoupons()):t.getCoupons()})}},computed:{currentTime:function(){return(new Date).valueOf()/1e3},SortCoupons:function(){var t=this,e=[];return t.Coupons.length&&(e=t.Coupons.sort(function(t,e){return t.due_date<e.due_date?1:-1})),e}},created:function(){this.getCoupons()}},u=c,d=(a("2b8cb"),a("2877")),p=Object(d["a"])(u,s,o,!1,null,null,null);e["default"]=p.exports},ebcd:function(t,e,a){t.exports=a.p+"img/003.3f6c4daa.gif"},fdd5:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t.deleteName.price?a("span",[t._v("刪除商品")]):t._e(),t.deleteName.percent?a("span",[t._v("刪除優惠券")]):t._e()]),t._m(0)]),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.deleteName.title)+" ")]),t.deleteName.price?a("span",[t._v("商品")]):t._e(),t.deleteName.percent?a("span",[t._v("優惠券")]):t._e(),t._v("(刪除後將無法恢復)。\n        ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.Checkdelete}},[t._v("確認刪除")])])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],n={props:{deleteName:{type:Object,default:function(){}}},methods:{Checkdelete:function(){this.$emit("deleteCurrent")}}},i=n,l=a("2877"),r=Object(l["a"])(i,s,o,!1,null,null,null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-cae35e48.6d5f3c35.js.map