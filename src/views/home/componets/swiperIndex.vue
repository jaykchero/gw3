<template>
<div>
    <div class="swiper-container banner-swiper">
      <div class="swiper-wrapper">
         <div class="swiper-slide slide-one">
           <div class="page">
              <h3>普行智能停车</h3>
            </div>
           </div>
        <div class="swiper-slide slide-two">
          <div class="page">
             <h3>普行智能停车</h3>
           </div>
        </div>
        <div class="swiper-slide slide-three">
            <div class="page">
               <h3>普行智能停车</h3>
             </div>
        </div>
        <div class="swiper-slide slide-four">
           <div class="page">
              <h3>普行智能停车</h3>
            </div>

        </div>

      </div>
      <div class="swiper-pagination animated slideInUp"></div>
      <div class="swiper-button-prev animated slideInUp"></div>
      <div class="swiper-button-next animated slideInUp"></div>
    </div>

</div>

</template>

<script>
  import Swiper from "swiper"



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
      		  speed: 700,
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
      		  			renderBullet: function (index, className) {
      		                return '<div class="' + className + '"><span></span><i></i></div>';
      		              },
      		  		  },
      		  navigation: {
      			nextEl: '.swiper-button-next',
      			prevEl: '.swiper-button-prev',
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
        top: 620px;
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
	.swiper-wrapper{
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
	.swiper-button-next{
		background-image:url(../../../assets/img/cursor-next.png);}
	.swiper-button-prev{
		background-image:url(../../../assets/img/cursor-prev.png);}
	.swiper-pagination-bullet{
		background:none;
		opacity:1;
		margin:0 6px !important;
		width:9px;
		height:9px;
		position:relative;
		outline:none;
		vertical-align:middle;}
	.swiper-pagination-bullet span{
		width:3px;
		height:3px;
		background:#CCC;
		display:block;
		border-radius:50%;
		margin-top:3px;
		margin-left:3px;
	}
	.swiper-pagination-bullet i{
		background:#000;
		height:1px;
		width:20px;
		position:absolute;
		top:4px;
		transform:scaleX(0);
		transform-origin:left;
		z-index:3;
		transition-timing-function:linear;
		}
	.swiper-pagination-bullet-active span,.swiper-pagination-bullet:hover span{
		width:9px;
		height:9px;
		margin-top:0;
		margin-left:0;
		background:#000;
		position:relative;
		z-index:1;
		}
	.swiper-pagination-bullet-active i{
		animation:middle 6s;
		}
	.swiper-pagination-bullet:first-child.swiper-pagination-bullet-active i{
		animation:first 6s;
		}
	.swiper-pagination-bullet:last-child.swiper-pagination-bullet-active i{
		animation:last 6s;
		}

</style>
