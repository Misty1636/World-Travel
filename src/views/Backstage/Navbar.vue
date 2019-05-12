<template>
  <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
      <img src="../../assets/worldtravel-logo2.png" style="height:25px;">
      <img src="../../assets/worldtravel-logo.png" style="height:30px;transform: translateX(-8px);" alt="World Travel">
    </a>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#" @click.prevent="logout">登出</a>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: 'Narbar',
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      const vm = this;

      this.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/signin');
        }
      });
    },
  },
};
</script>

