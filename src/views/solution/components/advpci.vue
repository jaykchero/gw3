<template>
<div class="ap-all">



  <div class="adv" :class="{toleft:isToLeft}">
    <div class="left2" >
      <h2 class="h2 tl1">{{title1}}</h2>
      <h3 class="lh3 tl1">{{englist}}</h3>
      <p class="p tl1">{{info}}</p>
      <h3 class="h3 tl1">{{title2}}</h3>
      <p class="p tl1">{{info2}}</p>
      <p class="p tl1">平台经济一体化，打造大数据信息中心；</p>

       <h3 class="h3 tl1">{{title3}}</h3>
        <p class="p tl1">{{info3}}</p>
        <p class="p tl1">客户应用端，系统监控平台、以及施工端、巡查端，全方面立体式服务于运营管理者；</p>
        <h3 class="h3 tl1">{{title4}}</h3>
        <p class="p tl1">{{info4}}</p>
         <p class="p tl1">根本性解决收费不公开透明，其它系统方案不能解决的准确及时收费问题，避免运营商的损失。</p>

    </div>
    <div class="right" >
        <img v-lazy="img" alt="">
    </div>

  </div>


    </div>
</template>

<script>
  export default{


           props:["title1","englist","info","title2","info2","title3","info3","title4","info4","title5","info5","img","isToLeft"],
          data(){
            return {
              fadeInElements:[],
              left1:[],
              right:[]

            }

          },
          mounted () {
              // 先获取全部需要过渡效果的元素
              this.fadeInElements = Array.from(document.getElementsByClassName('tl1'))

                this.right = Array.from(document.getElementsByClassName('right'))
               //  console.log("hah"+this.left)
              // 监听鼠标滚动事件
              document.addEventListener('scroll', this.handleScroll)

               document.addEventListener('scroll', this.handleScroll3)

            },
             methods: {
              handleScroll3 (evt) {
                for (var i = 0; i < this.right.length; i++) {
                  var elem = this.right[i]
                  //console.log(elem.className)
                  var cN=elem.className
                  if (this.isElemVisible(elem)) {
                    elem.className=cN+" "+"animated fadeInRight"
                     console.log(elem.className)
                    this.right.splice(i, 1) // 只让它运行一次
                  }
                }
              },






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
           // 判断元素距离窗口的位置
              isElemVisible (el) {
                var rect = el.getBoundingClientRect()
                var elemTop = rect.top + 200 //= buffer
                var elemBottom = rect.bottom
                return elemTop < window.innerHeight && elemBottom >= 0
              }
            },
  }

</script>

<style scoped>

  .right{
    float: right;

  }

    .ap-all{
      padding-left: 50px;
      padding-right: 50px;
      height: 655px;

      margin: 0 auto;
      overflow: hidden;

    }


    .left2{
      vertical-align: top;
      float: left;
    }


    .h2{
      text-align: left;
      color: #477e9a;
      font-size: 30px;
      font-weight: bolder;

     }

    .p{
      margin-top: 0px !important;
    color: #605656;
    line-height: 20px;
    text-align: left;


    }

    .h3{
    text-align: left;
    display: block;
    color: #F79646;
    letter-spacing: 0;
    font-size: 18px;
      margin-top: 20px;
    }


    .lh3{
          color: #555;
          text-align: left;
          font-size: 30px;
          line-height: 36px;
          margin: 5px 0 0;
          font-family: "itcavantgardepro-bk";
          position: relative;
    }


img{
      width: 249px;
      height: 497px;

    }





</style>
