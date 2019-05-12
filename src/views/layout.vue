<template>
  <div class="wrap">
    <Nav />
    <router-view />
    <Footer />
    <ToTop />
  </div>
</template>


<script>
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ToTop from '../components/toTop';

export default {
  name: 'layout',
  components: {
    Nav,
    Footer,
    ToTop,
  },
};
</script>
