<template>

  <div class="swiper-container banner-swiper2">
      <div style="font-size: 18px; float: left; ">
        成功案例
      </div>

   <div class="swiper-wrapper">
         <div class="swiper-slide ">
           <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
        <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
              <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
            <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
             <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
            <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
             <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
             <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
            <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
              <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
             <img class="lii" :src="img" alt="">
         </div>
         <div class="swiper-slide ">
             <img class="lii" :src="img" alt="">
         </div>
       </div>
       <!-- Add Pagination -->
       <div class="swiper-pagination"></div>
  </div>

</template>

<script>
   import Swiper from "swiper"

export default {
    name: 'carrousel',
    data() {
      return {
      left:{},
      img:'https://ali.xmssdn.micloud.mi.com/2/1566455553514/get_thumbnail?sig=FzC64-2KL2zB9cfp0gqflmprSmc&data=Rz0-ogiDyfssuGxPdVJSi_CJ6MPPeVD0Rdj2xwJs0MvwiyIptpmOGYnoXbPqXOsjDW_2Y6hC6syuKrWodOBEf7c3vNWyuhvzjG5SMaqpD9zY7Pf49Z4WGMUSG4JFv7cJCdqh1yISRMrNGldgiXt4olcE1uewFRTfwqVhYrtCtOBumTA7Lve8_tMmHqbPV3EdijN9GXmyEbKF1UDDw6uY2EfizckC0MnWVJFK9y9ZdqnQ1ow_GyGRe1CEjWjYTBCHa0DdCOdM40Ye0u6PSsetuP-fECWfgzh7ogOQelBG5KEuB4Fe4VZrzkxIMlDxk2yCoWG7sfpCFw&ts=1597053755702&w=1080&h=1080&r=0&_cachekey=1e9be162f21bd9a7d67a98240242a153'
      }
    },

    mounted () {
      this.left = Array.from(document.getElementsByClassName('banner-swiper2'))
      document.addEventListener('scroll', this.handleScroll4)
    var myswiper = new Swiper('.banner-swiper2', {

            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
            slidesPerGroup:3,
            //loop:true,
             autoplay:true,//等同于以下设置
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },

            // $('.banner-swiper2').onmouseover(function(){
            //       mySwiper.autoplay.stop();
            // }).onmouseleave(function(){

            //    mySwiper.autoplay.start();
            // })



    });
      },
      methods:{



          handleScroll4 (evt) {
              for (var i = 0; i < this.left.length; i++) {
                var elem = this.left[i]
               //console.log(elem.className)
                var cN=elem.className
                if (this.isElemVisible(elem)) {

                  elem.className=cN+" "+"animated zoomIn"
                  // console.log(elem.className)
                  this.left.splice(i, 1) // 只让它运行一次
                }
              }
            },

            // 判断元素距离窗口的位置
               isElemVisible (el) {
                 var rect = el.getBoundingClientRect()
                 var elemTop = rect.top + 200  // 200 = buffer
                 var elemBottom = rect.bottom
                 return elemTop < window.innerHeight && elemBottom >= 0
               }
          }

  }

</script>

<style lang="scss" scoped="scoped">


      .lii{
          transition: all .5s ease;
      }

      .lii:hover{
        -webkit-transform: scale(1.1);
      	  -moz-transform: scale(1.1);
      			transform: scale(1.1);
      }


      .swiper-pagination{
          position: absolute;
          top: 10px;
          right: 0px !important;
      }


      img{
        width: 370px;
        height: 250px;
      }
   body {
        position: relative;
        height: 100%;
        text-align: center;

      }

      body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;

      }



      .swiper-container {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
        // margin-left: auto;
        // margin-right: auto;
      }

      .swiper-slide {
        width: 330px !important;
        margin-right: 0rem !important;
        padding-right: 0px !important;
        text-align: center;
        //font-size: 18px;
        background: #fff;
        height: calc((100% - 60px) / 2);
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }


</style>
