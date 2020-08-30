<template>
  <div id="p-content">

    <div class="h-b">
       
        <img v-lazy="hb" alt=""/>
    </div>
      <div class="p-content-item">
   <test01 id="t1" class="test2"></test01>
    <test02 id="t2" class="test1"></test02>
      <test03 id="t3" class="test1"></test03>
       </div>
      <Bottom></Bottom>

  </div>
</template>

<script>
  import test01 from './components/ParkingSystem.vue'
  import test02 from './components/test02.vue'
  import test03 from './components/test03.vue'
  import Bottom from '../../components/Bottom.vue'
  import $ from 'jquery'
  import {goAnchor,GetQueryString} from '../../assets/js/common.js';
  export default {
    components:{
      test01,
      test02,
      test03,
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
    width: 1519px;
     height: 388px;
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
      height: 1400px;
     overflow: hidden;
  }


</style>
