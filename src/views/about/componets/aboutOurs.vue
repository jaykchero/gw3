<template>
  <div class="test">
   <!-- <div class="header">
      <div class="header-left">
      <h1>企业介绍</h1>
      <p>Business introduction</p>
      </div>
    </div> -->
      <advAboutOurs  style=" width: 100% ;height: 600px; "
      :title1="adv1.title1"
      :englist="adv1.englist"
      :info="adv1.info"
      :title2="adv1.title2"
      :info2="adv1.info2"
      :title3="adv1.title3"
      :info3="adv1.info3"
      :englist2="adv1.englist2"
      :englist3="adv1.englist3"
      :img="adv1.img">
      </advAboutOurs>

  </div>



</template>
<script>
    import advAboutOurs from './advAboutOurs.vue'

    // import {TweenMax, Power2, TimelineLite,TweenLite} from "gsap";

    export default {
  components:{
    advAboutOurs,
  },

    data () {

    return{
      adv1:{
        title1:'公司简介',
        englist:'Company Profile',
        info:'普行智能停车是一家国内领先的将移动互联网科技和大数据技术应用于城市停车系统解决方案的供应商。公司拥有物联网，云计算，大数据分析，移动通讯平台等技术，有一支从业多年的核心团队,不断的研发，发展新的技术，目前路侧停车技术属于国内领先水平。',
        title2:'公司成立时间',
        englist2:'Company Establishment Time',
        info2:'普行智能停车（深圳）有限公司于2017年12月成立。',
        title3:'公司经营范围',
        englist3:'Business Scope Of The Company',
        info3:'物联网平台运营，物联网应用，智能停车系统于设备等，属于首批路测停车泊车位系统的探索着。公司本着科技改变生活的理念，希望能通过我们的努力，解决城市交通日益拥堵问题，创造更好的生活环境，提升百姓生活的幸福感。',
        img:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%B0%8F%E7%B1%B310u.jpg',
      },


    }

  },

};
</script>
<style scoped="scoped">
  body{
      padding-left: 20px;
      margin: 0;

  }

  .header h1{
   color: #477e9a;
  font-size: 36px;
   line-height: 46px;
   display: block;
   text-align: left;
  }
  .header p{
   color: #555;
   font-size: 30px;
   font-family: "itcavantgardepro-bk";
   position: relative;

  }
  .test{
    padding-left: 50px;
    padding-right: 50px;
  }


</style>
