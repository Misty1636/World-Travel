<template>
  <div class="wrap">
    <router-view />
    <Footer />
    <ToTop />
  </div>
</template>


<script>
import Footer from "../components/Footer";
import ToTop from "../components/toTop";

export default {
  name: "layout",
  components:{
    Footer,
    ToTop
  },
};
</script>
