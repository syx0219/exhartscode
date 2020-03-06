<template>
  <div class="home">
    <div class="search">
		<div class="search-box">
		<span>厦门
			<i class="iconfont icon-xiala"></i>
		</span>
		<input type="text" placeholder="输入搜索关键词">
	  </div>
    </div>
    <MyBanner :bannerlist="bannerList"></MyBanner>
    <Motion :iconarr="iconArr"></Motion>
	<Jingxuan :jinglist="jingxuanList"></Jingxuan>
	<TopFive :toplist="top5Arr"></TopFive>
  </div>
</template>

<script>
import axios from 'axios';
import MyBanner from '@/components/MyBanner.vue';
import Motion from '@/components/Motion.vue';
import Jingxuan from '@/components/Jingxuan.vue';
import TopFive from '@/components/TopFive.vue';
export default {
  name: 'Home',
  data:function(){
			return {
				top5Arr:[],
				bannerList:[],
				iconArr:[],
				jingxuanList:[],
			}
		},
  components: {
	MyBanner,
	Motion,
	Jingxuan,
	TopFive
  },
	//挂载的函数
	mounted:function(){
		//获取数据
		axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res)=>{
			console.log(res);
			this.top5Arr = res.data.data.CourseTop5;
			this.bannerList = res.data.data.top_ad.list;
			this.iconArr = res.data.data.iconList;
			this.jingxuanList = res.data.data.CourseforYou;
		})
	}
}
</script>
<style lang="scss">
.home{
	height: 100%;
	flex: 1;
}
.search{
  height: 50px;
  background: rgb(0, 75, 158);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  .search-box{
	  line-height: 50px;
	  width: 94%;
	  margin: 0 auto;
	  display: flex;
	  flex-direction: row;
  	}
  span{
	  display: inline-block;
	  width: 20%;
      color: #fff;
	}
  input{
	  width: 80%;
	  height: 30px;
	  font-size: 18px;
	  text-indent: 1em;
	  line-height: 30px;
	  margin: 10px;
	  border: none;
	  border-radius: 5px;
  	}
}
</style>
