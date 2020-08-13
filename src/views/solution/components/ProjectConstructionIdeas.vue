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
  import culture from './advpci.vue'

  export default{

    components:{
      culture,
    },

    data() {
      return {
        adv1:{
          img:'https://ali.xmssdn.micloud.mi.com/2/1566455553514/get_thumbnail?sig=pb1LkOuS3H_7qOYcqQz7VnvMFLY&data=Rz0-JBAZjmI_rjrtPj7HlcGrJoYrzbGhwjFWQDCVc3aF358ptlqFtSObZHiKdWd9EZ5P58hC6syuKrWoc0nZNYsvp7kIltI_fOw3L_ERCUXY7B_CyJM9pT53wdiErnwGiRGh1yw0RMrdO3dc7nlr6XZZ1uewFZLHWOL4ca0UFqsCDC4KDDn5GmfHSyEm9_Yvc5DAbC0PEbJG3uxpsJJTuG5uk9XzaU22VJFK9y9vnlq7kT2AR6TdBNBNqVSpTBCHa0DdCOdM40Ye0uCpSseqEWLVLD2E74JXa89g-DVYvxkonoFaItZrzkxLMlDxk2yCu3-5wkzmEcY&ts=1597054341309&w=1080&h=1080&r=0&_cachekey=6c6a9c0ed6e876ee3797550614229122',
          title1:'项目建设思路',
          englist:'Project construction ideas',
          title2:'建设智能停车系统',
          info2:'创新技术实现对全市停车资源整合；',
          title3:'提供垂直立体式服务',
          info3:'物联网+停车系统',
          title4:'助力城市创新管理及开拓新经济模式',
          info4:'新型科技手段，实时监控全市交通动态',
          title5:'卓越：追求之境',
          info5:'志向远大，目标明确，追求卓越，永无止境。超越自我是保利孜孜以求的目标，更是公司赢得竞争优势的精神动力。'
        },

      }

  }
}

</script>

<style>
</style>
