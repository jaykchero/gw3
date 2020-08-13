<template>
<div class="fzlc-all">
  <h2 class="h2 tl1">发展历程</h2>
  <h3 class="lh3 tl1">development history</h3>
   <div class="ui-timeLine">
   	<a v-for="(item,index) in items" :key="index"  class="item">
   		<div class="line"></div>
   		<div class="dot"></div>
   		<div class="box">
   			<div class="cbox dh">
   				<div class="date">{{item.date}}</div>
   				<div class="title ">{{item.title}}</div>
   				<div class="types">
   					<span>{{"type"}}</span>
   				</div>
   			</div>
   		</div>
   	</a>
   	<div class="activeLine"></div>
   </div>





</div>

</template>

<script>

  import $ from "jquery"

  export default {

    data () {

      return {
        fadeInElements:[],
        left:{},
        cbox:{},
        items:[
          {
            date:'2017年12月',
            title:'公司成立',
          },
          {
            date:'2018年04月',
            title:'系统方案小批量验证通过',
          },
          {
            date:'2018年08月',
            title:'系统方案批量验证通过',
          },
          {
            date:'2018年12月',
            title:'系统方案大批量生产',
          },
          {
            date:'2019年03月',
            title:'2代产品小批量验证通过',
          },


        ]


      }

    },


    mounted() {

         this.fadeInElements = Array.from(document.getElementsByClassName('tl1'))
      this.left = Array.from(document.getElementsByClassName('dh'))
      document.addEventListener('scroll', this.handleScroll4)
       document.addEventListener('scroll', this.handleScroll)

     		$.fn.uiTimeLine = function() {
     			var $timeLine = $(".ui-timeLine");
     			var $activeLine = $(".ui-timeLine .activeLine");
     			var $dots = $(".ui-timeLine .dot");
     			var $cboxs = $(".ui-timeLine .item .cbox");
     			return this.each(function() {
     				function setActiveLineHeight() {
     					let height = $(document).scrollTop() + window.screen.height;
     					let j = 0;
     					for (let i = 0; i < $dots.length; i++) {
     						if ($($dots[i]).offset().top < height) {
     							$($($dots[i])).addClass("active");
     							$($cboxs[i]).css({
     								"left": 0
     							});
     							j = i;
     						} else {
     							$($($dots[i])).removeClass("active")
     							$($cboxs[i]).css({
     								"left": "100vw"
     							});
     						}
     					}
     					$activeLine.css({
     						"height": $($dots[j]).offset().top - $timeLine.offset().top + 40 + "px"
     					})
     				}
     				$(window).on('scroll', setActiveLineHeight);
     				setActiveLineHeight();
     			})
     		}


    },
    methods:{


      handleScroll4 (evt) {
          for (var i = 0; i < this.left.length; i++) {
            var elem = this.left[i]
           //console.log(elem.className)
            var cN=elem.className
            if (this.isElemVisible(elem)) {

              elem.className=cN+" "+"animated fadeInUp"
              // console.log(elem.className)
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
      }

    }

</script>

<style scoped="scoped">
  .h2{
   text-align: left;
   color: #477e9a;
   font-size: 30px;
   font-weight: bolder;
  }

 .lh3{
   position: absolute;
   top: -2px;

       color: #555;
       text-align: left;
       font-size: 30px;
       line-height: 36px;
       margin: 5px 0 0;
       font-family: "itcavantgardepro-bk";
       position: relative;
 }

</style>
<style scoped="scoped">
  .date{
    color: #F79646;
  }


body{
  text-align: center;
 background-color:#FFFFFF ;
}

.fzlc-all{
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  width: 1200px;
  margin: 0 auto;
}


.ui-timeLine {
	padding: 20px 0;
	position: relative;
	overflow: hidden;
}

.ui-timeLine>.item {
	display: block;
	position: relative;
	text-align: justify;
	text-justify: newspaper;
	word-break: break-all;
	padding-left: 50px;
	color: #fff;
	padding-right: 10px;
}

.ui-timeLine>.item>.box {
	padding: 5px 0;
}

.ui-timeLine>.item .cbox {
	position: relative;
	left: 0vw;
	transition: left 5s;
	padding: 10px;
	border-radius: 10px;
  background-color: #FFFFFF;
/* background-image: linear-gradient(45deg, rgba(0, 200, 255, 0.4) 0%, rgba(132, 43, 171, 0.4) 100%); */
 /* background-image: linear-gradient(45deg, rgba(227, 227, 227, 0.4) 0%, rgba(247,150,70) 100%); */
	box-shadow: 3px 3px 8px #ccc;
}

.ui-timeLine>.item::after {
	content: "";
	display: block;
	clear: both;
}

.ui-timeLine .dot {
	z-index: 100;
	display: inline-block;
	position: absolute;
	left: 22px;
	top: 43px;
	padding: 3px;
	border: 6px solid #477e9a;
	border-radius: 20px;
	background-color: #FFFFFF;
	box-shadow: 3px 3px 8px #477e9a;
	transition: 1s;
}

.ui-timeLine .active {
	border: 3px solid rgba(132, 43, 171, .8);
}

.ui-timeLine .line,
.ui-timeLine>.activeLine {
	position: absolute;
	left: 29px;
	width: 4px;
	height: 100%;
	background-color: #eee;
}

.ui-timeLine .date {
	font-size: 14px;
	font-weight: 900;
}

.ui-timeLine .title {
	font-size: 16px;
	font-weight: 900;
	line-height: 30px;
}

.ui-timeLine .types>span {
	font-size: 10px;
	border-radius: 5px;
	padding: 2px 10px;
	margin-right: 10px;
	border: 1px solid #fff;
}

.ui-timeLine>.activeLine {
	background-color: rgba(0, 200, 255, .8);
	z-index: 50;
	top: 50px;
	height: 0;
	max-height: calc(100% - 80px);
	transition: height 1s;
	box-shadow: 3px 3px 2px #eee;
}
</style>
