<template>
  <div class="container-fluid pt-7 d-flex flex-column align-items-center">
    <h1 class="text-primary mb-6">報表</h1>
    <div class="report-content p-3 text-primary">
      <div class="report-item mb-3 h6">
        <span class="report-name">預估總營收</span>
        <span class="report-num">{{total+waittotal | currency}}</span>
      </div>
      <div class="report-item mb-3">
        <span class="report-name">實際營收</span>
        <span class="report-num">{{total | currency}}</span>
      </div>
      <div class="report-item">
        <span class="report-name">等待營收</span>
        <span class="report-num">{{ waittotal | currency}}</span>
      </div>
      <div class="report-item text-center">
        <hr>
      </div>
      <div class="report-item mb-3">
        <span class="report-name">總訂單數量</span>
        <span class="report-num">{{allOrder.length}}</span>
      </div>
      <div class="report-item mb-3">
        <span class="report-name">已付款</span>
        <span class="report-num">{{pay}}</span>
      </div>
      <div class="report-item">
        <span class="report-name">未付款</span>
        <span class="report-num">{{allOrder.length-pay}}</span>
      </div>
      <div class="report-item">
        <hr>
      </div>
      <div class="report-item">
        <span class="report-name">完成訂單比例</span>
        <span class="report-num">{{Math.round(pay/allOrder.length*100)}}%</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {},
      pagination: {},
      isLoading: false,
      allOrder: [],
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/orders?page=${page}`;
      const vm = this;

      this.$http.get(api).then((response) => {
        const len = response.data.orders.length;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < len; i++) {
          vm.allOrder.push(response.data.orders[i]);
        }
      });
    },
    getAllOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/orders?page=${1}`;

      this.$http.get(api).then((response) => {
        const pages = response.data.pagination.total_pages;

        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < pages + 1; i++) {
          vm.getProducts(i);
        }
      });
    },
  },
  computed: {
    total() {
      let str = 0;
      this.allOrder.forEach((item) => {
        if (item.is_paid) {
          str += item.total;
        }
      });
      return str;
    },
    waittotal() {
      let str = 0;
      this.allOrder.forEach((item) => {
        if (!item.is_paid) {
          str += item.total;
        }
      });
      return str;
    },
    pay() {
      let str = 0;
      this.allOrder.forEach((item) => {
        if (item.is_paid) {
          str += 1;
        }
      });
      return str;
    },
    // pro(){
    //   let str = []
    //   let xyz = []
    //   let abc = []
    //   let yyy = []
    //   this.allOrder.forEach((item)=>{
    //      str.push(item.products)

    //   })

    //   for(let item in str[0]){
    //     // console.log(`物件屬性 ${item}, 屬性值 ${data[0][item]}`);
    //     xyz.push(str[0][item])
    //   }

    //   for(let item in xyz[0]){
    //     // console.log(`物件屬性 ${item}, 屬性值 ${data[0][item]}`);
    //     abc.push(xyz[0][item])
    //   }
    //   return xyz;
    // }
  },
  mounted() {
    this.getAllOrder();
  },
};
</script>

<style lang="scss" scoped>
.report-content{
  border: 1px solid #9f8d79;
  box-shadow: 0 0 15px #CCC;
}

.report-item{
  .report-name,.report-num{
    display: inline-block;
    width: 125px;
  }
  hr{
    width: 250px;
    background: rgba(#9f8d79,.7);
  }
}
</style>
