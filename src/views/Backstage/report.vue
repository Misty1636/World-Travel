<template>
  <div class="pt-3">
    <h1 class="text-center text-primary h2">報表</h1>
    <hr class="my-5">
    <div class="row">
      <div class="col-md-4 col-sm-6 col-12">
        <h2 class="h3 text-primary text-center">行程比例</h2>
        <ve-pie :data="chartData1"></ve-pie>
        <h3 class="h4 mb-0 text-primary text-center">超過10萬訂單</h3>
        <ve-liquidfill :data="chartData4"></ve-liquidfill>
      </div>
      <div class="col-md-4 col-sm-6 col-12">
        <h2 class="h3 text-primary text-center">訂單狀態</h2>
        <ve-histogram :data="chartData2"></ve-histogram>
        <h3 class="h4 mb-0 text-primary text-center">完成付款比例</h3>
        <ve-liquidfill :data="chartData5"></ve-liquidfill>
      </div>
      <div class="col-md-4 col-sm-6 col-12">
        <h2 class="h3 text-primary text-center">營收統計</h2>
        <ve-waterfall :data="chartData3" :settings="chartSettings"></ve-waterfall>
        <h3 class="h4 mb-0 text-primary text-center">營收獲得比例</h3>
        <ve-liquidfill :data="chartData6"></ve-liquidfill>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      stack: {
        dimension: '狀態',
        metrics: '金額',
      },
    };
    return {
      order: {},
      pagination: {},
      allOrder: [],
      chartData1: { // 先暫時寫死
        columns: ['區域', '行程數量'],
        rows: [
          { 區域: '歐洲', 行程數量: 20 },
          { 區域: '亞洲', 行程數量: 16 },
          { 區域: '非洲', 行程數量: 4 },
          { 區域: '大洋洲', 行程數量: 5 },
          { 區域: '美洲', 行程數量: 11 },
        ],
      },
      chartData2: {
        columns: ['訂單', '數量'],
        rows: [],
      },
      chartData3: {
        columns: ['狀態', '金額'],
        rows: [],
      },
      chartData4: {
        columns: ['訂單', 'percent'],
        rows: [{
          訂單: '大金額',
          percent: 0,
        }],
      },
      chartData5: {
        columns: ['訂單', 'percent'],
        rows: [{
          訂單: '已完成',
          percent: 0,
        }],
      },
      chartData6: {
        columns: ['營收', 'percent'],
        rows: [{
          營收: '已入賬',
          percent: 0,
        }],
      },
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/orders?page=${page}`;
      const vm = this;

      this.$http.get(api).then((response) => {
        vm.allOrder.push(...response.data.orders);
        this.ordernum();
        this.ordertotal();
        this.largeAmount();
      });
    },
    getAllOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/orders?page=${1}`;

      this.$http.get(api).then((response) => {
        const pages = response.data.pagination.total_pages;
        for (let i = 1; i < pages + 1; i += 1) {
          vm.getProducts(i);
        }
      });
    },
    ordernum() { // 給柱狀圖資料
      let str = 0;
      let xyz = 0;
      const array = [
        {
          訂單: '已付款',
          數量: 0,
        },
        {
          訂單: '未付款',
          數量: 0,
        },
      ];
      this.allOrder.forEach((item) => {
        if (item.is_paid) {
          str += 1;
        } else {
          xyz += 1;
        }
      });
      array[0]['數量'] = str;
      array[1]['數量'] = xyz;
      this.chartData2.rows = [...array];
      this.chartData5.rows[0].percent = str / (str + xyz);
    },
    ordertotal() { // 給瀑布圖資料
      let str = 0;
      let xyz = 0;
      const array = [
        {
          狀態: '實際營收',
          金額: 0,
        },
        {
          狀態: '未入賬',
          金額: 0,
        },
      ];
      this.allOrder.forEach((item) => {
        if (item.is_paid) {
          str += item.total;
        } else {
          xyz += item.total;
        }
      });
      array[0]['金額'] = str;
      array[1]['金額'] = xyz;
      this.chartData3.rows = array;
      this.chartData6.rows[0].percent = str / (str + xyz);
    },
    largeAmount() { // 超過100000
      let str = 0;
      let xyz = 0;
      this.allOrder.forEach((item) => {
        if (item.total >= 100000) {
          str += 1;
        } else {
          xyz += 1;
        }
      });
      this.chartData4.rows[0].percent = str / (str + xyz);
    },
  },
  mounted() {
    this.getAllOrder();
  },
};
</script>
