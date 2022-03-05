<template>
  <div class="page_show">
    <div class="page">
      <div class="center">
        <div class="center_logo">
          <a href="#"><img src="../../img/logo.png" alt="" /></a>
        </div>
        <div class="center_ts" @click="tsBtn">
          <img src="../../img/ts.png" alt="" />
        </div>
        <div class="center_xz">
          <div class="center_xz_top">
            <img src="../../img/pc_xz.png" alt="" />
          </div>
          <div class="center_xz_bottom">
            <img src="../../img/xz_1.png" alt="" />
            <img src="../../img/xz.png" alt="" class="img_show" />
          </div>
          <div class="center_bf" @click="spBtn">
            <img src="../../img/bf.png" alt="" />
          </div>
        </div>
        <div class="center_gw">
          <img src="../../img/gw_1.png" alt="" />
          <img src="../../img/gw.png" alt="" class="img_show" />
        </div>
        <div class="center_dh">
          <transition name="icon_img_dh">
          <img src="../../img/xl.png" alt="" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filrs",
  methods: {
    tsBtn() {
      this.$emit("isLoding", true);
    },
    spBtn() {
      this.$bus.$emit(
        "SpSrc",
        "https://webstatic.mihoyo.com/upload/static-resource/2022/02/04/332e64808dad91fb73a35adfa07cbf44_4349619459033207841.mp4"
      );
      this.$emit("spLoding", true);
    },
  },
};
</script>

<style>
.page_show {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 25rem 10.8rem;
  background-image: url("../../img/bj.jpg");
  background-repeat: no-repeat;
  overflow-x: hidden;
  overflow-y: hidden;
}
.page_show .center {
  width: 100%;
  height: 100%;
}
.page_show .center img {
  width: 100%;
}
.page_show .center .center_logo {
  width: 1.68rem;
  height: 1.33rem;
  position: absolute;
  top: 0.363rem;
  left: 0.426rem;
}
.page_show .center .center_ts {
  width: 1rem;
  height: 1.3rem;
  position: absolute;
  top: 9.076rem;
  left: 0.497rem;
  cursor: pointer;
}
.page_show .center .center_gw {
  width: 1.42rem;
  height: 0.74rem;
  cursor: pointer;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
}
.page_show .center .center_gw img {
  position: absolute;
}
.page_show .center .center_xz {
  width: 2.56rem;
  height: 4.43rem;
  margin: auto;
  left: 1.43rem;
  position: relative;
}
.page_show .center .center_xz .center_xz_top {
  width: 0.54rem;
  height: 1.48rem;
  cursor: pointer;
  position: absolute;
  right: 0.48rem;
  top: 0.62rem;
}
.center_xz_bottom {
  position: absolute;
  width: 0.54rem;
  height: 2.08rem;
  cursor: pointer;
  right: 0.48rem;
  top: 2.04rem;
}
.center_xz_bottom img {
  position: absolute;
}
.center_bf {
  width: 0.9rem;
  height: 0.9rem;
  position: absolute;
  cursor: pointer;
  left: -1.35rem;
  top: 4.61rem;
}
.center_bf:hover {
  transform: scale(1.1, 1.1);
}
.center_dh{
  width: 0.47rem;
  height: 1.43rem;
  position: absolute;
  right: 10.604rem;
  top: 9.933rem;
  z-index: 10;
}
</style>