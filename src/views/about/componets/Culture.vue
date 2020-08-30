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
  import culture from './adv.vue'
 

  export default{

    components:{
      culture,
    },

    data() {
      return {
        adv1:{
          img:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%B0%8F%E7%B1%B310u.jpg',
          title1:'普行文化',
          englist:'Corporate Culture',
          title2:'务实：立足之本',
          info2:'以人为本，以客为先，实实在在，脚踏实地。在市场竞争中寻求企业发展与项目开发的适宜之路，以产品和服务创造价值，提升公司的市场竞争力。',
          title3:'创新：发展之源',
          info3:'社会发展，日新月异，勇立潮头，敢为人先。创新是企业的灵魂，唯有创新，才能保持企业旺盛的生命力，在创新与研发中，始终保持自己的领先地位',
          title4:'规范：经营之道',
          info4:'规范管理，诚信经营，循法尚德，回馈社会。建立健全的公司治理结构、运行机制与业务流程，秉持专业的精神和敬业的作风，认真履行一个企业公民的社会责任，赢得市场的肯定。',
          title5:'卓越：追求之境',
          info5:'志向远大，目标明确，追求卓越，永无止境。超越自我是保利孜孜以求的目标，更是公司赢得竞争优势的精神动力。'
        },

      }

  }
}

</script>

<style>
</style>
