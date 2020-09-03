/* eslint-disable */
<template>
     <div class="all">
      <div class="potheader">
     <h2 class="animated slideInUp h2">行业痛点</h2>
    <!--  <p class="pp animated slideInUp">Pains of Industry</p> -->
    <span class="pp animated slideInUp">Pains of Industry</span>
    <!-- <div class="liness slideInUp"></div> -->
      </div>
       <!-- Swiper -->
         <div class="swiper-container">
           <div class="swiper-wrapper">
             <div class="swiper-slide init ">
               <img class="img" src="http://qexz4xnye.hn-bkt.clouddn.com/test.png" alt="">
               <p class="desc init ">车位已满</p>
             </div>
             <div class="swiper-slide"><img class="img" src="http://qexz4xnye.hn-bkt.clouddn.com/test02.png" alt=""> <p class="desc init">人工收费频繁</p></div>
             <div class="swiper-slide"><img class="img" src="http://qexz4xnye.hn-bkt.clouddn.com/test03.png" alt=""><p class="desc init">车辆乱停</p></div>
             <div class="swiper-slide"><img class="img" src="http://qexz4xnye.hn-bkt.clouddn.com/test04.png" alt=""><p class="desc init">电动车占用车位</p></div>
           </div>
         <!-- <div class="swiper-pagination"></div> -->
         </div>
       </div>

</template>

<script>
  import Swiper from "swiper"
  import $ from "jquery";
  export default {



    mounted() {

      this.screenWidth = document.body.clientWidth;

      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
          //this.screenHeight = document.body.clientHeight;
        })();
      };

      if(this.screenWidth>1600){
        // $('.img').css("width","800px")
        // $('.img').css("height","600px")


      }



     var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
           spaceBetween: 150,
          centeredSlides: true,
          autoplay:true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

          on: {
          	init: function() {
          		this.slides.removeClass('init');
          	},

          },


        });
    }
  }


</script>

<style scoped="scoped">
    .potheader{
      padding-left: 50px;
      padding-right: 50px;
    }

    .desc{
    display: inline-block;
  	opacity: 0;
  	transition-duration: 1.2s;
    }
    .init{
    	opacity: 1;
    }

  .h2{

    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
   }
   .pp{
    position: absolute;
    left: 210px;
    color: #555;
    text-align: left;
    font-size: 30px;
    line-height: 36px;
    font-family: "itcavantgardepro-bk";

   }
    p{
      letter-spacing: .009em;
      color: #111;
      font-size: 20px;
      position: absolute;
      top: 460px;
      opacity: 1;
      z-index: 999;
       }


    html, body {
      position: relative;
      height: 600px !important;

    }
    body {

     background-size: 100%;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;

    }

    img{
      width: 550px;
      height: 350px;
    }

    .swiper-container {
      width: 100%;
      height: 100%;

    }
    .swiper-slide {
      position: relative;
      width: 600px;
      height: 500px;
      text-align: center;
      font-size: 18px;
      background: #fff;

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
	  transition: 300ms;
	  transform: scale(0.5);
    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(0.8);

	}

  .desc {
  	width: 80%;
  	text-align: center;
  	display: inline-block;
  	opacity: 0;
  	transition-duration: 1.2s;
  }
  .init .desc {
  	opacity: 1;


  }

 .swiper-slide-prev .desc {
  	transform: translateX(-70px);
  }
  .swiper-slide-next .desc {
  	transform: translateX(70px);
  }
  .swiper-slide-active .desc {
  	opacity: 1;
  	transform: translateX(0);
  }

</style>
