<template>
<div>
 <div class="suspension">
 	<div class="suspension-box">
 		<a href="#" class="a a-service "><i class="i"></i></a>
 		<a href="javascript:;" class="a a-service-phone "><i class="i"></i></a>
 		<a href="javascript:;" class="a a-qrcode"><i class="i"></i></a>
 		<a href="#" class="a a-cart"><i class="i"></i></a>
 		<a href="javascript:;" class="a a-top"><i class="i"></i></a>
 		<div class="d d-service">
 			<i class="arrow"></i>
 			<div class="inner-box">
 				<div class="d-service-item clearfix">
 					<a href="#" class="clearfix"><span class="circle"><i class="i-qq"></i></span><h3>咨询在线客服</h3></a>
 				</div>
 			</div>
 		</div>
 		<div class="d d-service-phone">
 			<i class="arrow"></i>
 			<div class="inner-box">
 				<div class="d-service-item clearfix">
 					<span class="circle"><i class="i-tel"></i></span>
 					<div class="text">
 						<p>客服热线</p>
 						<p class="red number">0755-23286587</p>
 					</div>
 				</div>
 				<!-- <div class="d-service-intro clearfix">
 					<p><i></i>功能和特性</p>
 					<p><i></i>价格和优惠</p>
 					<p><i></i>获取内部资料</p>
 				</div> -->
 			</div>
 		</div>
 		<div class="d d-qrcode">
 			<i class="arrow"></i>
 			<div class="inner-box">
 				<div class="qrcode-img"><img src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/1598768066%281%29.png" style="	height: 180px; width: 180px;" alt=""></div>
 				<p>微信公众号</p>
 			</div>
 		</div>

 	</div>
 </div>
 </div>
</template>
<script>

  import $ from 'jquery'
export default {


  data() {
    return {
      current: ['mail'],
    };
  },

  mounted() {
    /* ----- 侧边悬浮 ---- */
    	$(document).on("mouseenter", ".suspension .a", function(){
    		var _this = $(this);
    		var s = $(".suspension");
    		var isService = _this.hasClass("a-service");
    		var isServicePhone = _this.hasClass("a-service-phone");
    		var isQrcode = _this.hasClass("a-qrcode");
    		if(isService){ s.find(".d-service").show().siblings(".d").hide();}
    		if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
    		if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
    	});
    	$(document).on("mouseleave", ".suspension, .suspension .a-top", function(){
    		$(".suspension").find(".d").hide();
    	});
    	$(document).on("mouseenter", ".suspension .a-top", function(){
    		$(".suspension").find(".d").hide();
    	});
    	$(document).on("click", ".suspension .a-top", function(){
    		$("html,body").animate({scrollTop: 0});
    	});
    	$(window).scroll(function(){
    		var st = $(document).scrollTop();
    		var $top = $(".suspension .a-top");
    		if(st > 400){
    			$top.css({display: 'block'});
    		}else{
    			if ($top.is(":visible")) {
    				$top.hide();
    			}
    		}
    	});
  }
};
</script>

<style scoped src="../../assets/css/style.css">
	img{
	
		
		margin-bottom: 100px;		
	}


</style>
