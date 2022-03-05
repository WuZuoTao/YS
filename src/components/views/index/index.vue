<template>
  <div class="neirong" @wheel="onwheelFun">
    <div class="page">
      <spLoding v-show="spisshow" @spLoding="spLoding" />
      <loding v-show="isshow" @isLoding="isLoding" />
      <dht v-show="dhl" />
      <div class="page_conter" style="transform: translate3d(0, 0, 0)">
        <div class="Sotconter">
          <firs @isLoding="isLoding" @spLoding="spLoding" />
        </div>
        <div class="Sotconter">
          <two />
        </div>
        <div class="Sotconter">
          <three @spLoding="spLoding" />
        </div>
        <div class="Sotconter">
          <four />
        </div>
        <div class="Sotconter">
          <five />
        </div>
        <div class="Sotconter">
          <six />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firs from "../firs_1/index.vue";
import two from "../tow/index.vue";
import loding from "../loding/index.vue";
import spLoding from "../spding/index.vue";
import dht from "../dht/index.vue";
import three from "../three/index.vue";
import four from "../four/index.vue";
import five from "../five/index.vue";
import six from "../six/index.vue"
export default {
  name: "index",
  components: {
    firs,
    two,
    dht,
    three,
    four,
    five,
    six,
    loding,
    spLoding,
  },
  props: ["width"],
  data() {
    return {
      isshow: false,
      spisshow: false,
      dhl: false,
      spsrc: "",
      win: {
        win_width: "",
        win_height: "",
      },
      Time: "",
    };
  },
  beforeMount() {
    this.$bus.$on("soLoding", (data) => {
      this.spLoding(data);
    });
  },
  mounted() {
    this.win.win_width = document.documentElement.clientWidth;
    this.win.win_height = document.documentElement.clientHeight;
    this.Time = new Date();
    window.onresize = () => {
      return (() => {
        this.win.win_width = document.documentElement.clientWidth;
        this.win.win_height = document.documentElement.clientHeight;
      })();
    };
  },
  methods: {
    isLoding(data) {
      this.isshow = data;
    },
    spLoding(data) {
      this.spisshow = data;
    },
    fontSize() {
      let font_size = 100 * (document.documentElement.clientHeight / 1080);
      document.documentElement.style.fontSize = font_size + "px";
    },
    onwheelFun(Win) {
      let oldTime = new Date();
      if (oldTime - this.Time > 500) {
        let page_conter = document.getElementsByClassName("page_conter")[0];
        let html = document.documentElement;
        let Num = 10.8 * Number.parseFloat(html.style.fontSize);
        let transForm = page_conter.style.transform;
        let oldValue = transForm.split(",")[1];
        let transFormNum;
        oldValue = Number.parseFloat(oldValue);
        if (Win.wheelDelta > 0) {
          transFormNum = Math.round(oldValue + Num);
          if (transFormNum <= 0) {
            page_conter.style.transform = `translate3d(0,${transFormNum}px,0px)`;
            this.Time = new Date();
          }
        } else if (Win.wheelDelta < 0) {
          transFormNum = Math.round(oldValue + -Num);
          if (transFormNum >= -4885) {
            page_conter.style.transform = `translate3d(0,${transFormNum}px,0px)`;
            this.Time = new Date();
          }
        }
        if (transFormNum < 0) {
          this.dhl = true;
          return;
        } else {
          this.dhl = false;
        }
      }
    },
  },
  watch: {
    win: {
      deep: true,
      immediate: true,
      handler() {
        document.body.style.width = this.win.win_width + "px";
        document.body.style.height = this.win.win_height + "px";
        this.fontSize();
      },
    },
  },
};
</script>

<style>
.neirong {
  width: 100%;
  height: 10.8rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.page {
  width: 100%;
  height: 10.8rem;
  overflow: hidden;
}
.page .page_conter {
  min-width: 14.4rem;
  width: 100%;
  height: 100%;
  transition-duration: 400ms;
}
.Sotconter {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>