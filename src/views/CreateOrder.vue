<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="../assets/002.gif">
      </template>
    </loading>

    <div class="pt-8 container CreateOrder">
      <h1 class="text-center mb-4 CreateOrder-title text-secondary">建立訂單</h1>
      <div class="row mb-5">
        <div class="col-sm-4">
          <div class="alert alert-success rounded-pill text-center" role="alert">
            1.填寫訂單
          </div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-light rounded-pill text-center" role="alert">
            2.確認付款
          </div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-light rounded-pill text-center" role="alert">
            3.訂單完成
          </div>
        </div>
      </div>
      <div class="row flex-row-reverse" v-if="cart.total">
        <div class="col-lg-5 mb-5">
          <div class="customerCart-order">
            <div class="p-3">
              <h2>訂單確認</h2>
              <hr class="mb-0">
              <div>
                <div class="d-flex customerCart-order-item align-items-start"  v-for="items in cart.carts" :key="items.id">
                  <div class="d-flex flex-column">
                    <h5 class="mb-0">{{items.product.title}}</h5>
                    <span>{{ items.qty }} {{ items.product.unit }}</span>
                  </div>
                <span class="ml-auto order-item-price">{{ items.total | currency }}</span>
                </div>
                <div class="d-flex customerCart-order-item align-items-start text-success" v-if="cart.final_total&&cart.final_total !==cart.total">
                  <div class="d-flex flex-column">
                    <h5 class="mb-0">已套用優惠</h5>
                    <span>{{ (cart.final_total/cart.total*100) }}% OFF</span>
                  </div>
                  <span class="ml-auto order-item-price">-{{ (cart.total -cart.final_total) | currency }}</span>
                </div>
                <div class="d-flex customerCart-order-item align-items-start">
                  <div class="d-flex flex-column">
                    <h5 class="mb-0">簽證費</h5>
                  </div>
                  <span class="ml-auto order-item-price">免簽證</span>
                </div>
                <div class="d-flex customerCart-order-item border-0 align-items-start">
                  <div class="d-flex flex-column">
                    <h5 class="mb-0">機場稅、燃油費</h5>
                  </div>
                  <span class="ml-auto order-item-price">已內含</span>
                </div>
                <hr class="m-0">
              </div>    
            </div>
            <div class="px-3 pb-3 customerCart-order-Nextstep">
              <div class="d-flex justify-content-end align-items-end">
                <span class="subtotal mr-2">總計</span>
                <span class="total">{{ cart.final_total | currency }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7 mb-5">
          <div>
            <h4 class="mb-4 d-flex"><span class="plane mr-1" ><font-awesome-icon icon="plane"/></span>訂購人資料</h4>
            <form @submit.prevent="createOrder">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">姓名*</label>
                  <input type="text" class="form-control" id="name" name="name" placeholder="請輸入中文姓名" v-validate="'required'" :class="{'is-invalid':errors.has('name')}" v-model="form.user.name">
                  <span class="text-danger" v-if="errors.has('name')">必須輸入中文名字</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="identity">身分證號碼*</label>
                  <input type="text" class="form-control" id="identity" name="identity" placeholder="例: A123456789" v-validate="'required'" :class="{'is-invalid':errors.has('identity')}" v-model="form.user.identity">
                  <span class="text-danger" v-if="errors.has('identity')">必須輸入身分證號碼</span>
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email*</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="請輸入Email" v-validate="'required|email'" :class="{'is-invalid':errors.has('email')}" v-model="form.user.email">
                <span class="text-danger"  v-if="errors.has('email')"> {{errors.first('email')}}</span>
              </div>
              <div class="form-group">
                <label for="passport">護照姓名*</label>
                <input type="text" class="form-control" id="passport" name="passport" placeholder="請輸入護照英文姓名" v-validate="'required'" :class="{'is-invalid':errors.has('passport')}" v-model="form.user.passport">
                <span class="text-danger" v-if="errors.has('passport')">必須輸入護照英文姓名</span>
              </div>
              <div class="form-group">
                <label for="phone">手機號碼*</label>
                <input type="tel" class="form-control" id="phone" name="phone" placeholder="請輸入手機號碼" v-validate="'required'" :class="{'is-invalid':errors.has('phone')}" v-model="form.user.tel">
                <span class="text-danger" v-if="errors.has('phone')">必須輸入手機號碼</span>
              </div>
              <div class="form-group">
                <label for="Address">地址*</label>
                <input type="text" class="form-control" id="Address" name="Address" placeholder="請輸入地址" v-validate="'required'" :class="{'is-invalid':errors.has('Address')}" v-model="form.user.address">
                <span class="text-danger" v-if="errors.has('Address')">必須輸入地址</span>
              </div>
              <div class="form-group mb-6">
                <label for="exampleFormControlTextarea1">留言備註</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="有其他需求或狀況請備註" rows="3"  v-model="form.message"></textarea>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <button type="button" class="order-btn order-back" @click="backToCart">上一步</button>
                </div>
                <div class="form-group col-md-6">
                  <button type="submit" class="order-btn order-submit">確認送出</button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="CreateOrder" tabindex="-1" role="dialog" aria-labelledby="CreateOrderCenterTitle" aria-hidden="true"  data-backdrop="static">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body leave-modal">
            <p>您的訂單資料尚未送出，確定要離開此頁?</p>
            <div class="text-right">
              <button type="button" class="mr-2 confirm" data-dismiss="modal">確定</button>
              <button type="button" class="cancel" data-dismiss="modal">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

export default {
  name: "CreateOrder",
  data() {
    return {
      cart: {},
      isLoading:false,
      form:{
        user:{
          name:'',
          email:'',
          tel:'',
          address:'',
          identity:'',
          passport:''
        },
        message:''
      },
      leave: false
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/cart`;
      const vm = this;
      this.$http.get(api).then(response => {
        vm.cart = response.data.data;
      })
    },
    toCreateOrder() {
      this.$router.push('/CreateOrder');
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/order`;
      const order = vm.form;
     
      this.$validator.validate().then((valid) => {
        if (valid) {
          vm.isLoading = true;
          this.$http.post(api,{data:order}).then((response)=> {
            vm.isLoading = false;
            if(response.data.success){
              vm.leave = true;
              vm.$router.replace(`/OrderPayment/${response.data.orderId}`);
              vm.$bus.$emit('pushCart');
            }
          })
        } else{
          vm.$bus.$emit('message:push','資料不完整!','danger')
        }
      });
    },
    backToCart() {
      this.$router.go(-1);
    }
  },
  created() {
    this.getCart();
  },
  beforeRouteLeave(to, from , next) {
    const vm = this;
    if (vm.leave) {
      next();
    } else {
      $('#CreateOrder').modal('show');     
      
      $('.confirm').on('click',function() {
         next();
      });

      $('.cancel').on('click',function() {
        next(false);
      });
    }
  }
};
</script>
