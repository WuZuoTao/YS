<template>
  <div class="page_three">
    <!-- 八重神子 -->
    <threecc v-if="dyy" class="template" @imgBtnFun="imgBtnFun">
      <template v-slot:dyy>
        <div class="center_neirong">
          <div class="center_img">
            <img src="../../img/mv_1.png" alt="" />
          </div>
          <div class="center_wz_top">
            <img src="../../img/mv_wz_1.png" alt="" />
            <img src="../../img/mv_wz_1_1.png" alt="" class="img_show" />
          </div>
          <div class="center_wz_boomt">
            <img src="../../img/mv_wz_2.png" alt="" />
            <img src="../../img/mv_wz_2_1.png" alt="" class="img_show" />
          </div>
          <div class="center_sp_img" @click="btnImg_1">
            <img src="../../img/mv_1_2.png" alt="" />
            <div class="center_sp_bf_img">
              <img src="../../img/bf.png" alt="" />
            </div>
          </div>
        </div>
      </template>
    </threecc>

    <!-- 龟娘 -->
    <threecc v-if="gn" class="template" @imgBtnFun="imgBtnFun">
      <template v-slot:gn>
        <div class="center_neirong">
          <div class="center_img">
            <img src="../../img/mv_2.png" alt="" />
          </div>
          <div class="center_wz_top">
            <img src="../../img/mv_wz2_2.png" alt="" />
            <img src="../../img/mv_wz2_2_1.png" alt="" class="img_show" />
          </div>
          <div class="center_wz_boomt">
            <img src="../../img/mv_wz2_2.png" alt="" />
            <img src="../../img/mv_wz2_2_1.png" alt="" class="img_show" />
          </div>
          <div class="center_sp_img" @click="btnImg_2">
            <img src="../../img/mv_2_2.png" alt="" />
            <div class="center_sp_bf_img">
              <img src="../../img/bf.png" alt="" />
            </div>
          </div>
        </div>
      </template>
    </threecc>

    <!-- 菊花花 -->
    <threecc v-if="jhh" class="template" @imgBtnFun="imgBtnFun">
      <template v-slot:jhh>
        <div class="center_neirong">
          <div class="center_img_3">
            <img src="../../img/mv_3.png" alt="" />
          </div>
          <div class="center_wz_top">
            <img src="../../img/mv_wz3_1.png" alt="" />
            <img src="../../img/mv_wz3_1_1.png" alt="" class="img_show" />
          </div>
          <div class="center_wz_boomt">
            <img src="../../img/mv_wz3_2.png" alt="" />
            <img src="../../img/mv_wz3_2_1.png" alt="" class="img_show" />
          </div>
          <div class="center_sp_img" @click="btnImg_3">
            <img src="../../img/mv_3_2.png" alt="" />
            <div class="center_sp_bf_img">
              <img src="../../img/bf.png" alt="" />
            </div>
          </div>
        </div>
      </template>
    </threecc>
  </div>
</template>

<script>
import threecc from "./components/index.vue";
export default {
  name: "three",
  components: { threecc },
  data() {
    return {
      dyy: true,
      gn: false,
      jhh: false,
    };
  },
  methods: {
    imgBtnFun(num) {
      console.log(num);
      switch (num) {
        case (num = 0):
          this.dyy = true;
          this.gn = false;
          this.jhh = false;
          return;
        case (num = 1):
          this.dyy = false;
          this.gn = true;
          this.jhh = false;
          return;
        case (num = 2):
          this.dyy = false;
          this.gn = false;
          this.jhh = true;
          return;
      }
    },
    btnImg_1() {
      this.$bus.$emit(
        "SpSrc",
        "https://webstatic.mihoyo.com/upload/static-resource/2022/02/15/36c3eda9e32a39a56c75bf9b51284c04_7759740696565879212.mp4"
      );
      this.$bus.$emit("soLoding", true);
    },
    btnImg_2() {
      this.$bus.$emit(
        "SpSrc",
        "https://webstatic.mihoyo.com/upload/static-resource/2021/09/19/6ad98a93af5a4caf2c8eddfd8bda51d7_3890877391063843086.mp4"
      );
      this.$bus.$emit("soLoding", true);
    },
    btnImg_3() {
      this.$bus.$emit(
        "SpSrc",
        "https://webstatic.mihoyo.com/upload/static-resource/2021/08/31/b124feae6bab5a3694d59e7c7315af84_1762984313232940807.mp4"
      );
      this.$bus.$emit("soLoding", true);
    },
  },
};
</script>

<style scoped>
.page_three {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 25rem 10.8rem;
  background-image: url("../../img/bj_5.jpg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}
.template {
  position: absolute;
}
</style>