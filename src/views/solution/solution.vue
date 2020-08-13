<template>
<div class="solution-all">
  <div class="h-b">
      <img src="http://qexz4xnye.hn-bkt.clouddn.com/h-b2.jpg" alt="">
  </div>

  <div class="solution-all-item">
  <div class="solution2"  id="PainsOfTrade">
     <PainsOfTrade  ></PainsOfTrade>
  </div>

  <div class="divider">
     <a-divider>
      <svg t="1597299904979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="990" width="32" height="32"><path d="M512 512m-442.7 0a442.7 442.7 0 1 0 885.4 0 442.7 442.7 0 1 0-885.4 0Z" fill="#F79646" p-id="991" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M512 512m-263 0a263 263 0 1 0 526 0 263 263 0 1 0-526 0Z" fill="#ffffff" p-id="992" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>
     </a-divider>
  </div>

  <div class="solution">
    <ProjectConstructionIdeas id="ProjectConstructionIdeas"  style="padding-top: 50px;"></ProjectConstructionIdeas>
  </div>

  <div class="divider">
     <a-divider>
      <svg t="1597299904979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="990" width="32" height="32"><path d="M512 512m-442.7 0a442.7 442.7 0 1 0 885.4 0 442.7 442.7 0 1 0-885.4 0Z" fill="#F79646" p-id="991" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M512 512m-263 0a263 263 0 1 0 526 0 263 263 0 1 0-526 0Z" fill="#ffffff" p-id="992" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>
     </a-divider>
  </div>

  <!-- <router-view></router-view> -->
  <div class="solution">
    <Comparisonschemes  id="Comparisonschemes"  style="padding-top: 100px;"></Comparisonschemes>
  </div>

  <div class="divider">
     <a-divider>
      <svg t="1597299904979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="990" width="32" height="32"><path d="M512 512m-442.7 0a442.7 442.7 0 1 0 885.4 0 442.7 442.7 0 1 0-885.4 0Z" fill="#F79646" p-id="991" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M512 512m-263 0a263 263 0 1 0 526 0 263 263 0 1 0-526 0Z" fill="#ffffff" p-id="992" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>
     </a-divider>
  </div>

  <div class="solution">
     <EquipmentDisplay  id="EquipmentDisplay"  style="padding-top: 100px;"></EquipmentDisplay>
  </div>

  <div class="solution">
    <EquipmentDisplay2  id="EquipmentDisplay2" ></EquipmentDisplay2>
  </div>

  </div>

  <Bottom></Bottom>
</div>
</template>

<script>
  import PainsOfTrade from './components/PainsOfTrade.vue'
  import ProjectConstructionIdeas from './components/ProjectConstructionIdeas.vue'
  import Comparisonschemes from './components/Comparisonschemes.vue'
  import EquipmentDisplay from './components/EquipmentDisplay.vue'
  import EquipmentDisplay2 from './components/EquipmentDisplay2.vue'
  import Bottom from '../../components/Bottom.vue'

  import $ from 'jquery'
  import {goAnchor,GetQueryString} from '../../assets/js/common.js';


  export default {

      components:{
        PainsOfTrade,
        ProjectConstructionIdeas,
        Comparisonschemes,
        EquipmentDisplay,
         EquipmentDisplay2,
         Bottom
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

    .solution-all-item{
        margin-top: -110px !important;
        background-color: #FFFFFF;
        margin: 0 auto;
        width: 1200px;
    }

    .solution-all{
      width: 100%;
      height: 100%;
      background-color: #14679f;
      position: relative;
      text-align: center;
    }


  .divider{
    margin: 0 auto;
    width: 1200px;

  }

  .solution{
    padding-bottom: 65px;
    height: 655px;
    overflow: hidden;
  }

    .solution2{
      padding-top: 50px;
      margin-top: 100px;
      height: 655px;
      overflow: hidden;
    }

  .h-b img {
    width: 1519px;
     height: 388px;
  }
  .h-b{
    margin-bottom: 70px;
    width: 100%;
    height: 388px;
    overflow: hidden;
  }

</style>
