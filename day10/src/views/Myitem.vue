<template>
  <div class="myitem">
      <div class="item-banner">
           <MyBanner :swiperlist="swiperArr"  type="NEXT"></MyBanner> 
            <ItemKe :kelist="kechengitem" :totallist="goodList"></ItemKe>
      </div>
      <div class="yuyue">
          <ItemYu :kelist="kechengitem" :yuyuearr="yuyueList"></ItemYu>
      </div>
      <div class="yuyue">
          <ItemLan :jiaolianarr="jiaolianList">
              <JiaoLan :jiaolianarr="jiaolianList"></JiaoLan>
          </ItemLan>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import MyBanner from '@/components/MyBanner.vue';
import ItemKe from '@/components/ItemKe.vue';
import ItemYu from '@/components/ItemYu.vue';
import ItemLan from '@/components/ItemLan.vue';
import JiaoLan from '@/components/JiaoLan.vue';
export default {
    name:'Myitem',
    data:function(){
        return {
            kechengitem:{},
            swiperArr:[],
            goodList:{},
            yuyueList:[],
            jiaolianList:[],
        }
    },
     components: {
           MyBanner,
           ItemKe,
           ItemYu,
           ItemLan,
           JiaoLan
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
            // console.log(this.swiperArr);
            this.goodList = res.data.data.comment.list;
            // console.log(this.goodList);
            this.yuyueList = res.data.data.pro_gym_list;
            this.jiaolianList = res.data.data.pro_coach_list;
            console.log(this.jiaolianList);

        })
    }
}
</script>
<style  lang="scss">
.myitem{
    width: 100%;
    .item-banner{
        background: #ffffff;
        padding-bottom: 8px;
        img{
            width: 100%;
            height: 233px;
            border: none;
        }
    }
    .yuyue{
        margin-top: 10px;
        background: #ffffff;
        padding: 8px 0;
    }
}
</style>