<template>
  <div class="page_five">
    <div class="center">
      <div class="center_nr">
        <div class="nr_1 " @click="nrBtn(0)">
          <img src="../../img/bj_4_nr_1_1.png" alt="" />
          <img src="../../img/bj_4_nr_1.png" alt=""  class="nr_img"/>
        </div>
        <div class="nr_1_wz nrisShow"></div>
        <div class="nr_2 " @click="nrBtn(1)">
          <img src="../../img/bj_4_nr_2_1.png" alt="" />
          <img src="../../img/bj_4_nr_2.png" alt="" class="img_show nr_img" />
        </div>
        <div class="nr_2_wz nrisShow"></div>
        <div class="nr_3 " @click="nrBtn(2)">
          <img src="../../img/bj_4_nr_3_1.png" alt="" />
          <img src="../../img/bj_4_nr_3.png" alt="" class="img_show nr_img" />
        </div>
        <div class="nr_3_wz nrisShow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tow",
  data() {
      return {
          nrisShow:document.getElementsByClassName('nrisShow'),
          nrimg:document.getElementsByClassName('nr_img')
      }
  },
  methods:{
      nrBtn(num){
          for(let i = 0 ; i < this.nrisShow.length ; i++){
              if(i != num){
                  this.nrimg[i].setAttribute('class','img_show nr_img')
                  this.nrisShow[i].style.display = 'none'
              }else{
                  this.nrimg[i].setAttribute('class',' nr_img')
                  this.nrisShow[i].style.display = 'block'
              }
          }
      }
  }
};
</script>

<style scoped>
.page_five {
  width: 100%;
  height: 10.8rem;
  background-position: center;
  background-size: 25rem 10.8rem;
  background-image: url("../../img/bj_4.jpg");
  background-repeat: no-repeat;
}
img {
  width: 100%;
}

.center {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -0.3rem;
}
.center_nr {
  width: 12.549rem;
  height: 6.99rem;
  display: flex;
}
.nr_1 {
  width: 1.58rem;
  height: 6.99rem;
  cursor: pointer;
  position: relative;
}
.nr_1_wz{
    width: 6.6rem;
    height: 5.66rem;
    background-image: url('../../img/bj_4_nr_1_1.jpg');
    background-size: 100%;
    margin-top: 0.56rem;
}
.nr_2 {
  width: 1.58rem;
  height: 6.99rem;
  cursor: pointer;
  position: relative;
  margin-left: 0.1rem;
}
.nr_2_wz{
    width: 6.6rem;
    height: 5.66rem;
    background-image: url('../../img/bj_4_nr_2_1.jpg');
    background-size: 100%;
    margin-top: 0.56rem;
    display: none;
}
.nr_3 {
  width: 1.58rem;
  height: 6.99rem;
  cursor: pointer;
  position: relative;
  margin-left: 0.1rem;
}
.nr_3_wz{
    width: 6.6rem;
    height: 5.66rem;
    background-image: url('../../img/bj_4_nr_3_1.jpg');
    background-size: 100%;
    margin-top: 0.56rem;
    display: none;
}
</style>