<template>
  <div class="wrap">
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Footer from "../components/Footer";

export default {
  name: "layout",
  components:{
    Footer
  },
};
</script>
