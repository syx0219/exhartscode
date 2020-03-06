<template>
  <div class="myitem">
      <div class="item-banner">
          <MyBanner :swiperarr="swiperArr" type="NEXT"></MyBanner>
          <div>
              <h3 v-if="kechengitem.pro_name !== undefined">{{kechengitem.pro_name}}</h3>
          </div>
          <div></div>
          <div></div>
          <p></p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import MyBanner from '@/components/MyBanner.vue';
export default {
    name:'Myitem',
    data:function(){
        return {
            kechengitem:{},
            swiperArr:[]
        }
    },
     components: {
        MyBanner
    },
    mounted:function(){
        console.log(this.$route.params.itemid)
        var pid= parseInt(this.$route.params.itemid);
        //7.获取数据，将数据保存到变量中
        let params = new URLSearchParams();//创建新的查询传参对象
        //接口定义了一些实用的方法来处理 URL 的查询字符串
        params.append('pro_id',pid);
        params.append('fid','');
        axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html",params)
        .then((res)=>{
            console.log(res);
            this.kechengitem = res.data.data;
            console.log(this.kechengitem);
            this.swiperArr = res.data.data.pro_imglist;
            console.log(this.swiperArr);
        })
    }
}
</script>

<style  lang="scss">
.myitem{
    width: 100%;
    .item-banner{
        img{
            width: 100%;
            height: 233px;
            border: none;
        }
    }
}
</style>