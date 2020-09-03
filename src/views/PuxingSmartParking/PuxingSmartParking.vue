<template>
  <div id="p-content">

    <div class="h-b">

        <img v-lazy="hb" alt=""/>
    </div>
      <div class="p-content-item">
   <ParkingSystem id="t1" class="test2"></ParkingSystem>
        <div class="divider">
          <a-divider>
            <svg t="1597299904979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="990" width="32" height="32"><path d="M512 512m-442.7 0a442.7 442.7 0 1 0 885.4 0 442.7 442.7 0 1 0-885.4 0Z" fill="#F79646" p-id="991" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M512 512m-263 0a263 263 0 1 0 526 0 263 263 0 1 0-526 0Z" fill="#ffffff" p-id="992" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>

          </a-divider>
        </div>
    <SocialEffect id="t2" class="test1" style="padding-top: 60px"></SocialEffect>
        <div class="divider">
          <a-divider>
            <svg t="1597299904979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="990" width="32" height="32"><path d="M512 512m-442.7 0a442.7 442.7 0 1 0 885.4 0 442.7 442.7 0 1 0-885.4 0Z" fill="#F79646" p-id="991" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M512 512m-263 0a263 263 0 1 0 526 0 263 263 0 1 0-526 0Z" fill="#ffffff" p-id="992" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>
          </a-divider>
        </div>
      <EconomicBenefits id="t3" class="test1" style="padding-top: 60px"></EconomicBenefits>
       </div>
      <Bottom></Bottom>

  </div>
</template>

<script>
  import ParkingSystem from './components/ParkingSystem.vue'
  import SocialEffect from './components/SocialEffect.vue'
  import EconomicBenefits from './components/EconomicBenefits.vue'
  import Bottom from '../../components/Bottom.vue'
  //import $ from 'jquery'
  import {goAnchor,GetQueryString} from '../../assets/js/common.js';
  export default {
    components:{
      ParkingSystem,
      SocialEffect,
      EconomicBenefits,
      Bottom
    },

    data () {
      return {
        hb:'http://qexz4xnye.hn-bkt.clouddn.com/h-b2.jpg'
      }
    },

    mounted:function (){
       let maodian=this.GetQueryString('maodian');//进入页面，如果带有锚点参数，则跳转至锚点地方，参数值就是id名
         console.log("000"+maodian)
       console.info("*****",maodian)

       if(maodian){

           this.goAnchor('#'+maodian);

       }

     },

      methods:{
         goAnchor,
         GetQueryString,
       },

  }


</script>

<style scoped="scoped">

    .p-content-item {

        margin-top: -110px !important;
        background-color: #FFFFFF;
        margin: 0 auto;
        width: 1200px;
    }

  #p-content {
    width: 100%;
    height: 100%;
    background-color: #14679f;
    position: relative;
    text-align: center;
  }

  .h-b img {
    width: 100%;
    height: 100%;
  }
  .h-b{
    margin-bottom: 70px;
    width: 100%;
    height: 388px;
    overflow: hidden;
  }

  .test{
   height: 655px;
    overflow: hidden;
  }
  .test1{
    height: 730px;
     overflow: hidden;
  }
  .test2{
    padding-left: 50px;
     padding-right: 50px;
      padding-top: 100px;
      height: 2000px;

     overflow: hidden;
  }


</style>
