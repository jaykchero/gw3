<template>
    <div class="i-all">
        <div class="i-header">
          <h2 class="h2 tl1">项目经验</h2>
          <h3 class="lh3 tl1">Project Experience</h3>
        </div>
      <div>

        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img v-lazy="pt" >
                <div class="box-content">
                  <h3 class="title">莆田</h3>
                  <span class="post">项目已经落地</span>
                </div>
                <ul class="icon">
                  <li><a href="#">更多<i class="fa fa-search"></i></a></li>
<!--                  <li><a href="#"><i class="fa fa-link"></i></a></li>-->
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img v-lazy="bj" >
                <div class="box-content">
                  <h3 class="title">北京</h3>
                  <span class="post">正在洽谈落地事宜...</span>
                </div>
                <ul class="icon">
                  <li><a href="#">更多<i class="fa fa-search"></i></a></li>
<!--                  <li><a href="#"><i class="fa fa-link"></i></a></li>-->
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img v-lazy="hk" >
                <div class="box-content">
                  <h3 class="title">香港</h3>
                  <span class="post">正在洽谈落地事宜...</span>
                </div>
                <ul class="icon">
                  <li><a href="#">更多<i class="fa fa-search"></i></a></li>
<!--                  <li><a href="#"><i class="fa fa-link"></i></a></li>-->
                </ul>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img v-lazy="heb" >
                <div class="box-content">
                  <h3 class="title">哈尔滨</h3>
                  <span class="post">正在洽谈落地事宜...</span>
                </div>
                <ul class="icon">
                  <li><a href="#">更多<i class="fa fa-search"></i></a></li>
<!--                  <li><a href="#"><i class="fa fa-link"></i></a></li>-->
                </ul>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img v-lazy="wz" >
                <div class="box-content">
                  <h3 class="title">梧州</h3>
                  <span class="post">正在洽谈落地事宜...</span>
                </div>
                <ul class="icon">
                  <li><a href="#">更多<i class="fa fa-search"></i></a></li>
<!--                  <li><a href="#"><i class="fa fa-link"></i></a></li>-->
                </ul>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="box">
                <img v-lazy="dl" >
                <div class="box-content">
                  <h3 class="title"> 大连</h3>
                  <span class="post">正在洽谈落地事宜...</span>
                </div>
                <ul class="icon">
                  <li><a href="#">更多<i class="fa fa-search"></i></a></li>
<!--                  <li><a href="#">详情<i class="fa fa-link"></i></a></li>-->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
</template>

<script>
export default {
    data() {
        return {
          pt:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/protect/putian.jpg",
          bj:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/protect/beijing.jpg',
          heb:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/protect/haerbing.jpg',
          wz:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/protect/wuzhou.jpg',
          hk:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/protect/hongkong.jpg',
          dl:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/protect/dalian.jpg',

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">


  img{
    width: 300px;
    height: 200px;
  }
  .container{
    margin-top: 20px;
  }

  .i-all{
    padding-left: 50px;
    padding-right: 50px;
  }

  .h2{
    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
  }


  .lh3{
    color: #555;
    text-align: left;
    font-size: 25px;
    line-height: 36px;
    font-family: "itcavantgardepro-bk";
    position: relative;
  }


  .box{
    font-family: 'Ubuntu', sans-serif;
    position: relative;
    overflow: hidden;
  }
  .box:before{
    content: '';
    background: linear-gradient(45deg,rgba(103,178,111,0.6), rgba(76,162,205,0.6));
    height: 100%;
    width: 100%;
    opacity: 0;
    filter: blur(10px);
    transform: scale(1) rotate(180deg);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    transition: all 0.4s ease-in-out;
  }
  .box:hover:before{
    box-shadow: 0 0 10px 2px #555;
    opacity: 1;
    filter: blur(0);
    transform: scale(0.92, 0.9) rotate(0);
  }
  .box img{
    width: 100%;
    height: auto;
    transition: all 0.5s ease-in-out;
  }
  .box:hover img{ transform: scale(1.9) rotate(45deg); }
  .box .box-content{
    color: #fff;
    text-align: center;
    width: 100%;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) scale(3);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transition: all 0.5s ease;
  }
  .box:hover .box-content{
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
  .box .title{
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0;
  }
  .box .post{
    font-size: 16px;
    text-transform: capitalize;
  }
  .box .icon{
    padding: 0;
    margin: 0;
    list-style: none;
    filter: blur(10px);
    transform: scale(0);
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 2;
    transition: all 0.5s ease 0.2s;
  }
  .box:hover .icon{
    transform: scale(1);
    filter: blur(0);
  }
  .box .icon li{ display: inline-block; }
  .box .icon li a{
    color: #fff;
    background: rgba(255,255,255,0.2);
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 40px;
    margin: 0 3px;
    display: block;
    position: relative;
    transition: all 0.3s;
  }
  .box .icon li a:hover{
    text-shadow: 0 0 6px #555;
    box-shadow: 0 0 5px #555;
  }
  @media only screen and (max-width:990px){
    .box{ margin-bottom: 30px; }
  }
  @media only screen and (max-width:479px){
    .box .title{ font-size: 20px; }
  }

</style>
