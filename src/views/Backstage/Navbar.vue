<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand mr-md-6" href="#">
      <img src="../../assets/worldtravel-logo2.png" style="height:25px;">
      <img src="../../assets/worldtravel-logo.png" style="height:30px;transform: translateX(-8px);" alt="World Travel">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/buildProducts">
            <span data-feather="users"></span>
            <font-awesome-icon icon="box-open" />
            產品列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/coupons">
            <span data-feather="layers"></span>
            <font-awesome-icon icon="money-bill" />
            優惠券
          </router-link>
        </li>
        <li class="nav-item mr-md-4">
          <router-link class="nav-link" to="/admin/report">
            <span data-feather="report"></span>
            <font-awesome-icon icon="list-alt" />
            報表分析
          </router-link>
        </li>
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="logout">
            <font-awesome-icon icon="sign-out-alt" />
            登出
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Narbar',
  methods: {
    logout() {
      this.$store.dispatch('BackstageModule/logout');
    },
  },
};
</script>
