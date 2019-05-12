(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-193bcab6"],{"2dbe":function(t,e,a){t.exports=a.p+"img/002.0fc4165a.gif"},"4fa1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[s("template",{slot:"default"},[s("img",{attrs:{src:a("2dbe")}})])],2),s("div",{staticClass:"pt-8 container CreateOrder"},[s("h1",{staticClass:"text-center mb-4 CreateOrder-title text-secondary"},[t._v("建立訂單")]),t._m(0),t.cart.total?s("div",{staticClass:"row flex-row-reverse"},[s("div",{staticClass:"col-lg-5 mb-5"},[s("div",{staticClass:"customerCart-order"},[s("div",{staticClass:"p-3"},[s("h2",[t._v("訂單確認")]),s("hr",{staticClass:"mb-0"}),s("div",[t._l(t.cart.carts,function(e){return s("div",{key:e.id,staticClass:"d-flex customerCart-order-item align-items-start"},[s("div",{staticClass:"d-flex flex-column"},[s("h5",{staticClass:"mb-0"},[t._v(t._s(e.product.title))]),s("span",[t._v(t._s(e.qty)+" "+t._s(e.product.unit))])]),s("span",{staticClass:"ml-auto order-item-price"},[t._v(t._s(t._f("currency")(e.total)))])])}),t.cart.final_total&&t.cart.final_total!==t.cart.total?s("div",{staticClass:"d-flex customerCart-order-item align-items-start text-success"},[s("div",{staticClass:"d-flex flex-column"},[s("h5",{staticClass:"mb-0"},[t._v("已套用優惠")]),s("span",[t._v(t._s(t.cart.final_total/t.cart.total*100)+"% OFF")])]),s("span",{staticClass:"ml-auto order-item-price"},[t._v("-"+t._s(t._f("currency")(t.cart.total-t.cart.final_total)))])]):t._e(),t._m(1),t._m(2),s("hr",{staticClass:"m-0"})],2)]),s("div",{staticClass:"px-3 pb-3 customerCart-order-Nextstep"},[s("div",{staticClass:"d-flex justify-content-end align-items-end"},[s("span",{staticClass:"subtotal mr-2"},[t._v("總計")]),s("span",{staticClass:"total"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])])])])]),s("div",{staticClass:"col-lg-7 mb-5"},[s("div",[s("h4",{staticClass:"mb-4 d-flex"},[s("span",{staticClass:"plane mr-1"},[s("font-awesome-icon",{attrs:{icon:"plane"}})],1),t._v("訂購人資料")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"name"}},[t._v("姓名*")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",id:"name",name:"name",placeholder:"請輸入中文姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?s("span",{staticClass:"text-danger"},[t._v("必須輸入中文名字")]):t._e()]),s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"identity"}},[t._v("身分證號碼*")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.identity,expression:"form.user.identity"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("identity")},attrs:{type:"text",id:"identity",name:"identity",placeholder:"例: A123456789"},domProps:{value:t.form.user.identity},on:{input:function(e){e.target.composing||t.$set(t.form.user,"identity",e.target.value)}}}),t.errors.has("identity")?s("span",{staticClass:"text-danger"},[t._v("必須輸入身分證號碼")]):t._e()])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email*")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",id:"email",name:"email",placeholder:"請輸入Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?s("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.errors.first("email")))]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"passport"}},[t._v("護照姓名*")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.passport,expression:"form.user.passport"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("passport")},attrs:{type:"text",id:"passport",name:"passport",placeholder:"請輸入護照英文姓名"},domProps:{value:t.form.user.passport},on:{input:function(e){e.target.composing||t.$set(t.form.user,"passport",e.target.value)}}}),t.errors.has("passport")?s("span",{staticClass:"text-danger"},[t._v("必須輸入護照英文姓名")]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"phone"}},[t._v("手機號碼*")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("phone")},attrs:{type:"tel",id:"phone",name:"phone",placeholder:"請輸入手機號碼"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("phone")?s("span",{staticClass:"text-danger"},[t._v("必須輸入手機號碼")]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Address"}},[t._v("地址*")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("Address")},attrs:{type:"text",id:"Address",name:"Address",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("Address")?s("span",{staticClass:"text-danger"},[t._v("必須輸入地址")]):t._e()]),s("div",{staticClass:"form-group mb-6"},[s("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("留言備註")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",placeholder:"有其他需求或狀況請備註",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-6"},[s("button",{staticClass:"order-btn order-back",attrs:{type:"button"},on:{click:t.backToCart}},[t._v("上一步")])]),t._m(3)])])])])]):t._e()]),t._m(4)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"alert alert-success rounded-pill text-center",attrs:{role:"alert"}},[t._v("\n          1.填寫訂單\n        ")])]),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"alert alert-light rounded-pill text-center",attrs:{role:"alert"}},[t._v("\n          2.確認付款\n        ")])]),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"alert alert-light rounded-pill text-center",attrs:{role:"alert"}},[t._v("\n          3.訂單完成\n        ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex customerCart-order-item align-items-start"},[a("div",{staticClass:"d-flex flex-column"},[a("h5",{staticClass:"mb-0"},[t._v("簽證費")])]),a("span",{staticClass:"ml-auto order-item-price"},[t._v("免簽證")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex customerCart-order-item border-0 align-items-start"},[a("div",{staticClass:"d-flex flex-column"},[a("h5",{staticClass:"mb-0"},[t._v("機場稅、燃油費")])]),a("span",{staticClass:"ml-auto order-item-price"},[t._v("已內含")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group col-md-6"},[a("button",{staticClass:"order-btn order-submit",attrs:{type:"submit"}},[t._v("確認送出")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"CreateOrder",tabindex:"-1",role:"dialog","aria-labelledby":"CreateOrderCenterTitle","aria-hidden":"true","data-backdrop":"static"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body leave-modal"},[a("p",[t._v("您的訂單資料尚未送出，確定要離開此頁?")]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"mr-2 confirm",attrs:{type:"button","data-dismiss":"modal"}},[t._v("確定")]),a("button",{staticClass:"cancel",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")])])])])])])}],i=(a("a481"),{name:"CreateOrder",data:function(){return{cart:{},isLoading:!1,form:{user:{name:"",email:"",tel:"",address:"",identity:"",passport:""},message:""},leave:!1}},methods:{getCart:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/cart"),e=this;this.$http.get(t).then(function(t){e.cart=t.data.data})},toCreateOrder:function(){this.$router.push("/CreateOrder")},createOrder:function(){var t=this,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("palette","/order"),s=e.form;this.$validator.validate().then(function(r){r?(e.isLoading=!0,t.$http.post(a,{data:s}).then(function(t){e.isLoading=!1,t.data.success&&(e.leave=!0,e.$router.replace("/OrderPayment/".concat(t.data.orderId)),e.$bus.$emit("pushCart"))})):e.$bus.$emit("message:push","資料不完整!","danger")})},backToCart:function(){this.$router.go(-1)}},created:function(){this.getCart()},beforeRouteLeave:function(t,e,a){var s=this;s.leave?a():($("#CreateOrder").modal("show"),$(".confirm").on("click",function(){a()}),$(".cancel").on("click",function(){a(!1)}))}}),o=i,l=a("2877"),n=Object(l["a"])(o,s,r,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-193bcab6.dfc0db97.js.map