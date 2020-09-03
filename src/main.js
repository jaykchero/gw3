import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import '@/assets/css/animate.min.css'
Vue.config.productionTip = false
import {goAnchor,GetQueryString} from './assets/js/common.js';
//import Antd from 'ant-design-vue'
import { Menu,Table,Divider,Icon } from 'ant-design-vue';
Vue.use(Menu);
Vue.use(Table);
Vue.use(Divider);
Vue.use(Icon);

// import ajax from './api'
// Vue.prototype.$http =ajax;

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

import 'ant-design-vue/dist/antd.css'
import 'swiper/css/swiper.css'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require('./assets/img/error.png'),
  //加载时显示的GIF图
  loading: require('./assets/img/loading.gif'),
  //尝试加载几次
  attempt: 2
});




new Vue({
  router,
  store,
  render: h => h(App),
   mounted:function(){//解决跳转到新页面不默认固定在顶部的bug

      this.$router.afterEach((to, from, next) => {

          window.scrollTo(0, 0)

      })



    },

     methods:{

        goAnchor,

        GetQueryString,

      },

      watch:{

        '$route.query':function(newVal,oldVal){

          var maodian = newVal.maodian;

          if(maodian){

            this.goAnchor('#'+maodian);

          }

        }

      }

}).$mount('#app')
