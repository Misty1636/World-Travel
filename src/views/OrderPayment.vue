<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="../assets/002.gif">
      </template>
    </loading>

    <div class="pt-8 container OrderPayment">
      <h1 class="text-center mb-4 text-secondary">訂單付款</h1>
      <div class="row mb-5">
        <div class="col-sm-4">
          <div class="alert alert-success rounded-pill text-center" role="alert">
            1.填寫訂單<font-awesome-icon icon="check" class="ml-2" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-success  rounded-pill text-center" role="alert">
            2.確認付款
          </div>
        </div>
        <div class="col-sm-4">
          <div class="alert alert-light rounded-pill text-center" role="alert">
            3.訂單完成
          </div>
        </div>
      </div>
      <div class="OrderPayment-message mb-5">
        <h2 class="mb-0 py-2 pl-3">訂單訊息</h2>
        <div class="subscriber px-3">
          <div class="py-2 OrderPayment-common">
            <span class="mr-3 data">姓名:</span>
            <span>{{ order.user.name }}</span>
          </div>
          <div class="py-2 OrderPayment-common">
            <span class="mr-3 data">身分證號碼:</span>
            <span>{{ order.user.identity }}</span>
          </div>
          <div class="py-2 OrderPayment-common">
            <span class="mr-3 data">Email:</span>
            <span>{{ order.user.email }}</span>
          </div>
          <div class="py-2 OrderPayment-common">
            <span class="mr-3 data">護照姓名:</span>
            <span>{{ order.user.passport }}</span>
          </div>
          <div class="py-2 OrderPayment-common">
            <span class="mr-3 data">手機號碼:</span>
            <span>{{ order.user.tel }}</span>
          </div>
          <div class="py-2 OrderPayment-common">
            <span class="mr-3 data">地址:</span>
            <span>{{ order.user.address }}</span>
          </div>
          <div class="py-2 OrderPayment-common border-0">
            <span class="mr-3 data">留言備註:</span>
            <span>{{ order.message }}</span>
          </div>
        </div>
      </div>

      <div class="OrderPayment-data mb-5">
        <h2 class="mb-0 py-2 pl-3">訂單資料</h2>
        <div class="subscriber px-3">
          <div class="py-2 OrderPayment-common">
            <span class="mr-3 data">訂單成立時間:</span>
            <span>{{order.create_at | getTime}}</span>
          </div>
          <div class="py-2 OrderPayment-common">
            <span class="mr-3 data">訂單編號:</span>
            <span>{{orderId}}</span>
          </div>
          <div class="py-2 OrderPayment-common border-0">
            <span class="mr-3 data">總金額:</span>
            <span class="total">{{ order.total | currency }}</span>
          </div>
        </div>
      </div>

      <div class="OrderPayment-pay mb-5">
        <h2 class="mb-0 py-2 pl-3">信用卡資訊</h2>
        <div class="subscriber px-3">
          <div class="py-3 OrderPayment-card border-0">
            <img src="../assets/card.png" height="50px;">
          </div>
          <form @submit.prevent="payOrder">
            <div class="py-2 OrderPayment-card d-flex align-items-center">
              <label for="card-num">信用卡卡號:</label>
              <input type="number" class="form-control" id="card-num" name="card-num" placeholder="請輸入16位號碼" v-validate="'required'" :class="{'is-invalid':errors.has('card-num')}">
            </div>
            <div class="py-2 OrderPayment-card OrderPayment-card-sm d-flex align-items-center">
              <label for="card-date">有效期限:</label>
              <input type="number" class="form-control" id="card-date" name="card-date" placeholder="例: 03-2020" v-validate="'required'" :class="{'is-invalid':errors.has('card-date')}">
            </div>
            <div class="py-2 OrderPayment-card OrderPayment-card-sm border-0 d-flex align-items-center">
              <label for="card-three">背面末三碼:</label>
              <input type="number" class="form-control" id="card-three" name="card-three" placeholder="例: 130" v-validate="'required'" :class="{'is-invalid':errors.has('card-three')}">
              <img src="../assets/three.png">
            </div>
            <div class="text-right py-2 my-3">
              <button type="submit" class="submit-pay">確認付款</button>
            </div>
          </form>
        </div>
      </div>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="CreateOrder" tabindex="-1" role="dialog" aria-labelledby="CreateOrderCenterTitle" aria-hidden="true"  data-backdrop="static">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body leave-modal">
            <p>您的訂單尚未付款，確定要離開此頁?</p>
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
/* global $ */
import { mapGetters } from 'vuex';

export default {
  name: 'OrderPayment',
  data() {
    return {
      orderId: '',
      leave: false,
    };
  },
  methods: {
    payOrder() {
      const vm = this;

      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$store.dispatch('OrderModule/payOrder', this.orderId).then(() => {
            vm.leave = true;
          });
        } else {
          this.$store.dispatch('AlertModule/updateMessage', { message: '信用卡資訊錯誤!', status: 'danger' });
        }
      });
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('OrderModule', ['order']),
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.$store.dispatch('OrderModule/getOrder', this.orderId);
  },
  beforeRouteLeave(to, from, next) {
    const vm = this;
    if (vm.leave) {
      next();
    } else {
      $('#CreateOrder').modal('show');

      $('.confirm').on('click', () => {
        next();
      });

      $('.cancel').on('click', () => {
        next(false);
      });
    }
  },
};
</script>
