<template>
  <div class="show">
    <div class="loding" @click="lodingFun"></div>
    <div class="loding_sp">
        <div class="loding_margin">
          <video  controls autoplay muted id="video"></video>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "spding",
  data() {
    return {
      src:''
    }
  },
  beforeMount(){
    this.$bus.$on('SpSrc',(data) => {
      this.src = data
       let video = document.getElementById('video')
       video.src = this.src
    })
  },
  methods: {
    lodingFun() {
      this.$emit("spLoding", false);
      this.src = ''
      let video = document.getElementById('video')
      video.src = this.src
    },
  },
};
</script>
<style scoped>
.show {
  min-width: 14.4rem;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
}
.loding {
  min-width: 14.4rem;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.show video {
  width: 100%;
}
.loding_sp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.loding_margin {
  width: 8.69rem;
  height: 5.04rem;
  position: absolute;
}
.center {
  width: 100%;
  height: 100%;
}
.center_x {
  width: 0.57rem;
  height: 0.57rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -0.58rem;
}
.center_x img {
  position: absolute;
}
</style>