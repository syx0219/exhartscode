<template>
  <div class="mybanner swiper-container">
      <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in swiperlist" :key="index">
              <img v-if="type == 'MAIN'" :src="item.adlist_img">
              <img v-else :src="item.url"  :alt="item.adtitle">
          </li>
      </ul>
      <div class="swiper-pagination" ></div>
  </div>
</template>
<script>
import Swiper from 'swiper';
export default {
  props:['swiperlist','type'],
  name: 'MyBanner',
  mounted:function(){
  var mySwiper = new Swiper('.swiper-container', {
  			pagination : '.swiper-pagination',
  			observer:true,
  			observeParents:true,
        autoplay:{
        	delay:2000,
        	disableOnInteraction: false,
        },
        loop:true,
        initialSlide :1,
    })
  }
}
</script>

<style lang="scss">
.mybanner{
    height: 170px;
    img{
        border: none;
        width: 100%;
        height: 100%;
    }
}
</style>
  


