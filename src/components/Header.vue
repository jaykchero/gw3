/* eslint-disable */
<template>
  <div v-bind:class="{'header-fixd animated fadeInDown all-background-color':isScroll=='1',' ':isScroll==0}">
<div class="h-all" v-bind:class="{'animated fadeInDown':isReadyonly=='1',' ':isReadyonly!='1'}">
<div class="h-top " >

   <div class="h-logo " >

      <i class="logo"></i>
   </div>

   <div class="h-header ">
 <a-menu v-model="current" mode="horizontal" router :default-active="$route.path" v-bind:class="{'header-menu':isScroll=='1',' ':isScroll==0}">
      <a-sub-menu index="1">
        <span slot="title" class="submenu-title-wrapper " @click="dhcli"
          > <router-link to="/home">首页</router-link></span
        >

      </a-sub-menu>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"  @click="dhcli"
          > <router-link to="/about">关于我们</router-link></span
        >
        <a-menu-item-group >
           <a-menu-item key="setting:1">
            <span>
              <a :href="'#/about?maodian=about1'">公司介绍</a>
             <!-- <a href="/about/#about1">公司简介</a> -->
            <!-- <router-link to="/about?maodian=about1">公司简介</router-link> --></span>
           </a-menu-item>
           <a-menu-item key="setting:2">
            <span
              >
              <!-- <a href="/about/#culture">普行文化</a> -->
              <!-- <router-link to="/about?maodian=culture">普行文化</router-link> -->
               <a :href="'#/about?maodian=culture'">普行文化</a>
              </span>
           </a-menu-item>


<!--           <a-menu-item key="setting:4">-->
<!--            <span-->
<!--              > <router-link to="#/about">知识产权</router-link></span>-->
<!--           </a-menu-item>-->
           <a-menu-item key="setting:5">
             <a :href="'#/about?maodian=ProjectExperience'">项目经验</a>

           </a-menu-item>

          <a-menu-item key="setting:3">
            <span>
            <a :href="'#/about?maodian=DevelopmentHistory'">发展历程</a>
              <!-- <a href="/about/#DevelopmentHistory">普行文化</a> -->
           </span>
          </a-menu-item>

         </a-menu-item-group>

      </a-sub-menu>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper" @click="dhcli"
          > <router-link to="/solution">解决方案</router-link></span>
        <a-menu-item-group >
           <a-menu-item key="setting:1">
            <span>
               <a :href="'#/solution?maodian=PainsOfTrade'">行业痛点</a>
              </span>
           </a-menu-item>
           <a-menu-item key="setting:2">
            <span>
             <a :href="'#/solution?maodian=ProjectConstructionIdeas'">建设思考</a>
           </span>
           </a-menu-item>

           <a-menu-item key="setting:3">
           <span>
             <a :href="'#/solution?maodian=Comparisonschemes'">方案对比</a>
           </span>
           </a-menu-item>

           <a-menu-item key="setting:4">
           <span>
             <a :href="'#/solution?maodian=EquipmentDisplay'">设备展示</a>
           </span>
           </a-menu-item>



         </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper" @click="dhcli"
          > <router-link to="/puxingSmartParking">普行停车</router-link></span>
        <a-menu-item-group >
           <a-menu-item key="setting:1">
             <a :href="'#/puxingSmartParking?maodian=t1'">停车系统</a>
           </a-menu-item>
           <a-menu-item key="setting:2">
              <a :href="'#/puxingSmartParking?maodian=t2'">社会效益</a>
           </a-menu-item>

           <a-menu-item key="setting:3">
             <a :href="'#/puxingSmartParking?maodian=t3'">经济效益</a>
           </a-menu-item>
           <a-menu-item key="setting:4">
             <a href="http://www.ptyibo.com/#/login" target="_blank">员工登录</a>
           </a-menu-item>
         </a-menu-item-group>
      </a-sub-menu>


    </a-menu>


   </div>



</div>
</div>
</div>
</template>

<script>

   // import $ from 'jquery'


  export default{


      data() {
          return {
            current: ['mail'],
            allDH:[] ,//动画
            isReadyonly:0,
            timer:0,
            timer1:0,
            timer2:0,
            timer3:0,
            header:[],
           // $header:{},
            isScroll:0,
          };
        },

        mounted() {

          //this.header = Array.from(document.getElementsByClassName('h-all'))

          // 监听鼠标滚动事件
          document.addEventListener('scroll', this.handleScroll)
          document.addEventListener('scroll', this.handleScroll1)

          this.isReadyonly=0;
           this.allDH = Array.from(document.getElementsByClassName('h-all'))

           document.addEventListener('scroll', this.handleScroll3)
             for (var i = 0; i < this.allDH.length; i++) {
               var elem = this.allDH[i]
               //console.log(elem.className)
               var cN=elem.className
               if (this.isElemVisible(elem)) {
                 elem.className=cN+" "+"animated slideInDown"

                  this.allDH.splice(i, 1) // 只让它运行一次

               }
             }

             clearTimeout(this.timer1);  //清除延迟执行

              this.timer1 = setTimeout(()=>{   //设置延迟执行
                  this.isReadyonly=1;
              },100);

        },
        methods:{
                      //实现导航吸顶
                      handleScroll1 (evt) {

                        this.timer3 = setTimeout(()=>{   //设置延迟执行

                        var currentTop  = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                       // console.log('currentTop===='+currentTop)
                        if( currentTop > 72){
                              // clearTimeout(this.timer2);  //清除延迟执行

                               // this.timer2 = setTimeout(()=>{   //设置延迟执行
                                    this.isScroll=1;
                              //  },10);

                             } else if (currentTop === 0) {
                                this.isScroll=0;
                             }

                             else {
                                    this.isScroll=0;
                               //console.log(this.isScroll)
                             }
                               },10);

                      },

          // 判断元素距离窗口的位置
             isElemVisible (el) {
               var rect = el.getBoundingClientRect()
               var elemTop = rect.top + 200 // 200 = buffer
               var elemBottom = rect.bottom
               return elemTop < window.innerHeight && elemBottom >= 0
             },



             dhcli(){
               this.isReadyonly=0;
               clearTimeout(this.timer);  //清除延迟执行
             // console.log('===='+this.isReadyonly)
               this.timer = setTimeout(()=>{   //设置延迟执行
                   this.isReadyonly=1;
               },100);
             // console.log('===='+this.isReadyonly)
             }


        }


  }



</script>

<style>

  .logo{

    display: inline-block;
    visibility: inherit;
    width: 120px;
    background: url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/logo2.1e9151c5.png) 0 30%/100% no-repeat scroll;
    height: 70px;

  }

  .ant-menu-item a:hover{
    color: #0080FF !important;
  }

 .ant-menu-item-active{
  color: #0080FF !important;
}

.ant-menu-submenu-open , .ant-menu-submenu-active,.ant-menu-submenu-selected {border-bottom: 0px !important; }

.header-menu{
  background-color: #eee !important;
}


.header-fixd{
    width: 100%;
    height: 65px;
    position:fixed !important;
    top:0px;
    background-color: #eee ;
    z-index: 10;
    margin-bottom: 150px;
  }
/*
  .header-xs{
    opacity: 0;
    transition: 0.5s all ease-out;
    transform: scale(0.8);
  } */

  .h-top{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;

  }

  .h-logo{
    font-size: 30px;
    display: flex;
    float: right;

  }

  .h-top ul{
    display: flex;
    float: right;
  }


 .h-top ul li:first-child{
    margin-left: 0px;

  }

  a{
     color: #4e4e4e !important;
  }



 .submenu-title-wrapper .active{
  font-size: 20px;
  color: #477e9a!important;
 /* border-bottom: 0.5px solid #477e9a; */
  display: block;
  line-height: 46px;
   width: 80px !important;


  }


  .submenu-title-wrapper{
      color:  #4e4e4e;

  }

  .ant-menu-horizontal.active{
      color: #1073d8

  }

</style>
