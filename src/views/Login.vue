<template>
  <div>
    <Alert />

    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="../assets/002.gif">
      </template>
    </loading>

    <div class="login-bg">
      <div class="login-mark d-flex justify-content-center align-items-center">
        <div class="login-box p-4">
          <h1 class="title mb-5"><strong>會員登入</strong></h1>
          <form @submit.prevent="signin">
            <div class="form-group">
              <label for="Email">帳號</label>
              <input type="email" class="form-control" id="Email" placeholder="Email" v-model="user.username" required>
            </div>
            <div class="form-group">
              <label for="Password">密碼</label>
              <input type="password" class="form-control" id="Password" placeholder="Password" v-model="user.password" required>
            </div>
            <div class="custom-control custom-checkbox mb-4">
              <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="checkbox">
              <label class="custom-control-label" for="customCheck1">記住我</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">登入</button>
          </form>
          <div class="login-other text-center mb-3">
            <small>或用其他方法</small>
          </div>
          <div class="login-icon d-flex justify-content-around">
            <div>
              <a href="#/Login" title="Facebook">
                <img src="../assets/icon/facebook.png">
              </a>
            </div>
            <div>
              <a href="#/Login" title="Google">
                <img src="../assets/icon/google-plus.png">
              </a>
            </div>
            <div>
              <a href="#/Login" title="Line">
                <img src="../assets/icon/line.png">
              </a>
            </div>
            <div>
              <a href="#/Login" title="Instagram">
                <img src="../assets/icon/instagram.png">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Alert from '../components/AlertMessage';

export default {
  name: 'Login',
  props: {
    msg: String,
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      checkbox: false,
    };
  },
  methods: {
    signin() {
      const vm = this;
      this.$store.dispatch('BackstageModule/signin', vm.user).then(() => {
        vm.user.username = '';
        vm.user.password = '';
        vm.checkbox = false;
      });
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  components: {
    Alert,
  },
};
</script>
