<template>
  <div class="show">
    <div class="loding" @click="lodingFun"></div>
    <div class="loding_ts">
      <div class="loding_margin">
        <div class="center">
          <img src="../../img/ts_img.jpg" alt="" />
        </div>
        <div class="center_x" @click="lodingFun">
          <img src="../../img/gb_img.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loding",
  methods: {
    lodingFun() {
      this.$emit("isLoding", false);
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
.show img {
  width: 100%;
}
.loding_ts {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.loding_margin {
  width: 8.54rem;
  height: 6.42rem;
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