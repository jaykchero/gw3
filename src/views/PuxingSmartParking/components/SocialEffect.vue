<template>
    <div>
      <div class="i-all">
        <div class="i-header">
          <h2 class="h2 tl1">社会效益</h2>
          <h3 class="lh3 tl1">Socical Effect</h3>
        </div>
        <div>
          <ul class="clearfix">
            <li>
              <img class="tl1" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/tingche.jpg"   alt="">

              <p  class="tl1" style="margin-top: 20px">
                有效解决交通拥堵</p>
              <p  class="tl1">车辆车牌识别，助力公安系统、交警系统。</p>
              <p class="btn tl1 "><a style=" margin-left:140px; width: 300px ;margin-top: 50px" class="light-btn" href="">解决开放式停车难问题</a></p>
            </li>
            <li>
              <img class="tl1" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/yejing.jpg"  alt="">
              <p class="tl1" style="margin-top: 30px"> 改善百姓出行</p>
              <p class="btn btn-yellow tl1"><a  style=" margin-left:140px; width: 300px ;margin-top: 50px" class="light-btn" href="">提升城市管理水平</a></p>
            </li>
            <li>
              <img class="tl1" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/dashuj.jpg" alt="">
              <p class="tl1" style="margin-top: 20px">各路段停车数据汇总，如车位 置换率、车位有效利用率等</p>
              <p class="tl1 ">车主出行，诱导系统，方便快 捷</p>
              <p class="btn btn-red tl1"><a style=" margin-left:140px; width: 300px ;margin-top: 50px" class="light-btn" href="">实现大数据互通共享</a></p>
            </li>

          </ul>
        </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "SocialEffect",
      data () {
          return{
            fadeInElements:[],
            fadeInElements1:[],
          }
      },
      mounted() {


        this.fadeInElements = Array.from(document.getElementsByClassName('left1'))
        this.fadeInElements1 = Array.from(document.getElementsByClassName('right'))



        // 监听鼠标滚动事件
        document.addEventListener('scroll', this.handleScroll)
        // 监听鼠标滚动事件
        document.addEventListener('scroll', this.handleScroll1)


      },
      methods:{
        // 循环判断是否要触发过渡
        handleScroll (evt) {
          for (var i = 0; i < this.fadeInElements.length; i++) {
            var elem = this.fadeInElements[i]
            var cN=elem.className
            if (this.isElemVisible(elem)) {
              elem.className=cN+" "+"animated slideInUp"
              console.log(elem.className)
              this.fadeInElements.splice(i, 1) // 只让它运行一次
            }
          }
        },
        // 循环判断是否要触发过渡
        handleScroll1 (evt) {
          for (var i = 0; i < this.fadeInElements1.length; i++) {
            var elem = this.fadeInElements1[i]
            var cN=elem.className
            if (this.isElemVisible(elem)) {
              elem.className=cN+" "+"animated fadeInRight"
              console.log(elem.className)
              //this.fadeInElements1.splice(i, 1) // 只让它运行一次
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

  .btn{
    padding-bottom:-50px;
  }
  li img{
    padding-right: 70px;
    width: 380px;
    height: 250px;
  }
  .i-all{
    padding-left: 50px;
    padding-right: 50px;
  }

  .h2{
    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
  }


  .lh3{
    color: #555;
    text-align: left;
    font-size: 25px;
    line-height: 36px;
    font-family: "itcavantgardepro-bk";
    position: relative;
  }




  .clearfix:before, .clearfix:after {content: "";display: block;}
  .clearfix:after{clear:both;overflow: hidden;}
  .clearfix {*zoom: 1;}

  body {
    font-family: Arial;

  }

  ul {
    width: 1200px;

    margin: 50px auto;
  }

  ul li {
    font-family: 'Nunito', sans-serif;
    background: -webkit-linear-gradient(right, #ffffff, #29a5ff);
    background: linear-gradient(to left, #ffffff, #29a5ff);
    float: left;
    width: 350px;
    padding: 20px;
    list-style: none;
    height: 600px;
    border: 1px solid rgba(223,231,239, .7);
    color: rgb(32,40,48);
    text-shadow: 0 1px 1px rgb(255,255,255);
    font-size: 14px;
    transition: all .2s ease;

  }

  ul li:hover{
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 0 -1px 10px rgba(0,0,0,.5);
    -moz-box-shadow: 0 -1px 10px rgba(0,0,0,.5);
    box-shadow: 0 -1px 10px rgba(0,0,0,.5);
  }

  ul li h4 {
    height: 40px;
    margin-bottom: 15px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid rgba(223,231,239, .7);
  }

  ul li p {
    text-align: center;

  }

  ul li p.btn a {
    display: inline-block;
    padding: 10px 40px;
    margin-top: 15px;

    /*!*text-shadow: 0 1px 1px rgba(32,40,48,.8);*!*/
    /*!*text-decoration: none;*!*/
    /*color: rgb(255,255,255);*/
  color: #ffffff !important;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    transition: all .2s ease;
  }

  ul li p.btn a:hover {
    -webkit-box-shadow: 0 -1px 10px rgba(0,0,0,.5);
    -moz-box-shadow: 0 -1px 10px rgba(0,0,0,.5);
    box-shadow: 0 -1px 10px rgba(0,0,0,.5);
  }


  .light-btn {
    text-decoration: none;

    transform: translate(-50%, -50%);

    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;

    color: #fff;
    text-align: center;
    text-transform: uppercase;
    border-radius: 50px;
    z-index: 1;
  }

  .light-btn:hover::before,
  .light-btn:hover {
    animation: sun 8s infinite;
  }

  .light-btn::before {
    content: '';
    position: absolute;
    left: -5px;
    right: -5px;
    top: -5px;
    bottom: -5px;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 50px;
    filter: blur(10px);
    z-index: -1;
  }

  @keyframes sun {
    100%{
      background-position: -400% 0;
    }
  }


</style>
