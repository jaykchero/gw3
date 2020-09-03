<template>
  <div class="all">

    <div class="header" >
      <div class="header-left ">
       <h2 class="h2 tl1">常见路侧停车方案对比</h2>
       <h3 class="lh3  tl1">Comparison of parking schemes</h3>
       <div class="liness tl1"></div>
      </div>
    </div>
    <div class="context">
       <a-table :columns="columns" :data-source="data" bordered class="c-text">
          <template slot="name" slot-scope="text"  >
            <a>{{ text }}</a>
          </template>
        </a-table>
    </div>

  </div>
</template>
<script>
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {},
  };
  if (index === 4) {
    obj.attrs.colSpan = 0;
  }
  return obj;
};

const data = [
  {
    key: '1',
    project: '单价（元）含施工',
    pxModel: '约3000元',
    dcModel: '约1500元',
    spModel: '6000-30000元',
    mbModel: '约8000元',
    posModel:'约1000元'
  },
  {
    key: '2',
    project: '业务流程难易程度',
    pxModel: '操作简单，随停随走',
    dcModel: '复杂',
    spModel: '一般',
    mbModel: '复杂',
    posModel:'一般'
  },
  {
    key: '3',
   project: '车牌识别率',
   pxModel: '识别准确率>=95%',
   dcModel: '不能识别',
   spModel: '识别准确率不高',
   mbModel: '不能识别',
   posModel:'不能识别'
  },
  {
    key: '4',
   project: '人均车位管理数量',
   pxModel: '75-100车位/每人',
   dcModel: '25车位/每人',
   spModel: '25车位/每人 ',
   mbModel: '25车位/每人',
   posModel:'25车位/每人'
  },
  {
    key: '5',
   project: '维护成本',
   pxModel: '寿命长，无需破路，维护成本非常低',
   dcModel: '寿命短，需要破路,维护成本高',
   spModel: '容易被破坏，需要破路,维护成本高',
   mbModel: '专用设备，维护成本较高',
   posModel:'维护成本低'
  },
  {
    key: '6',
   project: '施工便捷性',
   pxModel: '施工简单，两颗螺丝钉固定即可',
   dcModel: '设备安装施工繁琐，破坏路面',
   spModel: '设备安装施工繁琐，破坏路面',
   mbModel: '设备安装施工繁琐，破坏路面',
   posModel:'无需安装'
  },
  {
    key: '7',
   project: '施工周期',
   pxModel: '10分钟/每台',
   dcModel: '长',
   spModel: '长',
   mbModel: '长',
   posModel:'无'
  },
];

export default {
  data() {
    const columns = [
      {
        title: '项目',
        dataIndex: 'project',
        customRender: renderContent,
      },
      {
        title: '普行云系统停车技术',
        dataIndex: 'pxModel',
        customRender: renderContent,
      },
      {
        title: '地磁模式',

        dataIndex: 'dcModel',
        customRender:renderContent,
      },
      {
        title: '视频桩模式',

        dataIndex: 'spModel',
        customRender: renderContent,
      },
      {
        title: '咪表',
        dataIndex: 'mbModel',
        customRender: renderContent,
      },
      {
        title: 'POS机',
        dataIndex: 'posModel',
        customRender: renderContent,
      },
    ];
    return {
      data,
      columns,
      left:{},
      context:{},
    };

  },
  mounted() {
       this.left = Array.from(document.getElementsByClassName('tl1'))
       document.addEventListener('scroll', this.handleScroll2)
       this.context = Array.from(document.getElementsByClassName('c-text'))
       document.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll2 (evt) {
      for (var i = 0; i < this.left.length; i++) {
        var elem = this.left[i]
        //console.log(elem.className)
        var cN=elem.className
        if (this.isElemVisible(elem)) {

          elem.className=cN+" "+"animated slideInDown"
          // console.log(elem.className)
          this.left.splice(i, 1) // 只让它运行一次
        }
      }
    },


    handleScroll (evt) {
      for (var i = 0; i < this.context.length; i++) {
        var elem = this.context[i]
        //console.log(elem.className)
        var cN=elem.className
        if (this.isElemVisible(elem)) {

          elem.className=cN+" "+"animated slideInUp"
          // console.log(elem.className)
          this.context.splice(i, 1) // 只让它运行一次
        }
      }
    },

    // 判断元素距离窗口的位置
       isElemVisible (el) {
         var rect = el.getBoundingClientRect()
         var elemTop = rect.top + 200 // 200 = buffer
         var elemBottom = rect.bottom
         return elemTop < window.innerHeight && elemBottom >= 0
       }

  }

};
</script>
<style>

  .liness{

      top: 10px;
      position: relative;

      width: 120px;
      height: 0.5px;
      background-color:#2e2e2e;
    }

  .ant-table-thead > tr > th {
        text-align: center !important;
        color: #F79646 !important;
        font-size: 18px;
        font-weight:0
  }
  .ant-table-row > td:nth-child(2) {
        text-align: center !important;
           font-weight: bold;
  }
  .ant-table-row > td {
        text-align: center !important;

  }
th.column-money,
td.column-money {
  text-align: center !important;
}
</style>
<style scoped="scoped">

   body{
     text-align: center;
   }




   .header{
     padding-bottom: 150px;
   }

  .all{
    padding-left: 50px;
    padding-right: 50px;
    margin: 0 auto;
  }
  .h2{
    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
   }
   .lh3{
     margin-top: 20px;
        z-index: 999;
         color: #555;
         text-align: left;
         font-size: 25px;
         line-height: 36px;
          top: -10px;
         font-family: "itcavantgardepro-bk";
         position: relative;
   }
</style>
