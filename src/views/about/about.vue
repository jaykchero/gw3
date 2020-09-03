<template>

  <div class="about-all">



      <div class="h-b">
          <!-- <img src="http://qexz4xnye.hn-bkt.clouddn.com/h-b1.jpg" alt=""> -->
           <img v-lazy="hb">
      </div>
 <div class="about-all-item">
      <div id="about1" class="about" >
         <about1></about1>
      </div>

        <div class="divider">
           <a-divider >
            <svg t="1597299904979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="990" width="32" height="32"><path d="M512 512m-442.7 0a442.7 442.7 0 1 0 885.4 0 442.7 442.7 0 1 0-885.4 0Z" fill="#F79646" p-id="991" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M512 512m-263 0a263 263 0 1 0 526 0 263 263 0 1 0-526 0Z" fill="#ffffff" p-id="992" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>
           </a-divider>
        </div>



      <div id="culture" class="about" style="padding-top: 100px; margin-bottom: 55px; ">
         <culture></culture>
      </div>

      <div class="divider">
     <a-divider>

    <svg t="1597299904979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="990" width="32" height="32"><path d="M512 512m-442.7 0a442.7 442.7 0 1 0 885.4 0 442.7 442.7 0 1 0-885.4 0Z" fill="#F79646" p-id="991" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M512 512m-263 0a263 263 0 1 0 526 0 263 263 0 1 0-526 0Z" fill="#ffffff" p-id="992" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>

       </a-divider>
      </div>



   <div id="ProjectExperience" class="about2"  style="padding-top: 50px;">
     <ProjectExperience :show="show"></ProjectExperience>
   </div>

   <div class="divider">
     <a-divider>
       <svg t="1597299904979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="990" width="32" height="32"><path d="M512 512m-442.7 0a442.7 442.7 0 1 0 885.4 0 442.7 442.7 0 1 0-885.4 0Z" fill="#F79646" p-id="991" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M512 512m-263 0a263 263 0 1 0 526 0 263 263 0 1 0-526 0Z" fill="#ffffff" p-id="992" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>

     </a-divider>
   </div>

   <div id="DevelopmentHistory" class="about2" style="padding-top: 60px;">
     <DevelopmentHistory></DevelopmentHistory>
   </div>

      </div>
      <div class="about1">
        <Bottom></Bottom>
      </div>


</div>
</template>

<script>
  import about1 from './componets/aboutOurs.vue'
  import culture from './componets/Culture.vue'
  import DevelopmentHistory from './componets/DevelopmentHistory.vue'
  import ProjectExperience from './componets/ProjectExperience.vue'
  import Bottom from '../../components/Bottom.vue'


    import $ from 'jquery'
   import {goAnchor,GetQueryString} from '../../assets/js/common.js';

  export default{
    components:{
       about1,
       culture,
       DevelopmentHistory,
       Bottom,
      ProjectExperience

    },

        data () {
          return {
              hb:'http://qexz4xnye.hn-bkt.clouddn.com/h-b1.jpg',
              divider:{},
              show:true,
            screenWidth:'',
            screenHeight:'',

          }
        },


     mounted:function (){

       this.screenWidth = document.body.clientWidth;
       this.screenHeight = document.body.clientHeight;
       window.onresize = () => {
         return (() => {
           this.screenWidth = document.body.clientWidth;
           this.screenHeight = document.body.clientHeight;
         })();
       };

       if(this.screenWidth>1600){
         $('.about-all-item').css("width","1600px")
         $('.about-all-item').css("margin","0 auto")
         $('.about,.about2').css("width","1600px")

       }



           this.divider = Array.from(document.getElementsByClassName('divider'))
           // 监听鼠标滚动事件
           document.addEventListener('scroll', this.handleScroll)
        // var topAbout1 = $('about1')[0].offsetTop;
         //console.log('topAbout1'+topAbout1)
        let maodian=this.GetQueryString('maodian');//进入页面，如果带有锚点参数，则跳转至锚点地方，参数值就是id名
          console.log("000"+maodian)
        console.info("*****",maodian)

        if(maodian){

            this.goAnchor('#'+maodian);

        }


      },

       methods:{
          goAnchor,
          GetQueryString,

          // 循环判断是否要触发过渡
               handleScroll (evt) {
                 for (var i = 0; i < this.divider.length; i++) {
                   var elem = this.divider[i]
                     var cN=elem.className
                   if (this.isElemVisible(elem)) {
                    elem.className=cN+" "+"animated slideInUp"
                     console.log(elem.className)
                    this.divider.splice(i, 1) // 只让它运行一次
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
<style>

  .about-all-item{

    background-color: #FFFFFF;
    margin: 0 auto;
    width: 1200px;

  }

  .divider{
    margin: 0 auto;
    width: 100%;

  }
</style>

<style scoped="scoped">



  .h-b img {
    width: 100%;
    height: 100%;
  }
  .h-b{
    margin-bottom: -50px;
    width: 100%;
    height: 388px;
    overflow: hidden;
  }

  .about-all{
    width: 100%;
    height: 100%;
    background-color: #14679f;
    position: relative;
    text-align: center;
  }
  .about {
     background-color: #FFFFFF;
    margin: 0 auto;
    width: 1200px;
    height: 655px;
    overflow: hidden;
  }

</style>
