<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <Header class="header"></header>
    <div class="lines"></div>
    <backtop></backtop>

   <!-- <transition enter-active-class="animated fadeInUp"> -->
       <transition >
      <router-view/>
    </transition>

  </div>
</template>

<script>
   import Header from './components/Header.vue'
  import home from './views/home/home.vue'
  import backtop from './views/backtop/backtop.vue'

   export default{
   //  name:'Header',
     components:{
       Header,
       backtop,

     },



     // date(){
     //   return {
     //     currentClass:"fadeInDown animated",
     //   }

     // },

     // watch:{
     //   "$route":function(to,from){
     //     var toLength = to.path.split("/").length;
     //     var fromLength = from.path.split("/").length;
     //      console.log(toLength,to);
     //       console.log(fromLength,from);
     //     if(toLength>fromLength){
     //        this.currentClass="fadeInLeft animated";
     //     }else if(toLength<fromLength){
     //        this.currentClass="fadeInRight animated";
     //     }

     //   }

     // }

  }

</script>



<style lang="less">
  .header{
   // background-color: #eee;
    height: 65px;
   // margin-bottom: 5px;
  }
  .lines{
    height: 1.5px;
    width: 100%;
    background-color: #477e9a;
  }


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}



</style>
