(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c9cbe7d"],{"014b":function(t,e,r){"use strict";var a=r("e53d"),s=r("07e3"),n=r("8e60"),i=r("63b6"),o=r("9138"),l=r("ebfd").KEY,c=r("294c"),u=r("dbdb"),f=r("45f2"),d=r("62a0"),m=r("5168"),p=r("ccb9"),v=r("6718"),b=r("47ee"),h=r("9003"),g=r("e4ae"),C=r("f772"),y=r("36c3"),_=r("1bc3"),x=r("aebd"),w=r("a159"),O=r("0395"),S=r("bf0b"),j=r("d9f6"),P=r("c3a1"),N=S.f,E=j.f,$=O.f,k=a.Symbol,q=a.JSON,F=q&&q.stringify,A="prototype",T=m("_hidden"),D=m("toPrimitive"),M={}.propertyIsEnumerable,J=u("symbol-registry"),I=u("symbols"),L=u("op-symbols"),K=Object[A],W="function"==typeof k,Y=a.QObject,z=!Y||!Y[A]||!Y[A].findChild,G=n&&c(function(){return 7!=w(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,r){var a=N(K,e);a&&delete K[e],E(t,e,r),a&&t!==K&&E(K,e,a)}:E,Q=function(t){var e=I[t]=w(k[A]);return e._k=t,e},R=W&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},B=function(t,e,r){return t===K&&B(L,e,r),g(t),e=_(e,!0),g(r),s(I,e)?(r.enumerable?(s(t,T)&&t[T][e]&&(t[T][e]=!1),r=w(r,{enumerable:x(0,!1)})):(s(t,T)||E(t,T,x(1,{})),t[T][e]=!0),G(t,e,r)):E(t,e,r)},H=function(t,e){g(t);var r,a=b(e=y(e)),s=0,n=a.length;while(n>s)B(t,r=a[s++],e[r]);return t},U=function(t,e){return void 0===e?w(t):H(w(t),e)},V=function(t){var e=M.call(this,t=_(t,!0));return!(this===K&&s(I,t)&&!s(L,t))&&(!(e||!s(this,t)||!s(I,t)||s(this,T)&&this[T][t])||e)},X=function(t,e){if(t=y(t),e=_(e,!0),t!==K||!s(I,e)||s(L,e)){var r=N(t,e);return!r||!s(I,e)||s(t,T)&&t[T][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=$(y(t)),a=[],n=0;while(r.length>n)s(I,e=r[n++])||e==T||e==l||a.push(e);return a},tt=function(t){var e,r=t===K,a=$(r?L:y(t)),n=[],i=0;while(a.length>i)!s(I,e=a[i++])||r&&!s(K,e)||n.push(I[e]);return n};W||(k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===K&&e.call(L,r),s(this,T)&&s(this[T],t)&&(this[T][t]=!1),G(this,t,x(1,r))};return n&&z&&G(K,t,{configurable:!0,set:e}),Q(t)},o(k[A],"toString",function(){return this._k}),S.f=X,j.f=B,r("6abf").f=O.f=Z,r("355d").f=V,r("9aa9").f=tt,n&&!r("b8e3")&&o(K,"propertyIsEnumerable",V,!0),p.f=function(t){return Q(m(t))}),i(i.G+i.W+i.F*!W,{Symbol:k});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)m(et[rt++]);for(var at=P(m.store),st=0;at.length>st;)v(at[st++]);i(i.S+i.F*!W,"Symbol",{for:function(t){return s(J,t+="")?J[t]:J[t]=k(t)},keyFor:function(t){if(!R(t))throw TypeError(t+" is not a symbol!");for(var e in J)if(J[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),i(i.S+i.F*!W,"Object",{create:U,defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),q&&i(i.S+i.F*(!W||c(function(){var t=k();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){var e,r,a=[t],s=1;while(arguments.length>s)a.push(arguments[s++]);if(r=e=a[1],(C(e)||void 0!==t)&&!R(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!R(e))return e}),a[1]=e,F.apply(q,a)}}),k[A][D]||r("35e8")(k[A],D,k[A].valueOf),f(k,"Symbol"),f(Math,"Math",!0),f(a.JSON,"JSON",!0)},"0395":function(t,e,r){var a=r("36c3"),s=r("6abf").f,n={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return s(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==n.call(t)?o(t):s(a(t))}},"268f":function(t,e,r){t.exports=r("fde4")},"2dbe":function(t,e,r){t.exports=r.p+"img/002.0fc4165a.gif"},"32a6":function(t,e,r){var a=r("241e"),s=r("c3a1");r("ce7e")("keys",function(){return function(t){return s(a(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"454f":function(t,e,r){r("46a7");var a=r("584a").Object;t.exports=function(t,e,r){return a.defineProperty(t,e,r)}},"46a7":function(t,e,r){var a=r("63b6");a(a.S+a.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"47ee":function(t,e,r){var a=r("c3a1"),s=r("9aa9"),n=r("355d");t.exports=function(t){var e=a(t),r=s.f;if(r){var i,o=r(t),l=n.f,c=0;while(o.length>c)l.call(t,i=o[c++])&&e.push(i)}return e}},"4fa1":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("template",{slot:"default"},[a("img",{attrs:{src:r("2dbe")}})])],2),a("div",{staticClass:"pt-8 container CreateOrder"},[a("h1",{staticClass:"text-center mb-4 CreateOrder-title text-secondary"},[t._v("建立訂單")]),t._m(0),t.cart.total?a("div",{staticClass:"row flex-row-reverse"},[a("div",{staticClass:"col-lg-5 mb-5"},[a("div",{staticClass:"customerCart-order"},[a("div",{staticClass:"p-3"},[a("h2",[t._v("訂單確認")]),a("hr",{staticClass:"mb-0"}),a("div",[t._l(t.cart.carts,function(e){return a("div",{key:e.id,staticClass:"d-flex customerCart-order-item align-items-start"},[a("div",{staticClass:"d-flex flex-column"},[a("h5",{staticClass:"mb-0"},[t._v(t._s(e.product.title))]),a("span",[t._v(t._s(e.qty)+" "+t._s(e.product.unit))])]),a("span",{staticClass:"ml-auto order-item-price"},[t._v(t._s(t._f("currency")(e.total)))])])}),t.cart.final_total&&t.cart.final_total!==t.cart.total?a("div",{staticClass:"d-flex customerCart-order-item align-items-start text-success"},[a("div",{staticClass:"d-flex flex-column"},[a("h5",{staticClass:"mb-0"},[t._v("已套用優惠")]),a("span",[t._v(t._s(t.cart.final_total/t.cart.total*100)+"% OFF")])]),a("span",{staticClass:"ml-auto order-item-price"},[t._v("-"+t._s(t._f("currency")(t.cart.total-t.cart.final_total)))])]):t._e(),t._m(1),t._m(2),a("hr",{staticClass:"m-0"})],2)]),a("div",{staticClass:"px-3 pb-3 customerCart-order-Nextstep"},[a("div",{staticClass:"d-flex justify-content-end align-items-end"},[a("span",{staticClass:"subtotal mr-2"},[t._v("總計")]),a("span",{staticClass:"total"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])])])])]),a("div",{staticClass:"col-lg-7 mb-5"},[a("div",[a("h4",{staticClass:"mb-4 d-flex"},[a("span",{staticClass:"plane mr-1"},[a("font-awesome-icon",{attrs:{icon:"plane"}})],1),t._v("訂購人資料")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"name"}},[t._v("姓名*")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",id:"name",name:"name",placeholder:"請輸入中文姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("必須輸入中文名字")]):t._e()]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"identity"}},[t._v("身分證號碼*")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.identity,expression:"form.user.identity"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("identity")},attrs:{type:"text",id:"identity",name:"identity",placeholder:"例: A123456789"},domProps:{value:t.form.user.identity},on:{input:function(e){e.target.composing||t.$set(t.form.user,"identity",e.target.value)}}}),t.errors.has("identity")?a("span",{staticClass:"text-danger"},[t._v("必須輸入身分證號碼")]):t._e()])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email*")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",id:"email",name:"email",placeholder:"請輸入Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.errors.first("email")))]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"passport"}},[t._v("護照姓名*")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.passport,expression:"form.user.passport"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("passport")},attrs:{type:"text",id:"passport",name:"passport",placeholder:"請輸入護照英文姓名"},domProps:{value:t.form.user.passport},on:{input:function(e){e.target.composing||t.$set(t.form.user,"passport",e.target.value)}}}),t.errors.has("passport")?a("span",{staticClass:"text-danger"},[t._v("必須輸入護照英文姓名")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[t._v("手機號碼*")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("phone")},attrs:{type:"tel",id:"phone",name:"phone",placeholder:"請輸入手機號碼"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("phone")?a("span",{staticClass:"text-danger"},[t._v("必須輸入手機號碼")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Address"}},[t._v("地址*")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("Address")},attrs:{type:"text",id:"Address",name:"Address",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("Address")?a("span",{staticClass:"text-danger"},[t._v("必須輸入地址")]):t._e()]),a("div",{staticClass:"form-group mb-6"},[a("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("留言備註")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",placeholder:"有其他需求或狀況請備註",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("button",{staticClass:"order-btn order-back",attrs:{type:"button"},on:{click:t.backToCart}},[t._v("上一步")])]),t._m(3)])])])])]):t._e()]),t._m(4)],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-5"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"alert alert-success rounded-pill text-center",attrs:{role:"alert"}},[t._v("\n          1.填寫訂單\n        ")])]),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"alert alert-light rounded-pill text-center",attrs:{role:"alert"}},[t._v("\n          2.確認付款\n        ")])]),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"alert alert-light rounded-pill text-center",attrs:{role:"alert"}},[t._v("\n          3.訂單完成\n        ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex customerCart-order-item align-items-start"},[r("div",{staticClass:"d-flex flex-column"},[r("h5",{staticClass:"mb-0"},[t._v("簽證費")])]),r("span",{staticClass:"ml-auto order-item-price"},[t._v("免簽證")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex customerCart-order-item border-0 align-items-start"},[r("div",{staticClass:"d-flex flex-column"},[r("h5",{staticClass:"mb-0"},[t._v("機場稅、燃油費")])]),r("span",{staticClass:"ml-auto order-item-price"},[t._v("已內含")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group col-md-6"},[r("button",{staticClass:"order-btn order-submit",attrs:{type:"submit"}},[t._v("確認送出")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade",attrs:{id:"CreateOrder",tabindex:"-1",role:"dialog","aria-labelledby":"CreateOrderCenterTitle","aria-hidden":"true","data-backdrop":"static"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-body leave-modal"},[r("p",[t._v("您的訂單資料尚未送出，確定要離開此頁?")]),r("div",{staticClass:"text-right"},[r("button",{staticClass:"mr-2 confirm",attrs:{type:"button","data-dismiss":"modal"}},[t._v("確定")]),r("button",{staticClass:"cancel",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")])])])])])])}],n=r("cebc"),i=r("2f62"),o={name:"CreateOrder",data:function(){return{form:{user:{name:"",email:"",tel:"",address:"",identity:"",passport:""},message:""},leave:!1}},methods:{createOrder:function(){var t=this,e=this,r=e.form;this.$validator.validate().then(function(a){a?t.$store.dispatch("OrderModule/createOrder",r).then(function(){e.leave=!0}):t.$store.dispatch("AlertModule/updateMessage",{message:"資料不完整!",status:"danger"})})},backToCart:function(){this.$router.go(-1)}},computed:Object(n["a"])({},Object(i["c"])(["isLoading"]),Object(i["c"])("CartModule",["cart"])),created:function(){this.$store.dispatch("CartModule/getCart")},beforeRouteLeave:function(t,e,r){var a=this;a.leave?r():($("#CreateOrder").modal("show"),$(".confirm").on("click",function(){r()}),$(".cancel").on("click",function(){r(!1)}))}},l=o,c=r("2877"),u=Object(c["a"])(l,a,s,!1,null,null,null);e["default"]=u.exports},6718:function(t,e,r){var a=r("e53d"),s=r("584a"),n=r("b8e3"),i=r("ccb9"),o=r("d9f6").f;t.exports=function(t){var e=s.Symbol||(s.Symbol=n?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:i.f(t)})}},"6abf":function(t,e,r){var a=r("e6f3"),s=r("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,s)}},"85f2":function(t,e,r){t.exports=r("454f")},"8aae":function(t,e,r){r("32a6"),t.exports=r("584a").Object.keys},9003:function(t,e,r){var a=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==a(t)}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a4bb:function(t,e,r){t.exports=r("8aae")},bf0b:function(t,e,r){var a=r("355d"),s=r("aebd"),n=r("36c3"),i=r("1bc3"),o=r("07e3"),l=r("794b"),c=Object.getOwnPropertyDescriptor;e.f=r("8e60")?c:function(t,e){if(t=n(t),e=i(e,!0),l)try{return c(t,e)}catch(r){}if(o(t,e))return s(!a.f.call(t,e),t[e])}},bf90:function(t,e,r){var a=r("36c3"),s=r("bf0b").f;r("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return s(a(t),e)}})},ccb9:function(t,e,r){e.f=r("5168")},ce7e:function(t,e,r){var a=r("63b6"),s=r("584a"),n=r("294c");t.exports=function(t,e){var r=(s.Object||{})[t]||Object[t],i={};i[t]=e(r),a(a.S+a.F*n(function(){r(1)}),"Object",i)}},cebc:function(t,e,r){"use strict";var a=r("268f"),s=r.n(a),n=r("e265"),i=r.n(n),o=r("a4bb"),l=r.n(o),c=r("85f2"),u=r.n(c);function f(t,e,r){return e in t?u()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=l()(r);"function"===typeof i.a&&(a=a.concat(i()(r).filter(function(t){return s()(r,t).enumerable}))),a.forEach(function(e){f(t,e,r[e])})}return t}r.d(e,"a",function(){return d})},e265:function(t,e,r){t.exports=r("ed33")},ebfd:function(t,e,r){var a=r("62a0")("meta"),s=r("f772"),n=r("07e3"),i=r("d9f6").f,o=0,l=Object.isExtensible||function(){return!0},c=!r("294c")(function(){return l(Object.preventExtensions({}))}),u=function(t){i(t,a,{value:{i:"O"+ ++o,w:{}}})},f=function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!n(t,a)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[a].i},d=function(t,e){if(!n(t,a)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[a].w},m=function(t){return c&&p.NEED&&l(t)&&!n(t,a)&&u(t),t},p=t.exports={KEY:a,NEED:!1,fastKey:f,getWeak:d,onFreeze:m}},ed33:function(t,e,r){r("014b"),t.exports=r("584a").Object.getOwnPropertySymbols},fde4:function(t,e,r){r("bf90");var a=r("584a").Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-2c9cbe7d.793dac32.js.map