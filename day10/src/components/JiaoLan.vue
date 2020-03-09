<template>
  <div class="jiaolian" >
      <ul v-bind="$attrs">
        <li class="jiao-msg" v-for="(item,index) in jiaolianarr" :key="index">
            <div class="jiaolian-img">
                <img :src="item.coach_headImg[0].url" >
            </div>
            <p>{{item.coach_name}}</p>
            <div>评星等级：{{item.coach_grade}}</div>
            <div>
                <span>好评率{{item.coach_goodrate}}%</span>
                <span>已上课{{item.coach_times}}节</span>
            </div>
            <hr>
            <div>
                <span>擅长领域  {{item.coach_distance}}千米</span>
            </div>
            <div>
                <span v-for="(hob,index) in item.coach_options" :key="index">{{hob}}|</span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'JiaoLian',
    props:['jiaolianarr'],
}
</script>

<style lang="scss">

</style>