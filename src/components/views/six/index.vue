<template>
  <div class="page_six">
    <div class="center">
      <div class="lbt">
        <div class="lbt_1 lbt_class">
          <img src="../../img/lbt_1.png" alt="" />
        </div>
        <div class="lbt_2 lbt_class">
          <img src="../../img/lbt_2.png" alt="" />
        </div>
        <div class="lbt_3 lbt_class">
          <img src="../../img/lbt_3.png" alt="" />
        </div>
        <div class="lbt_4 lbt_class">
          <img src="../../img/lbt_4.png" alt="" />
        </div>
        <div class="lbt_5 lbt_class">
          <img src="../../img/lbt_5.png" alt="" />
        </div>
        <div class="lbt_6 lbt_class">
          <img src="../../img/lbt_6.png" alt="" />
        </div>
      </div>
      <div class="dht">
        <div class="dht_btn" @click="dhtBtnFun(0)">
          <img src="../../img/bj_5_xb_1.png" alt="" />
          <img src="../../img/bj_5_xb_2.png" alt="" class="imgBtn" />
        </div>
        <div class="dht_btn" @click="dhtBtnFun(1)">
          <img src="../../img/bj_5_xb_1.png" alt="" />
          <img src="../../img/bj_5_xb_2.png" alt="" class="img_show imgBtn" />
        </div>
        <div class="dht_btn" @click="dhtBtnFun(2)">
          <img src="../../img/bj_5_xb_1.png" alt="" />
          <img src="../../img/bj_5_xb_2.png" alt="" class="img_show imgBtn" />
        </div>
        <div class="dht_btn" @click="dhtBtnFun(3)">
          <img src="../../img/bj_5_xb_1.png" alt="" />
          <img src="../../img/bj_5_xb_2.png" alt="" class="img_show imgBtn" />
        </div>
        <div class="dht_btn" @click="dhtBtnFun(4)">
          <img src="../../img/bj_5_xb_1.png" alt="" />
          <img src="../../img/bj_5_xb_2.png" alt="" class="img_show imgBtn" />
        </div>
        <div class="dht_btn" @click="dhtBtnFun(5)">
          <img src="../../img/bj_5_xb_1.png" alt="" />
          <img src="../../img/bj_5_xb_2.png" alt="" class="img_show imgBtn" />
        </div>
      </div>
      <div class="left" @click="lbtBtnFun(-1)">
        <img src="../../img/left_1.png" alt="" />
        <img src="../../img/left_2.png" alt="" class="img_show" />
      </div>
      <div class="right" @click="lbtBtnFun(1)">
        <img src="../../img/right_1.png" alt="" />
        <img src="../../img/right_2.png" alt="" class="img_show" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "six",
  data() {
    return {
      num: 0,
      lbt: document.getElementsByClassName("lbt_class"),
      imgBtn: document.getElementsByClassName("imgBtn"),
      time: "",
    };
  },
  mounted() {
      this.timeFun()
  },
  methods: {
    lbtBtnFun(data, Number) {
      if (Number || Number == 0) {
        this.num = Number;
      }
      if (data == -1) {
        this.num = this.num - 1 < 0 ? this.lbt.length - 1 : this.num - 1;
      } else if (data == 1) {
        this.num = this.num + 1 > this.lbt.length - 1 ? 0 : this.num + 1;
      }
      let left = this.num - 1 < 0 ? this.lbt.length - 1 : this.num - 1;
      let right = this.num + 1 > this.lbt.length - 1 ? 0 : this.num + 1;
      for (let i = 0; i < this.lbt.length; i++) {
        if (i == this.num) {
          this.lbt[i].style = " transform:translateX(0) scale(1);";
          this.lbt[i].style.zIndex = "2";
        } else if (i == left) {
          this.lbt[i].style = " transform:translateX(-3rem) scale(0.7);";
          this.lbt[i].style.zIndex = "1";
        } else if (i == right) {
          this.lbt[i].style = " transform:translateX(3rem) scale(0.7);";
          this.lbt[i].style.zIndex = "1";
        } else {
          this.lbt[i].style = " transform:translateX(0) scale(0.7);";
          this.lbt[i].style.zIndex = "1";
        }
      }
      this.dhtFun(this.num);
    },
    dhtBtnFun(Number) {
      for (let i = 0; i < this.imgBtn.length; i++) {
        if (Number != i) {
          this.imgBtn[i].setAttribute("class", "img_show imgBtn");
        } else {
          this.imgBtn[i].setAttribute("class", " imgBtn");
        }
      }
      this.lbtBtnFun(undefined, Number);
    },
    dhtFun(Number) {
      for (let i = 0; i < this.imgBtn.length; i++) {
        if (Number != i) {
          this.imgBtn[i].setAttribute("class", "img_show imgBtn");
        } else {
          this.imgBtn[i].setAttribute("class", " imgBtn");
        }
      }
    },
    timeFun() {
      clearInterval(this.time);
      this.time = setInterval(() => {
        this.lbtBtnFun(1);
        this.dhtFun(this.num);
      }, 4000);
    },
  },
  watch: {
      num() {
        this.timeFun();
      },
    },
};
</script>

<style scoped>
.page_six {
  width: 100%;
  height: 10.8rem;
  background-position: center;
  background-size: 25rem 10.8rem;
  background-image: url("../../img/bj_5.jpg");
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
.center {
  position: relative;
  top: -0.8rem;
  width: 100%;
  height: 5.543rem;
}
.lbt {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}
.lbt_1 {
  width: 9.69rem;
  height: 5.46rem;
  position: absolute;
  left: calc(50% - 4.4845rem);
  transform: translateX(0) scale(1);
  transition-duration: 300ms;
  z-index: 2;
}
.lbt_2 {
  width: 9.69rem;
  height: 5.46rem;
  position: absolute;
  left: calc(50% - 4.4845rem);
  transform: translateX(3em) scale(0.7);
  transition-duration: 300ms;
  z-index: 1;
}
.lbt_3 {
  width: 9.69rem;
  height: 5.46rem;
  position: absolute;
  left: calc(50% - 4.4845rem);
  transition-duration: 300ms;
  transform: scale(0.7);
  z-index: 1;
}
.lbt_4 {
  width: 9.69rem;
  height: 5.46rem;
  position: absolute;
  left: calc(50% - 4.4845rem);
  transition-duration: 300ms;
  transform: scale(0.7);
  z-index: 1;
}
.lbt_5 {
  width: 9.69rem;
  height: 5.46rem;
  position: absolute;
  left: calc(50% - 4.4845rem);
  transition-duration: 300ms;
  transform: scale(0.7);
  z-index: 1;
}
.lbt_6 {
  width: 9.69rem;
  height: 5.46rem;
  position: absolute;
  left: calc(50% - 4.4845rem);
  transition-duration: 300ms;
  transform: translateX(-3em) scale(0.7);
  z-index: 1;
}
.dht {
  width: 80%;
  height: 0.19rem;
  position: absolute;
  bottom: -0.4rem;
  display: flex;
  justify-content: center;
}
.dht_btn {
  width: 0.19rem;
  height: 0.19rem;
  position: relative;
  margin-left: 0.08rem;
  left: calc(15%);
}
.left {
  width: 0.48rem;
  height: 0.65rem;
  cursor: pointer;
  position: absolute;
  top: 2.4rem;
  left: calc(50% - 5.5rem);
  z-index: 99;
}
.left:hover {
  transform: scale(0.9, 0.9);
}
.right:hover {
  transform: scale(0.9, 0.9);
}
.right {
  width: 0.48rem;
  height: 0.65rem;
  cursor: pointer;
  position: absolute;
  top: 2.4rem;
  left: calc(50% - -6.1rem);
  z-index: 99;
}
img {
  width: 100%;
}
</style>