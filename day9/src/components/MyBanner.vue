<template>
  <div class="mybanner">
    <div class="swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide" v-for="(item,index) in swiperarr" :key="index">
          <img v-if="type == 'MAIN'" :src="item.adlist_img" >
          <img v-else :src="item.url" >
          </li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'
export default {
  name: 'MyBanner',
  props:['swiperarr','type'],
  mounted:function(){
    var mySwiper = new Swiper('.swiper-container', {
      pagination : '.swiper-pagination',
      autoplay: 2000,//可选选项，自动滑动
      initialSlide :1,
      loop:true
    })
  }
}
</script>
<style scoped lang="scss">
.mybanner{
  margin-top: 3px;
  height: 170px;
  img{
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
