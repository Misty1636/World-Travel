<template>
  <nav class="col-2 d-md-block bg-light sidebar">
    <div class="sidebar-sticky pt-5">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>管理員</span>
      </h6>
      <ul class="nav flex-column">
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
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/report">
            <span data-feather="report"></span>
            <font-awesome-icon icon="list-alt" />
            報表分析
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      current: {},
    };
  },
};
</script>

<style scoped lang="scss">
  .nav-link{
    font-size: 1rem;
    &.active{
      color: #9f8d79;
    }
    i{
      width: 20px;
    }
  }
</style>
