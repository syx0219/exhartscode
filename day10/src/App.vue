<template>
  <div id="app">
    <router-view></router-view>
    <div id="nav">
      <MyNav v-if="$route.path == '/'"></MyNav>
      <ItemNav v-else></ItemNav>
    </div>
  </div>
</template>
<script>
import MyNav from '../src/views/MyNav.vue';
import ItemNav from '../src/views/ItemNav.vue';
export default {
  components:{
    MyNav,
    ItemNav
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style:none;
}	
a{
  text-decoration: none;
}	
body{
  width: 100%;
  min-height: 220vh;
  background: #f5f5f5;
}
#app{
  width: 100%;
  height: 100%;
}
#nav{
  position: fixed;
  bottom:0;
  left:0;
  right: 0;
  height: 60px;
  border-top: 1px soli #ccc;
  background: #ffffff;
  z-index: 998;
  a{
	color:#000;
	img{width: 27px; height:27px;}  
	div{height:23px;}
  }
  a:hover{color:#000; text-decoration: none;}
}
</style>
