<template>
  <div class="itemkecheng">
      <h3 v-if="kelist.pro_name !== undefined">
        {{kelist.pro_name}}
        <i class="iconfont icon-shoucang"></i>
      </h3>
      <div class="item-time">
        <div class="item-shang">
          <i class="iconfont icon-shijian"></i>
          <span>{{kelist.pro_timestr}}</span>
        </div>
        <div class="item-hao">
          <span>{{totallist.total}}好评</span>
        </div>
      </div>
      <div class="item-yuyue">
        <span>有效期：{{kelist.pro_active_date_text}}</span> | <span>场地：{{kelist.pro_placestr}}</span>
      </div>
      <div class="item-price">
        <span>{{kelist.pro_price}}</span>
        <span>.0</span>
        <span>元</span>
        <span>原价{{kelist.pro_market_price}}元</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'ItemBxiang',
    props:['kelist','totallist']
}
</script>
<style lang="scss">
.itemkecheng{
  width: 95%;
  margin: 10px auto;
   h3{
     font-weight: normal;
     font-size: 23px;
     display: flex;
     flex-direction: row;
     flex-wrap: nowrap;
     justify-content: space-between;
     margin: 10px 0;
     i{
       font-size: 25px;
     }
   }
   .item-time{
     display: flex;
     flex-direction: row;
     flex-wrap: nowrap;
     justify-content: space-between;
     i{
       margin-right: 8px;
       color:blue;
     }
     .item-hao{
       background:#4cacff;
       border-radius: 18px;
       padding: 3px; 
       font-size: 15px;
       color: #ffffff;
     }
   }
   .item-yuyue{
     margin: 10px 0;
     span{
       font-size: 13px;
     }
   }
   .item-price{
     font-size: 14px;
     span:nth-of-type(1){
       font-size: 20px;
       color:red;
       font-weight: bolder;
     }
     span:nth-of-type(2){
       color:red;
       font-weight: bolder;
     }
     span:nth-of-type(3){
       font-size: 20px;
     }
     span:nth-of-type(4){
       text-decoration: line-through;
       color: rgb(153, 153, 153);
       margin-left: 5px;
     }
   }
}
</style>