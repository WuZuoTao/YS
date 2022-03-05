<template>
  <div class="page_four">
    <div class="center">
      <div class="kk">
        <div class="spnr_video">
          <video
            autoplay
            muted
            id="four_video"
            src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/02/11/e58ed0008e777b87e45bc75235790c58_6706036807749258212.mp4"
          ></video>
        </div>
        <div class="left" @click="leftFun(0)">
          <img src="../../img/js_1_1.png" alt=""/>
          <img src="../../img/js_1.png" alt="" class="img_show btn_img"/>
        </div>
        <div class="right" @click="rightFun(1)">
          <img src="../../img/js_2_1.png" alt=""/>
          <img src="../../img/js_2.png" alt="" class="btn_img" />
        </div>
        <div class="bottom bottom_wz">
          <img src="../../img/bj_2_wz.png" alt="" class="wz_img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "four",
  methods:{
    leftFun(num){
     let btn_img = document.getElementsByClassName('btn_img')
     let video = document.getElementById('four_video')
     let wz_img = document.getElementsByClassName('wz_img')[0]
     let bottom = document.getElementsByClassName('bottom')[0]
     for(let i = 0 ; i < btn_img.length ; i++){
       if(i != num){
        btn_img[i].setAttribute('class','img_show btn_img')
       }else{
         btn_img[i].setAttribute('class','btn_img')
         bottom.setAttribute('class','bottom bottom_wz_left')
       }
     }
      console.log(wz_img)
     video.src = 'https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/02/11/83b5811c39608a45ed49007502ede2c4_9097447521502060864.mp4'
     wz_img.src = 'data:image/png;base64,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'
    },
    rightFun(num){
     let btn_img = document.getElementsByClassName('btn_img')
     let video = document.getElementById('four_video')
     let wz_img = document.getElementsByClassName('wz_img')[0]
     let bottom = document.getElementsByClassName('bottom')[0]
     for(let i = 0 ; i < btn_img.length ; i++){
       if(i != num){
        btn_img[i].setAttribute('class','img_show btn_img')
       }else{
         btn_img[i].setAttribute('class','btn_img')
          bottom.setAttribute('class','bottom bottom_wz')
       }
     }
      video.src = 'https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/02/11/e58ed0008e777b87e45bc75235790c58_6706036807749258212.mp4'
      wz_img.src = 'http://localhost:8080/img/bj_2_wz.6f96c1a3.png'
    },
  }
};
</script>

<style scoped>
.page_four {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 25rem 10.8rem;
  background-image: url("../../img/bj_2.jpg");
  background-repeat: no-repeat;
}
.center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.kk {
  width: 12.59rem;
  height: 7.08rem;
  position: relative;
}
.spnr_video {
  position: absolute;
  width: 7.08rem;
  height: 7.08rem;
  border-radius: 50%;
  left: 2.78rem;
  top: -0.3rem;
  overflow: hidden;
}
video {
  width: 12.59rem;
  height: 7.08rem;
}
.left{
    width: 1.42rem;
    height: 1.42rem;
    position: absolute;
    left: 0.7rem;
    top: 2.6rem;
}
.right{
    width: 1.42rem;
    height: 1.42rem;
    position: absolute;
    right: 0.7rem;
   top: 2.6rem;
}
.bottom_wz{
  width: 4.96rem;
  height: 0.6rem;
  position: absolute;
  bottom: -0.8rem;
  left: 3.67rem;
}
.bottom_wz_left{
  width: 1.2rem;
  height: 0.6rem;
  position: absolute;
  bottom: -0.8rem;
  left: 5.57rem;
}
.bottom_wz img{
  width: 100%;
}
</style>