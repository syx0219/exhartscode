<template>
  <div id="app">
    <router-view></router-view>
    <div id="nav">
      <router-link to="/">
          <img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
		      <div>首页</div>
      </router-link> 
      <router-link to="/mysearch">
          <img src="https://www.jvhv.com/wap/static/images/footer_6_red.png" />
          <div>发现</div>
      </router-link> 
      <router-link to="/mymessage">
          <img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
		      <div>消息</div>
      </router-link>
      <router-link to="/mine">
        <img src="https://www.jvhv.com/wap/static/images/footer_5_red.png" />
		   <div>我的</div>
      </router-link>
    </div>
  </div>
</template>

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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  z-index: 998;
  a{
	color:#000;
	img{width: 27px; height:27px;}  
	div{height:23px;}
  }
  a:hover{color:#000; text-decoration: none;}
}
</style>
