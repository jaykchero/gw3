<template>
  <div>
    <culture
    is-to-left=true
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
          img:'https://ali.xmssdn.micloud.mi.com/2/1566455553514/get_thumbnail?sig=ct1dVtOF6fHi9XtkWFk9dz0DVcc&data=Rz0-jhUfROR0AsDq_4lmAXYKJA2mfPX6wOloL1C3ASRLs4sptgQetq5cVEw4b7xXSjr1R4VC6syuKrWoNFAnfzROViREprgH9iQCShdIigzY7JQJU5-kUU8XoIXWvMifPvihu2svRMrpJUhBiy8L5Ux6o-ewFTjCXih-OgHuEWq1rbq9rTtyl9aDECP-yZlPUeKSokEbEbIYRe_kd6JnCnS1uY5X0-37VJFK9y8GdSN3RmCsGSpP7Xh8VbaCTBCHa0DdCOdM40YevqeySsftCJyfk1x1cs5nAffqMAA9WUCr14FZUyBrzkxIMlDxk2yCoWG7sfpCFw&ts=1597053626770&w=1080&h=1080&r=0&_cachekey=c34cc015eaf3d7801ccca51868693aed',
          title1:'设备2展示',
          englist:'Equipment Display',

        },

      }

  }
}

</script>

<style>
</style>
