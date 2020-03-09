<template>
  <div class="nav">
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
</template>

<script>
export default {

}
</script>

<style lang="scss">
.nav{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
}
</style>