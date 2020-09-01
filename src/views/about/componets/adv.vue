<template>

<div class="c-container">
  <div >

  <div class="adv" :class="{toleft:isToLeft}">
    <div class="lefta " >
      <h2 class="h2 tl1">{{title1}}</h2>
      <h3 class="lh3 tl1">{{englist}}</h3>
      <div class="lf">

      <p class="p left1">{{info}}</p>
      <h3 class="h3 left1">{{title2}}</h3>
       <p class="p left1">{{info2}}</p>
       <h3 class="h3 left1">{{title3}}</h3>
        <p class="p left1">{{info3}}</p>
        <h3 class="h3 left1">{{title4}}</h3>
         <p class="p left1">{{info4}}</p>
         <h3 class="h3 left1">{{title5}}</h3>
          <p class="p left1">{{info5}}</p>
          </div>
    </div>
    <div class="right " >
      <img v-lazy="img" >
    </div>

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
              left:[],
              right:[]

            }

          },
          mounted () {
              // 先获取全部需要过渡效果的元素
              this.fadeInElements = Array.from(document.getElementsByClassName('tl1'))
               this.left = Array.from(document.getElementsByClassName('lf'))
                this.right = Array.from(document.getElementsByClassName('right'))
               //  console.log("hah"+this.left)
              // 监听鼠标滚动事件
              document.addEventListener('scroll', this.handleScroll)
               document.addEventListener('scroll', this.handleScroll2)
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
                    // console.log(elem.className)
                    this.right.splice(i, 1) // 只让它运行一次
                  }
                }
              },


               handleScroll2 (evt) {
                 for (var i = 0; i < this.left.length; i++) {
                   var elem = this.left[i]
                   //console.log(elem.className)
                   var cN=elem.className
                   if (this.isElemVisible(elem)) {

                     elem.className=cN+" "+"animated slideInUp"
                      //console.log(elem.className)
                     this.left.splice(i, 1) // 只让它运行一次
                   }
                 }
               },



                // 循环判断是否要触发过渡
                handleScroll (evt) {
                  for (var i = 0; i < this.fadeInElements.length; i++) {
                    var elem = this.fadeInElements[i]
                    var cN=elem.className
                    if (this.isElemVisible(elem)) {
                       elem.className=cN+" "+"animated slideInDown"
                      this.fadeInElements.splice(i, 1) // 只让它运行一次
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
            },
  }

</script>

<style scoped>

  .right{
    top: 50px;
    right: 20px;
    position: absolute;
    width: 500px;
  }

  .adv{
    position: relative;
    padding-left: 50px;
    padding-right: 50px;
  }



    .liness{
          content: "";
          display: block;
          width: 120px;
          height: 1px;
          background: #2e2e2e;
          position: absolute;
          bottom: -40px;
    }


    .lefta{
      vertical-align: top;
      width: 50%;
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
    line-height: 24px !important;
    text-align: left;
    }

    .h3{
     margin-top: 10px;
    text-align: left;
    display: block;
    color: #F79646;
    letter-spacing: 0;
    font-size: 18px;
    }


    .lh3{
          color: #555;
          text-align: left;
          font-size: 30px;
          line-height: 36px;
          font-family: "itcavantgardepro-bk";
          position: relative;
    }


img{
      width: 497px;
      height: 497px;

    }




</style>
