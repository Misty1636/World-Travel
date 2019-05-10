<template>
  <div class="toTop-box text-center">
    <a href="#" class="toTop animated-opacity d-flex flex-column align-items-center" @click.prevent="scrollToTop">
      <font-awesome-icon icon="angle-up" class="chevron-up"/>
      <span>Top</span>
    </a>
  </div>
</template> 


<script>
export default {
  name: "toTop",
   data() {
    return {};
  },
  methods: {
    scrollToTop() {
      $('html,body').animate({scrollTop:0},1000);
    },
  },
  mounted() {
    $(window).scroll(()=> {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        if( scrollPos>500) {
          $(".animated-opacity").addClass("opacity-In");
        } else {
          $(".animated-opacity").removeClass("opacity-In");
        }
    });
  }
};
</script>

<style lang="scss" scoped>
.toTop-box{
  line-height: 1;
  position: fixed;
  right: 1%;
  bottom: 2%;
}
.toTop{
  text-decoration: none;
  display: block;
  padding: 3px 9px ;
  color: #FFF;
  border-radius: 50%;
  transition: all .5s;
  box-shadow: 0 0 3px #ccc;
  background: rgba(#9f8d79,.6);
  &:hover{
    text-decoration: none;
    background: rgba(#9f8d79,.9);
  }
  span{
    font-size: 12px;
    transform: translateY(-4px);
  }
}
.chevron-up{
  font-size: 22px;
}
</style>