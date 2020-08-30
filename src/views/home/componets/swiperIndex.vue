<template>
<div>
    <div class="swiper-container banner-swiper">
      <div class="swiper-wrapper">
         <div class="swiper-slide slide-one">
           <div class="page ani home"  swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
              <h3>普行智能停车</h3>
            </div>
           </div>
        <div class="swiper-slide slide-two">
          <div <div class="page ani home"  swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">>
             <h3>普行智能停车</h3>
           </div>
        </div>
        <div class="swiper-slide slide-three">
            <div<div class="page ani home"  swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">>
               <h3>普行智能停车</h3>
             </div>
        </div>
        <div class="swiper-slide slide-four">
           <div <div class="page ani home"  swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">>
              <h3>普行智能停车</h3>
            </div>

        </div>

      </div>
      <div class="swiper-pagination"></div>
     <!-- <div class="swiper-button-prev "></div>
      <div class="swiper-button-next "></div> -->
    </div>

</div>

</template>

<script>
  import Swiper from "swiper"
   import * as swiperAni from '../../../assets/js/animate.js' //根据自己的路径进行引入


  export default {

     components:{
       //pro
     },

    date () {
      return {
        left:{},
      }
    },


    mounted() {
      console.log(this.img1)
      this.left = Array.from(document.getElementsByClassName('banner-swiper'))
      document.addEventListener('scroll', this.handleScroll4)
      var swiper = new Swiper('.banner-swiper',{
      		  autoplay: {
      			delay: 5000,
      			disableOnInteraction: false,
      		  },
      		  speed: 1000,
      		  //allowTouchMove: false,
      		  lazy: {
      			loadPrevNext: true,
      			loadPrevNextAmount: 3,
      		  },
      		  centeredSlides: true,
      		  loop: true,
      		  slidesPerView : 'auto',

      		  pagination: {
      		  			el: '.swiper-pagination',
      		  			clickable :true,
                   
          
      		  		  // renderBullet: function (index, className) {
                  //   var text="";
      		  		  //         switch(index){
      		  		  //           case 0:text='';break;
      		  		  //           case 1:text='';break;
      		  		  //           case 2:text='';break;
      		  		  //           case 3:text='';break;
      		  		  //           case 4:text='';break;
      		  		  //         }
      		  		  //         return '<span class="' + className + '">' + text + '</span>';
      		  		  //       },
      		  		  },
      		  navigation: {
      			nextEl: '.swiper-button-next',
      			prevEl: '.swiper-button-prev',
      		  },

            on:{
              init: function(){
               swiperAni.swiperAnimateCache(this); //隐藏动画元素
               swiperAni.swiperAnimate(this); //初始化完成开始动画
                 },
                 slideChangeTransitionStart: function(){
                 swiperAni.swiperAnimate(this); //每个slide开始切换时也运行当前slide动画
                 this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); // 动画只展现一次，去除ani类名
                    }
                },

      		});
      		window.onresize=function(){
      		  swiper.update();
      		}
    }


  }
</script>

<style scoped="scoped">
@import url('../../../assets/css/swiper.min.css');



    h3{
      margin-top: 60px;
      font-size: 40px;
      font-weight: 400;
      color: #fff;
    }
    .swiper-pagination{

        position: absolute;
        top: 620px !important;
        z-index: 999;
    }

    .slide-one {
      height: 700px !important;
      background: url(http://qexz4xnye.hn-bkt.clouddn.com/home_top.jpg) no-repeat center;
      background-size: cover;
    }
    .slide-two {
       height: 700px !important;
      background: url(http://qexz4xnye.hn-bkt.clouddn.com/home_do.jpg) no-repeat center;
      background-size: cover;
    }
    .slide-three {
       height: 700px !important;
      background: url(http://qexz4xnye.hn-bkt.clouddn.com/home_top.jpg) no-repeat center;
      background-size: cover;
    }
    .slide-four {
      height: 700px !important;
      background: url(http://qexz4xnye.hn-bkt.clouddn.com/home_do.jpg) no-repeat center;
      background-size: cover;
    }


    img{
      height: 700px !important;
    }

body {
      margin: 0;
    }
	h2{
	  font-family: -webkit-pictograph;
	  font-size:30px;
	  font-style:italic;
	  text-align:center;
    }
    .swiper-container {
	    padding-bottom:40px;
    }

    .swiper-slide {
	    width:100%;
		transition-timing-function:linear;
    }
	@media only screen and (max-width:1200px){
	    .swiper-slide {
	        width:770px;
        }
	}
	@media only screen and (max-width:980px){
	    .swiper-slide {
	        width:471px;
        }
	}
	@media only screen and (max-height:480px){
	    .swiper-slide {
	        width:471px;
        }
	}
	.swiper-slide img{
		width:100%;
		border-radius: 4px;}
	.swiper-slide .title{
		position:absolute;
		transform:rotate(90deg);
		transform-origin:left top;
		left:-3px;
		font-size:11px;
		color: rgb(102, 102, 102);}
   .swiper-button-next, .swiper-button-prev{
  		width:86px;
  		height:112px;
  		background-size:86px 112px;
  		margin-top:-56px;
  		outline:none;}
	/* .swiper-button-next{
		background-image:url(../../../assets/img/cursor-next.png);}
	.swiper-button-prev{
		background-image:url(../../../assets/img/cursor-prev.png);} */







</style>

<style>
  .swiper-pagination-bullet {
       width: 15px !important;
       height: 15px !important;
       text-align: center;
       line-height: 20px;
       font-size: 12px;
       opacity: 1;
      background: -webkit-linear-gradient(right, #ffffff , #ff5500) !important;
       background: linear-gradient(to left,  #ffffff , #ffffff) 
     }

     .swiper-pagination-bullet-active {
       color: #fff;
       background: #ffffff ;
     }
</style>
