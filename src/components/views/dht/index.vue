<template>
  <div class="dhl">
    <div class="dhl_1"></div>
    <div class="dhl_2 divS" @click="dhlFun(1)">
      <img src="../../img/sm_1_1.png" alt="" />
      <img src="../../img/sm_1.png" alt="" class="dhlBtn" />
    </div>
    <div class="dhl_3 divS" @click="dhlFun(2)">
      <img src="../../img/sm_2_1.png" alt="" />
      <img src="../../img/sm_2.png" alt="" class="img_show dhlBtn" />
    </div>
    <div class="dhl_4 divS" @click="dhlFun(3)">
      <img src="../../img/sm_3_1.png" alt="" />
      <img src="../../img/sm_3.png" alt="" class="img_show dhlBtn" />
    </div>
    <div class="dhl_5 divS" @click="dhlFun(4)">
      <img src="../../img/sm_4_1.png" alt="" />
      <img src="../../img/sm_4.png" alt="" class="img_show dhlBtn" />
    </div>
    <div class="dhl_6 divS" @click="dhlFun(5)">
      <img src="../../img/sm_5_1.png" alt="" />
      <img src="../../img/sm_5.png" alt="" class="img_show dhlBtn" />
    </div>
  </div>
</template>

<script>
export default {
  name: "dht",
  data() {
    return {
      idhlmg: document.getElementsByClassName("dhlBtn"),
    };
  },
  props: ["DhlNum"],
  mounted() {
    this.$bus.$on("dhlxh", (Num) => {
      for (let i = 0; i < this.idhlmg.length; i++) {
        if (i != Num - 1) {
          this.idhlmg[i].setAttribute("class", "img_show dhlBtn");
        } else {
          this.idhlmg[i].setAttribute("class", "dhlBtn");
        }
      }
    });
  },
  methods: {
    dhlFun(Num) {
      this.$emit("dhlFun", Num);
      for (let i = 0; i < this.idhlmg.length; i++) {
        if (i != Num - 1) {
          this.idhlmg[i].setAttribute("class", "img_show dhlBtn");
        } else {
          this.idhlmg[i].setAttribute("class", "dhlBtn");
        }
      }
    },
  },
};
</script>

<style>
.dhl {
  position: fixed;
  z-index: 996;
  width: 0.48rem;
  height: auto;
  left: 0.6rem;
  top: 0rem;
}
img {
  position: absolute;
  width: 100%;
}
.dhl_1 {
  margin: 0 auto;
  width: 1px;
  height: 1.31rem;
  background-color: rgba(255, 255, 255, 0.6);
}
.divS {
  width: 0.48rem;
  height: 1.42rem;
}
</style>