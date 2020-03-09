<template>
  <div class="itemlan">
      <h3>可预约教练</h3>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="二星" name="first">
            <slot></slot>
        </el-tab-pane>
        <el-tab-pane label="三星" name="second"></el-tab-pane>
        <el-tab-pane label="四星" name="third"></el-tab-pane>
        <el-tab-pane label="五星" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import JiaoLian from './JiaoLan.vue';
export default {
    name:'ItemLan',
    props:['jiaolianarr'],
    data() {
      return {
          activeName:'first',
          twoStar:[],
      };
    },
    components:{
        JiaoLian
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    
    }
}
</script>

<style lang="scss">
.itemlan{
    width: 95%;
    margin: 0 auto;
    h3{
        font-weight: normal;
        font-size: 23px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin: 10px 0;
    }
    
    .el-tabs__nav-scroll{
        background: rgb(223, 243, 255);
        padding-left: 10px;
        .el-tabs__item{
            font-size: 20px;
            font-weight:bolder;
            color: #004b9e;
        }
        .el-tabs__active-bar{
            background:#004b9e;
        }
    }
    
}
</style>