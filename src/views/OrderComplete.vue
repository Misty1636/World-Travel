<template>
  <div class="pt-8 container OrderComplete">
    <h1 class="text-center mb-4 text-secondary">付款成功</h1>
    <div class="row mb-7">
      <div class="col-sm-4">
        <div class="alert alert-success rounded-pill text-center" role="alert">
          1.填寫訂單<font-awesome-icon icon="check" class="ml-2" />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="alert alert-success rounded-pill text-center" role="alert">
          2.確認付款<font-awesome-icon icon="check" class="ml-2" />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="alert  alert-success rounded-pill text-center" role="alert">
          3.訂單完成<font-awesome-icon icon="check" class="ml-2" />
        </div>
      </div>
    </div>
    <div class="px-3 py-sm-5 py-4 OrderComplete-data mb-sm-8 mb-6">
      <h4 class="text-center mb-4">感謝您的訂購，歡迎您再次光臨!</h4>
      <div class="mx-auto yourOrder mb-1">
        <span class="mr-2">您的訂單編號:</span>
        <span class="info">{{orderId}}</span>
      </div>
      <div class="mx-auto yourOrder mb-5">
        <span class="mr-2">您的訂單金額:</span>
        <span class="info">{{ order.total | currency }}</span>
      </div>
      <p class="mb-1 text-center text-secondary">您的訂單將會在3個工作天內處理完成。</p>
      <p class="mb-1 text-center text-secondary">如遇國定連假、寒暑假旺季則在5個工作天內處理完成。</p>
      <p class="mb-0 text-center text-secondary">如有其它變更需求，請致電客服<br class="d-md-none">0800-000-000將有專員為您服務。</p>
    </div>
    <div class="text-center">
      <button type="button" class="continue" @click="toProducts">繼續選購</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderComplete',
  data() {
    return {
      order: {
        user: {

        },
      },
      orderId: '',
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/order/${vm.orderId}`;
      this.$http.get(api).then((response) => {
        vm.order = response.data.order;
      });
    },
    toProducts() {
      this.$router.push('/Products');
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
