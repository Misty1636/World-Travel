<template>
  <div class="backstage">
    <Navbar />
    <Alert />
    <div class="container pt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
import Alert from '../../components/AlertMessage';

export default {
  components: {
    Navbar,
    Alert,
  },
};
</script>
