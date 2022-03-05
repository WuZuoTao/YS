<template>
  <div class="center">
    <slot name="dyy"></slot>
    <slot name="gn"></slot>
    <slot name="jhh"></slot>
    <div class="tx_img_1 tx_img" >
      <img src="../../../img/mv_1_1_n.png" alt="" />
      <img src="../../../img/mv_1_1.png" alt=""  @click="imgBtnFun(0)" class="btnImg"/>
    </div>
    <div class="tx_img_2 tx_img">
      <img src="../../../img/mv_2_1_n.png" alt="" />
      <img src="../../../img/mv_2_1.png" alt="" @click="imgBtnFun(1)" class="img_show btnImg" />
    </div>
    <div class="tx_img_3 tx_img">
      <img src="../../../img/mv_3_1_n.png" alt="" />
      <img src="../../../img/mv_3_1.png" alt="" @click="imgBtnFun(2)" class="img_show btnImg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "threecc",
  methods: {
    imgBtnFun(num){
      let img = document.getElementsByClassName('btnImg')
      for(let i = 0 ; i < img.length  ; i++){
        if(i != num){
         img[i].setAttribute('class','btnImg img_show')
        }else{
          img[i].setAttribute('class','btnImg')
        }
      }
      this.$emit('imgBtnFun',num)
    }
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.center {
  width: 14.45rem;
  height: 10.8rem;
  position: relative;
}
.center_img {
  width: 14.45rem;
  height: 10.51rem;
  position: absolute;
  top: 0.13rem;
}
.center_img_3 {
  width: 14.45rem;
  height: 10.51rem;
  position: absolute;
  top: -0.05rem;
  left: -0.15rem;
}
.center_wz_top {
  position: absolute;
  width: 0.54rem;
  height: 2.32rem;
  left: 1.956rem;
  top: 2.93rem;
}
.center_wz_boomt {
  position: absolute;
  width: 0.54rem;
  height: 2.32rem;
  left: 1.956rem;
  top: 5.39rem;
}
.center_sp_img {
  width: 3.36rem;
  height: 1.96rem;
  left: 9.76rem;
  top: 4.72rem;
  cursor: pointer;
  position: absolute;
}
.center_sp_bf_img {
  width: 0.9rem;
  height: 0.9rem;
  cursor: pointer;
  left: calc(50% - 0.45rem);
  top: calc(50% - 0.45rem);
  position: absolute;
}
.center_sp_bf_img:hover {
  transform: scale(1.1, 1.1);
}
.tx_img_1 {
  left: 9.7rem;
}
.tx_img_2 {
  left: 11rem;
}
.tx_img_3 {
  left: 12.3rem;
}
.tx_img {
  width: 1.06rem;
  height: 1.06rem;
  cursor: pointer;
  position: absolute;
  top: 6.94rem;
}
.isshow {
  display: none;
}
</style>