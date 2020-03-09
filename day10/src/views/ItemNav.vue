<template>
  <div class="itemnav">
      <div class="itemnav-img">
        <img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
      </div>
      <p>联系客服</p>
      <el-row>
        <el-button type="primary">立即购买</el-button>
       </el-row>
  </div>
</template>

<script>
export default {
    name:'ItemNav',
}
</script>

<style lang="scss">
.itemnav{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .itemnav-img{
        width: 30px;
        height: 30px;
        margin: 17px 0;
        img{
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
    p{
        margin:0 10px;
        font-size: 25px;
        line-height: 60px;
    }
    .el-button{
        width: 200%;
        margin: 9px 0;
    }
}
</style>