<template>
  <div class="home" v-loading="loading">
    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide slide-one" >
        <SwiperIndex ></SwiperIndex>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-two">
      <div class="ani home" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
<!--        <my-adv :title1="adv1.title1" :info="adv1.info" :title2="adv1.title2" :list="adv1.list" :img="adv1.img"></my-adv>-->
        <p class="p">项目经验</p>
        <p>鼠标选中查看详情</p>
        <Protecteds></Protecteds>

      </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-three">
        <div class="ani home" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" >
              <my-adv
               is-to-left=true
              :title1=" adv2.title1" :info="adv2.info" :title2="adv2.title2"
          :list="adv2.list" :img="adv2.img">
          </my-adv>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
  import SwiperIndex from './componets/swiperIndex.vue'
  import myAdv from './componets/adv.vue'
  import * as swiperAni from '../../assets/js/animate.js' //根据自己的路径进行引入
  import Protecteds from '../about/componets/ProjectExperience'


import { swiper, swiperSlide } from "vue-awesome-swiper";
  import $ from 'jquery'
export default {

  components: {
    Protecteds,
    SwiperIndex,
    swiper,
    swiperSlide,
    myAdv,

  },
  data() {
    return {
      screenWidth:'',
      screenHeight:'',
      adv1: {
        title1: '关注微信公众号小程序',
        info: '小程序，公众号无需安装卸载方便快捷，满足不同客户的不同需求。',
        title2: '优势特点',
        img:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%B0%8F%E7%B1%B310u.jpg',
        list: ['1111', '22222', '33333', '4444444444', '55555555', '6666666666666']

      },

      adv2: {
        title1: '关注微信公众号小程序',
        info: '小程序，公众号无需安装卸载方便快捷，满足不同客户的不同需求。',
        title2: '优势特点',
        img: 'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%B0%8F%E7%B1%B310u.jpg',
        list: ['1111', '22222', '33333', '4444444444', '55555555', '6666666666666']

      },

      loading: true,
      caseList: [],
      newsList: [],
      swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
      //  grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
       // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight - 60, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

        pagination: {
                el: '.swiper-pagination1',
                dynamicBullets: true,
                clickable :true,
              },

            on:{
              init: function(){
               swiperAni.swiperAnimateCache(this); //隐藏动画元素
               swiperAni.swiperAnimate(this); //初始化完成开始动画
                 },
                 slideChangeTransitionStart: function(){
                 swiperAni.swiperAnimate(this); //每个slide开始切换时也运行当前slide动画
                   this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
                    }
                },
      }
    };
  },




  created() {},
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },

};
</script>

<style lang="scss" scoped>
  .p{
    font-size: 16px;
    line-height: 20px !important;
  }

.swiper-slide {
  font-size: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;



  .slogan {
    text-align: center;
    font-size: 50px;
    color: #fff;
    padding: 30px 0;
  }
}


.order {
  order: -1;
}
.order-img {
  order: 1;
}
</style>


