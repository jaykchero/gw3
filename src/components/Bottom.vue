
<template>
<div class="bottom-all ">

<div class="b-center ">
<div class="bottom-h af">
  <p class="b-title af">联系我们</p>
  <p class="b-englist  af">Contact Us</p>
</div>
<div class="bottom-c">
  <div class="c-left  af">
  <a href="#" class="c-logo"><img style="width: 120px;height: 60px" src="../assets/logo.png" alt=""></a>
  <span>普行智能停车（深圳）有限公司</span>
  </div>
  <div class="c-center af">
    <div >

      <img class="cc-img" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/1598768066%281%29.png" alt="">
      <img class="cc-img" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/xcx.png" alt="">
    </div>
  <p>地址：广东省深圳市宝安区西乡街道宝田一路嘉皇源科技园A栋三楼305室</p>
  <p>电话：0755-23286587</p>
  <p>手机：88888888888</p>
  </div>
  <div class="c-right af">
    <p>路线：88888888888</p>
    <p>邮编：518000</p>
    <p>E-mail：puxing@pxznkj.com</p>

  </div>
</div>

<div class="bottom-b af">
  <span class="center">©2017-2020普行智能停车<a href="#" target="_blank"> 闽ICP备8888888888号</a></span>
</div>
</div>
</div>

</template>

<script>

  export default {

    date () {
    return {
      left:[],
      officialAccount:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/1598768066%281%29.png',
      xcx:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/xcx.png'
    }

    },

    mounted() {
      this.left = Array.from(document.getElementsByClassName('af'))
      document.addEventListener('scroll', this.handleScroll4)
    },

    methods:{
     // animated fadeInUp

      handleScroll4 (evt) {
          for (var i = 0; i < this.left.length; i++) {
            var elem = this.left[i]
           //console.log(elem.className)
            var cN=elem.className
            if (this.isElemVisible(elem)) {

              elem.className=cN+" "+"animated fadeInUp"
              // console.log(elem.className)
              this.left.splice(i, 1) // 只让它运行一次
            }
          }
        },

        // 判断元素距离窗口的位置
           isElemVisible (el) {
             var rect = el.getBoundingClientRect()
             var elemTop = rect.top  // 200 = buffer
             var elemBottom = rect.bottom
             return elemTop < window.innerHeight && elemBottom >= 0
           }
    }

  }

</script>

<style>
  body{
    text-align: center;
  }

  .cc-img {
   margin-bottom: 20px;
    width: 130px;
    height: 130px;
    margin-left: 30px;
  }

  .bottom-all{
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    width: 100%;
    height: 350px;
    background-color: #323943;
  }
  .b-center{
    width: 1200px;
    margin: 0 auto;

  }
  .b-title{
        color: #f3f3f3;
        margin-top: 65px;
        font-size: 24px;
        font-weight: bolder;
        float: left;

  }
  .b-englist{
   color: #c2c2c2;
   font-size: 14px;
   font-weight: normal;
   float: left;
   margin-left: 10px;
   margin-top: 80px;
  }

  .c-left{
    margin-top: 150px;
     margin-left: -173px;

    color: #f3f3f3;
    width: 140px;
    height: 65px;
    float: left;
  }
  .c-logo{
    display: block;
    width: 110px;
    height: 46px;
    color: #f3f3f3;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .c-center{
    color: #f3f3f3;
    position: absolute;
    top: 50px;
    left: 500px;

  }
  .c-right{
    color: #f3f3f3;
    position: absolute;
    top: 180px;
    left: 1150px;
  }

  .bottom-b{
   width: 1200px;
   height: 58px;
   /* background: #272e36; */
   position: absolute;
   bottom: 0px;
  }
  .bottom-b span{
    display: block;
    line-height: 58px;
    color: #959595;
  }
  .bottom-b a {
    color: #FFF !important;
  }


</style>
