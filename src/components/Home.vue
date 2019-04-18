<template>
  <div>
    <div class="index-banner-box">
      <div class="index-video-box ">
        <div class="index-video">
          <div id="bgndVideo" class="player" data-property="{videoURL:'Pc9ZAM7tEPo',containment:'.index-video',autoPlay:true, mute:true, startAt:0, opacity:1,showControls:false}">
          </div>
        </div>
        <!-- <div class="index-video-bg" style="background-image: url('img/');">
        </div> -->
        <div class="index-video-mask" style="opacity: 0.0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted(){
    $("#bgndVideo").YTPlayer(); 
  },
};
</script>

<style lang="scss">
.index-video-box {
   width: 100%;
   display: block;
   position: relative;
   height: 100vh;
}

.index-video {
    width: 100%;
    height: 100%;
    position: relative; 
    z-index: 5;
    display: block;
}

.index-video-bg {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .index-video-mask {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.4;
    z-index: 5;
}
</style>
