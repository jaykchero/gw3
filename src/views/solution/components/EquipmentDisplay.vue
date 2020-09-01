<template>
  <div>
    <culture
    :title1="adv1.title1"
    :info="adv1.info"
    :englist=adv1.englist
    :title2="adv1.title2"
    :info2="adv1.info2"
    :title3="adv1.title3"
    :info3="adv1.info3"
    :title4="adv1.title4"
    :info4="adv1.info4"
    :title5="adv1.title5"
    :info5="adv1.info5"
    :img="adv1.img">
     ></culture>

  </div>


</template>

<script>
  import culture from './advSB.vue'


  export default{

    components:{
      culture,
    },

    data() {
      return {
        adv1:{
          img:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/iphone.png',
          title1:'设备1展示',
          englist:'Equipment Display',

        },

      }

  }
}

</script>

<style>
</style>
