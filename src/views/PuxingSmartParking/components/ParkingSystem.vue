<template>
  <div class="ps-all">
      <div class="ps-header tl2  ">
        <h2 class="h2 tl2 animated slideInUp">智能云停车系统介绍</h2>
        <h3 class="lh3 tl2 animated slideInUp">Cloud Parking System</h3>
      </div>

      <div class="ps-context">
        <div class="sp-c-left">
          <div class="cl1 tl1">
             <img class="lii" src="http://qexz4xnye.hn-bkt.clouddn.com/ps-w.jpg" alt="">
           <p>
             云算法
             智能识别车牌
           </p>
          </div>

            <svg t="1597372437235" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6216" width="32" height="32"><path d="M489.90890885 1017.28884579l-1e-8-662.73273745L551.27305136 354.55610835 551.27305136 1017.28884579l-61.36414251-2e-8z" fill="#14679f" p-id="6217"></path><path d="M306.28092891 358.28692148L515.86227332 1.43220042l215.24570478 356.85472106-424.82704919 0z" fill="#14679f" p-id="6218"></path></svg>

          <div class="cl2 tl1">
            <img class="lii" src="http://qexz4xnye.hn-bkt.clouddn.com/ps-w.jpg" alt="">
            <p>
              车辆图片
              拍照上传
            </p>

          </div>
            <svg t="1597372437235" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6216" width="32" height="32"><path d="M489.90890885 1017.28884579l-1e-8-662.73273745L551.27305136 354.55610835 551.27305136 1017.28884579l-61.36414251-2e-8z" fill="#14679f" p-id="6217"></path><path d="M306.28092891 358.28692148L515.86227332 1.43220042l215.24570478 356.85472106-424.82704919 0z" fill="#14679f" p-id="6218"></path></svg>

          <div class="cl3 tl1">
             <img class="lii" src="http://qexz4xnye.hn-bkt.clouddn.com/ps-w.jpg" alt="">
            <p>车辆进出检测</p>
          </div>
          <h3 class="h3 tl1" style="height: 80px;  margin-top: -80px; margin-right: 170px;">车牌采集</h3>
        </div>

           <div class="sp-c-center tl1">

             <svg t="1597372713399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11166" width="48" height="48"><path d="M486.4 0h51.2v1024H486.4z" fill="#F79646" p-id="11167"></path></svg>
             <br>
             <svg t="1597372713399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11166" width="48" height="48"><path d="M486.4 0h51.2v1024H486.4z" fill="#F79646" p-id="11167"></path></svg>
              <br>
             <svg t="1597372713399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11166" width="48" height="48"><path d="M486.4 0h51.2v1024H486.4z" fill="#F79646" p-id="11167"></path></svg>
              <br>
              <svg t="1597372713399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11166" width="48" height="48"><path d="M486.4 0h51.2v1024H486.4z" fill="#F79646" p-id="11167"></path></svg>
               <img class="lii" src="http://qexz4xnye.hn-bkt.clouddn.com/product_group_3_img.png" alt="">
               <h3 class="h3 tl1" style="margin-top: -10px;">云监管平台</h3>
           </div>
      </div>

      <div class="ps-bottom">
        <div class="b-img tl1"><img class="lii" src="http://qexz4xnye.hn-bkt.clouddn.com/product_group_3_img.png" alt=""></div>
        <div class="b-b tl1"><h3 class="h3">巡查端辅助运营管理</h3></div>
      </div>

  </div>
</template>

<script>

  export default {

    data () {
      return {
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


      .lii{
          transition: all .5s ease;
      }

      .lii:hover{
        -webkit-transform: scale(1.2);
      	  -moz-transform: scale(1.2);
      			transform: scale(1.3);
      }


      .b-img img {
        margin: 0 auto;
        width: 413px;
        height: 416px;
      }
      .sp-c-right img {
        width: 300px;
        height: 450px;
        position: absolute;
         top: 20px;
      }

     .sp-c-center img {
       margin-left: 100px;
          position: absolute;
           top: 0px;
        width: 450px;
        height: 450px;
     }

    .sp-c-center svg{
        margin-top: 70px;
       margin-left: -600px;
     }

     .sp-c-left svg{
        margin-left: -530px;
      }
      .sp-c-left img{

        width: 140px;
        height: 140px;
        margin-left: 150px;
         float: left;
      }
      .sp-c-left p{
        color: #1667a0;
        padding-left: 20px;
        padding-top: 50px;
        width: 130px;
        height: 150px;
         float: left;
      }


        .cl1 , .cl2 ,.cl3{

          height: 150px;

        }

      .sp-c-left  {
        float: left;
        width: 550px;
        height: 400px;

      }
      .sp-c-center  {
         float: left;
        width: 550px;
        height: 600px;

      }


    .lh3{
          color: #555;
          text-align: left;
          font-size: 30px;
          line-height: 36px;
          margin: 5px 0 0;
          font-family: "itcavantgardepro-bk";
          position: relative;
    }
    .h3{
          color: #555;
           text-align: center;
          font-size: 20px;
          line-height: 10px;

          font-family: "itcavantgardepro-bk";
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
        height: 500px;
        /* background-color: red; */
    }
    .ps-bottom{
      text-align: center;
      height: 600px;
      width: 1200px;
    }

</style>
