<template>
  <div id="p-content">
   <test01 id="t1" class="test"></test01>
    <test02 id="t2" class="test1"></test02>
      <test03 id="t3" class="test1"></test03>
      <Bottom></Bottom>
  </div>
</template>

<script>
  import test01 from './components/test01.vue'
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
  .test{
   height: 655px;
    overflow: hidden;
  }
  .test1{
    height: 730px;
     overflow: hidden;
  }


</style>
