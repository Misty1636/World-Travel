(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10570878"],{"355d":function(t,e){e.f={}.propertyIsEnumerable},5176:function(t,e,a){t.exports=a("51b6")},"51b6":function(t,e,a){a("a3c3"),t.exports=a("584a").Object.assign},5969:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"buildProducts"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[s("template",{slot:"default"},[s("img",{attrs:{src:a("ebcd")}})])],2),s("div",{staticClass:"text-right mt-4"},[s("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新的行程")])]),s("table",{staticClass:"table mt-5 mb-6 table-responsive-lg"},[t._m(0),s("tbody",t._l(t.products,function(e){return s("tr",{key:e.id},[s("td",{staticClass:"text-nowrap align-middle category"},[s("span",{staticClass:"badge",class:t._f("giveclass")(e.category)},[t._v(t._s(e.category))])]),s("td",{staticClass:"text-nowrap align-middle"},[t._v(t._s(e.title))]),s("td",{staticClass:"text-right text-nowrap align-middle"},[t._v(t._s(t._f("currency")(e.origin_price)))]),s("td",{staticClass:"text-right text-nowrap align-middle"},[t._v(t._s(t._f("currency")(e.price)))]),s("td",{staticClass:"text-center text-nowrap align-middle"},[1==e.is_enabled?s("span",{staticClass:"text-success"},[t._v("已上架")]):s("span",{staticClass:"text-danger"},[t._v("未上架")])]),s("td",{staticClass:"text-nowrap"},[s("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[s("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")]),s("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.delopenModal(e)}}},[t._v("刪除")])])])])}),0)]),s("Pagination",{staticClass:"d-flex justify-content-center",attrs:{pages:t.pagination},on:{thePage:t.getProducts}}),s("ProductsModal",{ref:"files",attrs:{theProducts:t.temProducts,uploadStatus:t.status,isNews:t.isNew},on:{sendupdate:t.updateProducts,uploadImg:t.uploadFile}}),s("DeleteModal",{attrs:{deleteName:t.temProducts},on:{deleteCurrent:t.deleteProducts}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{width:"120"}},[t._v("區域")]),a("th",{staticClass:"text-nowrap"},[t._v("行程名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{staticClass:"text-nowrap",attrs:{width:"100"}},[t._v("是否上架")]),a("th",{attrs:{width:"150"}},[t._v("編輯")])])}],i=a("5176"),r=a.n(i),c=a("6407"),n=a("fdd5"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal fade",attrs:{id:"productsModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t.isNews?a("span",[t._v("新增產品")]):a("span",[t._v("修改產品")])]),t._m(0)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.theProducts.imageUrl,expression:"theProducts.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.theProducts.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.theProducts,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n                  "),t.uploadStatus.uploadloading?a("i",{staticClass:"fas fa-spinner fa-pulse"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.updateFile}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",alt:"",src:t.theProducts.imageUrl}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.theProducts.title,expression:"theProducts.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.theProducts.title},on:{input:function(e){e.target.composing||t.$set(t.theProducts,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.theProducts.category,expression:"theProducts.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.theProducts.category},on:{input:function(e){e.target.composing||t.$set(t.theProducts,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"unit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.theProducts.unit,expression:"theProducts.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.theProducts.unit},on:{input:function(e){e.target.composing||t.$set(t.theProducts,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.theProducts.origin_price,expression:"theProducts.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.theProducts.origin_price},on:{input:function(e){e.target.composing||t.$set(t.theProducts,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.theProducts.price,expression:"theProducts.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.theProducts.price},on:{input:function(e){e.target.composing||t.$set(t.theProducts,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.theProducts.description,expression:"theProducts.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.theProducts.description},on:{input:function(e){e.target.composing||t.$set(t.theProducts,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.theProducts.content,expression:"theProducts.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.theProducts.content},on:{input:function(e){e.target.composing||t.$set(t.theProducts,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.theProducts.is_enabled,expression:"theProducts.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.theProducts.is_enabled)?t._i(t.theProducts.is_enabled,null)>-1:t._q(t.theProducts.is_enabled,1)},on:{change:function(e){var a=t.theProducts.is_enabled,s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&t.$set(t.theProducts,"is_enabled",a.concat([i])):r>-1&&t.$set(t.theProducts,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.theProducts,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                    是否啟用\n                  ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.checkSend}},[t._v("確認")])])])])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],u={props:{theProducts:{type:Object,default:function(){}},uploadStatus:{type:Object,default:function(){}},isNews:{}},methods:{checkSend:function(){this.$emit("sendupdate")},updateFile:function(){this.$emit("uploadImg")}}},p=u,m=a("2877"),h=Object(m["a"])(p,l,d,!1,null,null,null),g=h.exports,v={data:function(){return{products:[],pagination:{},temProducts:{},isNew:!1,isLoading:!1,status:{uploadloading:!1}}},components:{Pagination:c["a"],DeleteModal:n["a"],ProductsModal:g},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/admin/products?page=").concat(t),a=this;a.isLoading=!0,this.$http.get(e).then(function(t){a.isLoading=!1,a.products=t.data.products,a.pagination=t.data.pagination})},openModal:function(t,e){t?(this.temProducts={},this.isNew=!0):(this.temProducts=r()({},e),this.isNew=!1),$("#productsModal").modal("show")},updateProducts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/admin/product"),e="post",a=this;a.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/admin/product/").concat(a.temProducts.id),e="put"),this.$http[e](t,{data:a.temProducts}).then(function(t){t.data.success?($("#productsModal").modal("hide"),a.getProducts()):a.getProducts()})},delopenModal:function(t){this.temProducts=r()({},t),$("#delProductModal").modal("show")},deleteProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/admin/product/").concat(t.temProducts.id);this.$http.delete(e).then(function(e){e.data.success?($("#delProductModal").modal("hide"),t.getProducts()):t.getProducts()})},uploadFile:function(){var t=this,e=this.$refs.files.$refs.files.files[0],a=this,s=new FormData;s.append("file-to-upload",e);var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/admin/upload");a.status.uploadloading=!0,this.$http.post(o,s,{headers:{"Content-type":"multipart/form-data"}}).then(function(e){a.status.uploadloading=!1,e.data.success?a.$set(a.temProducts,"imageUrl",e.data.imageUrl):t.$bus.$emit("message:push",e.data.message,"danger")})}},created:function(){this.getProducts()}},f=v,b=Object(m["a"])(f,s,o,!1,null,null,null);e["default"]=b.exports},6407:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination mb-0"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e},attrs:{pages:e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPages(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},o=[],i={props:{pages:{type:Object,default:function(){}}},methods:{getPages:function(t){this.$store.dispatch("ProductModule/getProducts",t),this.$emit("scrollTarget"),this.$emit("thePage",t)}}},r=i,c=a("2877"),n=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=n.exports},9306:function(t,e,a){"use strict";var s=a("c3a1"),o=a("9aa9"),i=a("355d"),r=a("241e"),c=a("335c"),n=Object.assign;t.exports=!n||a("294c")(function(){var t={},e={},a=Symbol(),s="abcdefghijklmnopqrst";return t[a]=7,s.split("").forEach(function(t){e[t]=t}),7!=n({},t)[a]||Object.keys(n({},e)).join("")!=s})?function(t,e){var a=r(t),n=arguments.length,l=1,d=o.f,u=i.f;while(n>l){var p,m=c(arguments[l++]),h=d?s(m).concat(d(m)):s(m),g=h.length,v=0;while(g>v)u.call(m,p=h[v++])&&(a[p]=m[p])}return a}:n},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a3c3:function(t,e,a){var s=a("63b6");s(s.S+s.F,"Object",{assign:a("9306")})},ebcd:function(t,e,a){t.exports=a.p+"img/003.3f6c4daa.gif"},fdd5:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t.deleteName.price?a("span",[t._v("刪除商品")]):t._e(),t.deleteName.percent?a("span",[t._v("刪除優惠券")]):t._e()]),t._m(0)]),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.deleteName.title)+" ")]),t.deleteName.price?a("span",[t._v("商品")]):t._e(),t.deleteName.percent?a("span",[t._v("優惠券")]):t._e(),t._v("(刪除後將無法恢復)。\n        ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.Checkdelete}},[t._v("確認刪除")])])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i={props:{deleteName:{type:Object,default:function(){}}},methods:{Checkdelete:function(){this.$emit("deleteCurrent")}}},r=i,c=a("2877"),n=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=n.exports}}]);
//# sourceMappingURL=chunk-10570878.9643427b.js.map