<template>
  <div class="ps-all">
      <div class="ps-header tl2  ">
        <h2 class="h2 tl2 animated slideInUp">智能云停车系统介绍</h2>
        <h3 class="lh3 tl2 animated slideInUp">Cloud Parking System</h3>
      </div>

      <div class="ps-context">
        <div class="sp-c-top">
          <div class="tl1" style=" margin-bottom: 50px"><h3 class="lh33">车牌采集</h3></div>
          <div class="cl ">
             <img class="lii tl1" v-lazy="i1" alt="">
           <p class="tl1">

             车辆进出检测
           </p>
          </div>
          <div class="cl">
            <svg t="1598859701054" class="icon" viewBox="0 0 2642 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15855" width="96" height="96"><path d="M1995.148387 300.593548V194.890323c0-72.670968 59.458065-132.129032 132.129032-132.129033 33.032258 0 69.367742 13.212903 92.490323 39.63871l307.2 307.2c52.851613 52.851613 52.851613 135.432258 0 188.283871L2213.16129 901.780645c-52.851613 49.548387-135.432258 49.548387-188.283871-3.303226-23.122581-26.425806-36.335484-59.458065-36.335484-92.490322v-102.4H264.258065c-112.309677 0-201.496774-89.187097-201.496775-201.496774 0-112.309677 89.187097-201.496774 201.496775-201.496775h1730.890322z" fill="#F79646" p-id="15856"></path><path d="M2123.974194 1007.483871c-52.851613 0-102.4-19.819355-142.03871-59.458065-36.335484-36.335484-56.154839-85.883871-56.154839-138.735483v-36.335484H267.56129c-148.645161 0-267.56129-118.916129-267.56129-267.561291s118.916129-267.56129 267.56129-267.56129h1661.522581V198.193548c0-52.851613 19.819355-102.4 59.458064-138.735483C2024.877419 23.122581 2074.425806 0 2130.580645 3.303226c52.851613 0 102.4 19.819355 138.735484 59.458064l307.2 307.2c75.974194 75.974194 75.974194 201.496774 0 280.774194l-3.303226 3.303226-313.806451 303.896774c-36.335484 29.729032-85.883871 49.548387-135.432258 49.548387zM267.56129 366.658065c-75.974194 0-135.432258 59.458065-135.432258 135.432258s59.458065 135.432258 135.432258 135.432258h1790.348387v168.464516c0 16.516129 6.606452 33.032258 19.819355 46.245161 26.425806 26.425806 66.064516 26.425806 92.490323 0l313.806451-303.896774c26.425806-26.425806 26.425806-69.367742 0-95.793549l-307.2-307.2c-13.212903-13.212903-29.729032-19.819355-46.245161-19.819354-16.516129 0-33.032258 6.606452-46.245161 19.819354-13.212903 13.212903-19.819355 29.729032-19.819355 46.245162V363.354839H267.56129z" fill="#F79646" p-id="15857"></path></svg>
          </div>
          <div class="cl">
            <img class="lii tl1" v-lazy="i12" alt="">
            <p class="tl1">
             设备拍摄车牌并上传
            </p>
          </div>

          <div class="cl tl1">
            <svg t="1598859701054" class="icon" viewBox="0 0 2642 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15855" width="96" height="96"><path d="M1995.148387 300.593548V194.890323c0-72.670968 59.458065-132.129032 132.129032-132.129033 33.032258 0 69.367742 13.212903 92.490323 39.63871l307.2 307.2c52.851613 52.851613 52.851613 135.432258 0 188.283871L2213.16129 901.780645c-52.851613 49.548387-135.432258 49.548387-188.283871-3.303226-23.122581-26.425806-36.335484-59.458065-36.335484-92.490322v-102.4H264.258065c-112.309677 0-201.496774-89.187097-201.496775-201.496774 0-112.309677 89.187097-201.496774 201.496775-201.496775h1730.890322z" fill="#F79646" p-id="15856"></path><path d="M2123.974194 1007.483871c-52.851613 0-102.4-19.819355-142.03871-59.458065-36.335484-36.335484-56.154839-85.883871-56.154839-138.735483v-36.335484H267.56129c-148.645161 0-267.56129-118.916129-267.56129-267.561291s118.916129-267.56129 267.56129-267.56129h1661.522581V198.193548c0-52.851613 19.819355-102.4 59.458064-138.735483C2024.877419 23.122581 2074.425806 0 2130.580645 3.303226c52.851613 0 102.4 19.819355 138.735484 59.458064l307.2 307.2c75.974194 75.974194 75.974194 201.496774 0 280.774194l-3.303226 3.303226-313.806451 303.896774c-36.335484 29.729032-85.883871 49.548387-135.432258 49.548387zM267.56129 366.658065c-75.974194 0-135.432258 59.458065-135.432258 135.432258s59.458065 135.432258 135.432258 135.432258h1790.348387v168.464516c0 16.516129 6.606452 33.032258 19.819355 46.245161 26.425806 26.425806 66.064516 26.425806 92.490323 0l313.806451-303.896774c26.425806-26.425806 26.425806-69.367742 0-95.793549l-307.2-307.2c-13.212903-13.212903-29.729032-19.819355-46.245161-19.819354-16.516129 0-33.032258 6.606452-46.245161 19.819354-13.212903 13.212903-19.819355 29.729032-19.819355 46.245162V363.354839H267.56129z" fill="#F79646" p-id="15857"></path></svg>
          </div>
          <div class="cl">

             <img class="lii tl1" v-lazy="i13" alt="">
            <p class="tl1"> 云算法智能识别车牌</p>
          </div>

        </div>


        <div class="tl1">
          <svg t="1598861720401" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19420" width="64" height="64"><path d="M511.674507 33.200254c33.200254 0 61.192626 27.992371 61.192626 61.192626v833.261284c0 33.200254-27.992371 61.192626-61.192626 61.192626-33.200254 0-61.192626-27.992371-61.192625-61.192626V93.090909c0-33.200254 27.992371-59.890655 61.192625-59.890655z" fill="#F79646" p-id="19421"></path><path d="M511.674507 0c50.125874 0 93.741894 43.61602 93.741895 93.741894v833.261285c0 50.125874-43.61602 93.741894-93.741895 93.741894S417.932613 977.780038 417.932613 927.654164V93.090909C417.932613 41.012079 460.246662 0 511.674507 0z m0 954.99555c14.321678 0 27.992371-13.019708 27.992372-27.992371v-833.261285c0-14.321678-13.019708-27.992371-27.992372-27.992371s-27.992371 11.717737-27.992371 26.690401v834.563255c0 14.972664 13.670693 27.992371 27.992371 27.992371z" fill="#F79646" p-id="19422"></path><path d="M146.47171 502.560712c15.623649 0 30.596313 5.207883 42.31405 16.92562l322.888747 322.888747L833.261284 520.788303c24.086459-24.086459 62.494596-24.086459 85.93007 0 24.086459 24.086459 24.086459 62.494596 0 85.93007l-365.202797 365.202797c-24.086459 24.086459-62.494596 24.086459-85.93007 0L104.157661 606.718373c-24.086459-24.086459-24.086459-62.494596 0-85.93007 11.717737-11.717737 26.039415-18.227591 42.314049-18.227591z" fill="#F79646" p-id="19423"></path><path d="M146.47171 469.360458c25.38843 0 47.521933 9.113795 66.400509 26.6904l299.453274 300.755245 298.151303-299.453274c37.106167-37.106167 96.345836-37.106167 132.150032 0 16.92562 16.92562 27.992371 41.012079 27.992371 66.400509s-9.113795 48.823903-27.992371 66.400508l-364.551812 365.853783c-37.106167 37.106167-96.345836 37.106167-132.150032 0l-364.551812-365.202797c-37.106167-37.106167-37.106167-96.345836 0-132.150032 16.92562-20.180547 39.710108-29.294342 65.098538-29.294342z m365.202797 419.885569L164.699301 542.27082c-5.207883-5.207883-10.415766-7.811825-18.227591-7.811824-6.509854 0-13.019708 2.603942-18.22759 9.113795-10.415766 10.415766-10.415766 27.992371 0 39.710108l363.900826 365.202797c10.415766 10.415766 27.992371 10.415766 39.710108 0l363.900826-365.202797c5.207883-5.207883 7.811825-11.717737 7.811825-20.180547 0-7.811825-2.603942-14.321678-7.811825-20.180547-10.415766-10.415766-27.992371-10.415766-39.710108 0l-344.371265 346.324222z" fill="#F79646" p-id="19424"></path></svg>
        </div>
        <div class="ps-center tl1" style="margin-top: 20px">
          <img  class="tl1" v-lazy="i2" alt="">
        </div>

        <div class="divider tl1" style="margin-left: 0px">
          <a-divider>
            <svg t="1597299904979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="990" width="32" height="32"><path d="M512 512m-442.7 0a442.7 442.7 0 1 0 885.4 0 442.7 442.7 0 1 0-885.4 0Z" fill="#F79646" p-id="991" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M512 512m-263 0a263 263 0 1 0 526 0 263 263 0 1 0-526 0Z" fill="#ffffff" p-id="992" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>
          </a-divider>
        </div>

            <div class="ps-bottom">
              <div class="tl1"><h3 class="lh33">系列优势</h3></div>
              <div class="xlys ">
                <Xlys ></Xlys>

              </div>

            </div>

      </div>


  </div>
</template>

<script>
    import Xlys from './advAboutOurs.vue'
  export default {
   components:{
     Xlys
   },

    data () {
      return {

        i1:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%AF%86%E5%88%AB/jcjc.png',
        i12:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%AF%86%E5%88%AB/pssb.png",
        i13:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%AF%86%E5%88%AB/yun.png',
        i2:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/yjgpt.png',
        i3:"http://qexz4xnye.hn-bkt.clouddn.com/product_group_3_img.png",
          fadeInElements:{},
          fadeInElements1:{}
      }
    },
    mounted() {


       this.fadeInElements = Array.from(document.getElementsByClassName('tl1'))
        this.fadeInElements1 = Array.from(document.getElementsByClassName('tl2'))

       for (var i = 0; i < this.fadeInElements1.length; i++) {
         var elem = this.fadeInElements1[i]
           var cN=elem.className
         if (this.isElemVisible(elem)) {
          elem.className=cN+" "+"animated slideInUp"
           console.log(elem.className)
          //this.fadeInElements1.splice(i, 1) // 只让它运行一次
         }
       }

       // 监听鼠标滚动事件
       document.addEventListener('scroll', this.handleScroll)


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

<style scoped="scoped">


    .cl{
      float: left;
      width: 220px;


    }

    .cl svg{
        margin-top: 20px;
        /*margin-left: 150px;*/
    }
    .cl p{
      color: cornflowerblue;
      /*margin-left: 160px;*/
      margin-top: 30px;
    }
      .lii{
          transition: all .5s ease;
      }

      .lii:hover{
        -webkit-transform: scale(1.1);
      	  -moz-transform: scale(1.1);
      			transform: scale(1.1);
      }


      .b-img img {

        width: 413px;
        height: 416px;

      }
      .sp-c-right img {
        width: 300px;
        height: 450px;
        position: absolute;
         top: 20px;
      }

    .ps-center{
      margin: 0 auto;
      margin-bottom: 100px;
      font-family: 'Nunito', sans-serif;
      background: linear-gradient(to left, #2475a6, #2475a6);
      padding: 20px;
      width: 940px;
      height: 640px;
      list-style: none;
      border: 1px solid rgba(223,231,239, .7);
      transition: all .2s ease;

    }

     .ps-center img {
        width:900px;
        height: 600px;

     }



      .sp-c-top img{

        width: 140px;
        height: 140px;

        font-family: 'Nunito', sans-serif;
        background: linear-gradient(to left, #2475a6, #2475a6);
        padding: 5px;

        list-style: none;
        border: 1px solid rgba(223,231,239, .7);

      }





    .lh3{
          color: #555;
          text-align: left;
          font-size: 25px;
          line-height: 36px;
          margin: 5px 0 0;
          font-family: "itcavantgardepro-bk";
          position: relative;
    }
    .lh33{
      color: #555;
      text-align: center;
      font-size: 25px;
      line-height: 36px;
      margin: 5px 0 0;
      font-family: "itcavantgardepro-bk";
      position: relative;
    }

    .h2{
      text-align: left;
      color: #477e9a;
      font-size: 30px;
      font-weight: bolder;
     }

    .ps-all {
      width: 1200px;
      margin: 0 auto;
    }
    .ps-header{
      margin-top: 30px;
      height: 100px;
/*      background-color: #38EF7D; */
    }
    .ps-context{
      margin-top: 50px;
        position: relative;

        /* background-color: red; */
    }
    .ps-bottom{
      position: relative;
    }

</style>
