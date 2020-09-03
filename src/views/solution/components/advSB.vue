<template>

<div class="container clearfix">
  <div class="fade-in full-width">

  <div class="adv" :class="{toleft:isToLeft}">
    <div class="left " >
      <h2 class="h2 left1">{{title1}}</h2>
      <h3 class="lh3">{{englist}}</h3>
      <p class="p left1">{{info}}</p>
      <h3 class="h3 left1">{{title2}}</h3>
      <p class="p left1">{{info2}}</p>
       <h3 class="h3 left1">{{title3}}</h3>
        <p class="p left1">{{info3}}</p>
        <h3 class="h3 left1">{{title4}}</h3>
        <p class="p left1">{{info4}}</p>
    </div>
    <div class="sbright lii" >
        <img :src="img" alt="">
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

               this.left = Array.from(document.getElementsByClassName('left'))
                this.right = Array.from(document.getElementsByClassName('sbright'))
               //  console.log("hah"+this.left)
              // 监听鼠标滚动事件

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
                     console.log(elem.className)
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

                     elem.className=cN+" "+"animated fadeInLeft"
                      console.log(elem.className)
                     this.left.splice(i, 1) // 只让它运行一次
                   }
                 }
               },


           // 判断元素距离窗口的位置
              isElemVisible (el) {
                var rect = el.getBoundingClientRect()
                var elemTop = rect.top + 200 // 200 = buffer
                var elemBottom = rect.bottom
                return elemTop < window.innerHeight && elemBottom >= 0
              }
            },
  }

</script>

<style scoped="scoped">

  .sbright{
    width: 50%;
  }
  .toleft{
    flex-direction: row-reverse;
  }

  .adv{
    position: relative;
    padding-top: 100px;
    display: flex;
    height: 600px;
    margin: 0 auto;
    align-items: auto;
    justify-content: space-between;

  }

    .clearfix{
        padding-left: 50px;
        padding-right: 50px;
    }

    .lii{
        transition: all .5s ease;
    }

    .lii:hover{
      -webkit-transform: scale(1.1);
    	  -moz-transform: scale(1.1);
    			transform: scale(1.1);
    }


    .left{
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
    line-height: 24px;
    text-align: left;
    }

    .h3{
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
          margin: 5px 0 0;
          font-family: "itcavantgardepro-bk";
          position: relative;
    }


    img{
      width: 249px !important;
      height: 497px !important;

    }



</style>
