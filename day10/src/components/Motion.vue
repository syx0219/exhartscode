<template>
  <div class="motion">
      <ul>
          <li v-for="(item,index) in iconarr" :key="index">
            <div>
                <i class="iconfont" :class="item.filtertype"></i>
            </div>
            <span>{{item.CategoryName}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Motion',
    props:['iconarr']
}
</script>
<style lang="scss">
.motion{
    margin: 10px 0;
    background: #ffffff;
    ul{
        width: 95%;
        margin: 5px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li{
            width: 17%;
            margin: 5px;
            div{
                width: 100%;
                height: 50px;
                background: orange;
                border-radius: 10px;
            }
            i{
                font-size: 27px;
                line-height: 50px;
                margin: 0 16px;
            }
            span{
                font-size: 14px;
                margin-left: 10px;
            }
        }
    }
}
</style>