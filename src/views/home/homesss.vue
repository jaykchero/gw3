<template>
  <div id="home">

    <div class="home3">
      <swiperIndex></swiperIndex>
    </div>

    <div class="home" style="#f9f9f8">
      <my-adv :title1="adv1.title1" :info="adv1.info" :title2="adv1.title2" :list="adv1.list" :img="adv1.img"></my-adv>
    </div>

    <div class="home" >
          <my-adv
           is-to-left=true
          :title1=" adv2.title1" :info="adv2.info" :title2="adv2.title2"
      :list="adv2.list" :img="adv2.img">
      </my-adv>
    </div>
    <div class="home1" style="#f9f9f8">

       <pro></pro>
    </div>
      <div class="home2">
          <Bottom></Bottom>
      </div>


  </div>
</template>

<script>

  //组件导入
  import myAdv from './componets/adv.vue'
  import swiperIndex from './componets/swiperIndex.vue'
  import pro from './componets/projected.vue'
  import Bottom from '../../components/Bottom.vue'

  export default {
    //name: 'carrousel',
    components: {
      myAdv,
      swiperIndex,
      pro,
      Bottom

    },

    data() {
      return {
        adv1: {
          title1: '关注微信公众号小程序',
          info: '小程序，公众号无需安装卸载方便快捷，满足不同客户的不同需求。',
          title2: '优势特点',
          img: 'https://ali.xmssdn.micloud.mi.com/2/1566455553514/get_thumbnail?sig=ok9MQoy1v4TLjJhbOdfsz-rrBjE&data=Rz0-PQjYmqWQh9NaqM3Gc-msswSpkZzh5GiB2iRPBnG8vQYptoXqYO2HA7alBHuIE2gpTjlC6syuKrWo4NWRxuHBspYx_3-JWD6V1--1r9PY7Kp_ALFRW1SBBj1k3bSVmXWh5T8gRMrqX0hZ7mNmol1ls-ewFYvfmfY_3oT9oT3xDcgiC6x7mDvqCwd_IGw7qeXHVU-WEbKZsTmnrPWdlx9yZtcFD-RHVJFK9y9kphYOAt1qNEuHQG8Y1rp-TBCHa0DdCOdM40Ye4PO9Ssc5jSomRtORwLs-xnlEKpegob2OCIFYpg9rzkxIMlDxk2yCoWG7sfpCFw&ts=1597053344303&w=1080&h=1080&r=0&_cachekey=374991285ce5d2e76cc19957d773f753',
          list: ['1111', '22222', '33333', '4444444444', '55555555', '6666666666666']

        },

        adv2: {
          title1: '关注微信公众号小程序',
          info: '小程序，公众号无需安装卸载方便快捷，满足不同客户的不同需求。',
          title2: '优势特点',
          img: 'https://ali.xmssdn.micloud.mi.com/2/1566455553514/get_thumbnail?sig=hhkvKp1z55plOo8ycTnF0cEoZnU&data=Rz0-QcDdmp7TigDYeIQKrnFxrMCvNjm4_JRsYt9i3_Kn7lQptnD-JRVbeD1hDt8CXlYIL7dC6syuKrWoJCcjKrAWEhNF2xWGUTNY0QBRc1vY7AhrzPc8zc6gryP9vC3qT3-huzE6RMrPJnVZqgVGqQlIt-ewFfcXnPYEnYkuI-24wRW61rO_npxPUh-DzdTAhDxEThzEEbJspXxfcI4WUxXW7Jo7LoXJVJFK9y-EIg02eMm3u2Xz8m2FP4jNTBCHa0DdCOdM40Yevv2nSsf9f5jKFwQxRc8arHZNJ1qmTllSgIFb5aBrzkxIMlDxk2yCoWG7sfpCFw&ts=1597053490843&w=1080&h=1080&r=0&_cachekey=dae5a6728c1fc8962d6fd21e683810bb',
          list: ['1111', '22222', '33333', '4444444444', '55555555', '6666666666666']

        },

      }
    },


  }
</script>
<style scoped="scoped">
  .home {
    height: 655px;
    overflow: hidden;
  }
  .home1 {
    padding-top: 80px;
    height: 700px;
  }
  .home2 {

    height:350px;
  }
  .home3{
    height: 700px;
    overflow: hidden;
  }
</style>
