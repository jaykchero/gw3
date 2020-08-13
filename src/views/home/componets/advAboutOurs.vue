<template>

  <div class="container">
  <div class="fade-in full-width">
  <div class="adv" :class="{toleft:isToLeft}"  >
    <div class="left">
      <h2 class="h2 left1">{{title1}}</h2>
      <h3 class="lh3">{{englist}}</h3>
      <p class="p left1">{{info}}</p>
      <h3 class="h3 left1">{{title2}}</h3>
     <!--  <h3 class="lh3">{{englist2}}</h3> -->
       <p class="p left1">{{info2}}</p>
       <h3 class="h3 left1">{{title3}}</h3>
      <!--  <h3 class="lh3">{{englist3}}</h3> -->
        <p class="p left1">{{info3}}</p>
    </div>

    <div class="right" >
        <img :src="img" alt="">
    </div>

  </div>
  </div>
    </div>
</template>

<script>


  export default{
          props:["title1","englist","info","title2","englist2","info2","title3","englist3","info3","img","isToLeft"],
          data(){
            return {
              fadeInElements:[],
              left:[],
            }

          },
          mounted () {
              // 先获取全部需要过渡效果的元素
              this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
               this.left = Array.from(document.getElementsByClassName('left1'))
                console.log(this.left.length)
              // 监听鼠标滚动事件
              document.addEventListener('scroll', this.handleScroll)

              for (var i = 0; i < this.fadeInElements.length; i++) {
                var elem = this.fadeInElements[i]
                var cN =elem.className
                if (this.isElemVisible(elem)) {
                  elem.className=cN+' '+'animate__slideInDown'
                  elem.style.opacity = '1'
                  elem.style.transform = 'scale(1)'
                  this.fadeInElements.splice(i, 1) // 只让它运行一次
                }
              }


            },
             methods: {
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
  .toleft{
    flex-direction: row-reverse;
  }

  .adv{
    display: flex;
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    align-items: auto;
   justify-content: space-between;

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
  color: #605656;
  margin-top: 20px;
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

.ul{
    width:330px ;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .li{
    display: block;
      width: 10rem;
      height: 36px;
      text-align: center;
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



    /* 动画css */
  .container {
      display: table;
      width: 80%;
      min-width: 450px;
      margin: 0 auto;
    }

    .fade-in {
     
      height: 500px;
      margin-bottom: 50px;
      opacity: 0;
      transition: 0.5s all ease-out;
      transform: scale(0.8);
      box-sizing: border-box;
      padding: 20px;
      display: inline-block;
    }
    .full-width {
      width: 100%;
    }

    .half-width {
      width: 47.5%;
    }

    .half-width:nth-of-type(2n + 1) {
      margin-right: 2.5%;
    }

    .half-width:nth-of-type(2n) {
      margin-left: 2.5%;
    }



</style>
