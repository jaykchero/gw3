<template>

  <div class="i-all">
    <div class="i-header">
      <h2 class="h2 tl1">经济效益</h2>
      <h3 class="lh3 tl1">Economic Benefits</h3>
    </div>
    <div class="e-content">
      <div class="eb-left tl11">
        <img class="eb " v-lazy="eb" alt="">
      </div>
      <div class="eb-right ">
        <h2 class="h3 tl2">以左图为例：</h2>
          <p class="tl2">一天24小时此图为中午12：00左右</p>
        <p class="tl2">平均1个车已经收费接近20元</p>
        <p class="tl2">按照某三级市的收费标准：</p>
        <p class="tl2">一辆车一天收费封顶30元</p>
        <p class="tl2">每车位月收入至少为</p>
        <p class="tl2">30元*30元=900元</p>
        <p class="tl2">每个车位的年收入为：900*12=10800元</p>
        <h3 class="h3 tl2">一倍投资至少三倍回收</h3>
        <p class="tl2">按照一个车位一年平均投资3000元</p>

      </div>


    </div>

  </div>


</template>

<script>
  export default {
    name: "SocialEffect",
    data() {
      return {
        fadeInElements1:[],
        fadeInElements:[],
        eb: 'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/Economic.png',
      }

    },
    mounted() {


      this.fadeInElements = Array.from(document.getElementsByClassName('tl11'))
      this.fadeInElements1 = Array.from(document.getElementsByClassName('tl2'))



      // 监听鼠标滚动事件
      document.addEventListener('scroll', this.handleScroll)
      document.addEventListener('scroll', this.handleScroll1)


    },
    methods:{
      // 循环判断是否要触发过渡

      handleScroll1(evt){
        for (var i = 0; i < this.fadeInElements1.length; i++) {
          var elem = this.fadeInElements1[i]
          var cN=elem.className
          if (this.isElemVisible(elem)) {
            elem.className=cN+" "+"animated slideInUp"
            console.log(elem.className)
            //this.fadeInElements1.splice(i, 1) // 只让它运行一次
          }
        }

      },

      handleScroll (evt) {
        for (var i = 0; i < this.fadeInElements.length; i++) {
          var elem = this.fadeInElements[i]
          var cN=elem.className
          if (this.isElemVisible(elem)) {
            elem.className=cN+" "+"animated fadeInLeft"
            console.log(elem.className)
            this.fadeInElements.splice(i, 1) // 只让它运行一次
          }
        }
      },
      // 判断元素距离窗口的位置
      isElemVisible (el) {
        var rect = el.getBoundingClientRect()
        var elemTop = rect.top
        console.log("et"+elemTop)
        var elemBottom = rect.bottom
        console.log("eb"+elemBottom)
        return elemTop < window.innerHeight && elemBottom >= 0
      }
    },

  }
</script>

<style scoped>

  p{
    font-size:15px;
    line-height: 20px;
  }

  .h3{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    display: block;
    color: #F79646;
    letter-spacing: 0;
    font-size: 18px;
  }
  .eb-left {
    float: left;
    font-family: 'Nunito', sans-serif;
    background: linear-gradient(to left, #2475a6, #2475a6);
    padding: 10px;
    width: 750px;
    height: 520px;
    list-style: none;
    border: 1px solid rgba(223,231,239, .7);
    transition: all .2s ease;
  }

  .eb-right {
    padding-left: 15px;
    float: left;
  }

  .e-content {

    text-align: left;
  }

  .eb {
    width: 730px;
    height: 500px;
  }

  .i-all {
    padding-left: 50px;
    padding-right: 50px;
  }

  .h2 {
    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
  }


  .lh3 {
    color: #555;
    text-align: left;
    font-size: 25px;
    line-height: 36px;
    font-family: "itcavantgardepro-bk";
    position: relative;
  }




</style>
