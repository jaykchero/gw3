<template>


  <div class="ab-container">

  <div>
  <div class="adv" :class="{toleft:isToLeft}"  >
    <div class="ab-left">
      <h2 class="h2 left1">{{title1}}</h2>
      <p class="p left1">{{info}}</p>
      <h3 class="h3 left1">{{title2}}</h3>
     <ul class="left2">
      	<li class="left2" v-for="(item,index) in list " :key="index">
            {{item}}
        </li>
      </ul>
    </div>

    <div class="ab-right lii" >
        <img v-lazy="img" >
    </div>

  </div>
  </div>
    </div>
</template>

<script>
  export default{

          props:["title1","info","title2","list","img","isToLeft"],
          data(){
            return {
              fadeInElements:[],
              left:[],
               left2:[],

            }

          },
          mounted () {
              // 先获取全部需要过渡效果的元素
              this.fadeInElements = Array.from(document.getElementsByClassName('left1'))
               this.left = Array.from(document.getElementsByClassName('ab-right'))
               this.left2 = Array.from(document.getElementsByClassName('left2'))
               // console.log(this.left.length)
              // 监听鼠标滚动事件
              document.addEventListener('scroll', this.handleScroll)
               document.addEventListener('scroll', this.handleScroll2)
                document.addEventListener('scroll', this.handleScroll3)


            },
             methods: {

                // 循环判断是否要触发过渡
                handleScroll3 (evt) {
                
                  for (var i = 0; i < this.left2 .length; i++) {
                    var elem = this.left2 [i]
                    var cN =elem.className
                    if (this.isElemVisible(elem)) {
                      elem.className=cN+" "+"animated slideInUp"
                      this.left2.splice(i, 1) // 只让它运行一次
                    }
                  }
                },

                 // 循环判断是否要触发过渡
                 handleScroll2 (evt) {
                   for (var i = 0; i < this.left.length; i++) {
                     var elem = this.left[i]
                     var cN =elem.className
                     if (this.isElemVisible(elem)) {
                       elem.className=cN+" "+"animated slideInUp"

                       this.left.splice(i, 1) // 只让它运行一次
                     }
                   }
                 },

                // 循环判断是否要触发过渡
                handleScroll (evt) {
                  for (var i = 0; i < this.fadeInElements.length; i++) {
                    var elem = this.fadeInElements[i]
                    var cN =elem.className
                    if (this.isElemVisible(elem)) {
                      elem.className=cN+" "+"animated slideInDown"

                      this.fadeInElements.splice(i, 1) // 只让它运行一次
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


  .lii{
      transition: all .5s ease;
  }

  .lii:hover{
    -webkit-transform: scale(1.1);
  	  -moz-transform: scale(1.1);
  			transform: scale(1.1);
  }


  .toleft{
    flex-direction: row-reverse;

  }

  .adv{
    display: flex;
    width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

  }

  .ab-left{
    width: 50%;
  }


  .h2{
    text-align: left;
    color:#242424;
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
  color: #363636;
  font-size: 15px;
  font-weight: bolder;
  margin-top: 40px;
  margin-bottom:15px;
  }
  img{
    width: 497px;
    height: 497px;
  }





</style>
