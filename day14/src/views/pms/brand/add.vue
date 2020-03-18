<template>
  <div>品牌的添加页面</div>
</template>

<script>
export default {
    name:'addbrand',
    data:function(){
        return {
            brand:{//品牌需要提交的数据
                big_pic: '',//图片地址
                brand_story: '',//品牌故事
                factory_status: 0,//品牌制造商
                first_letter: '',//品牌首字母
                logo: '',//品牌的标识
                name: '',//品牌的名称
                show_status: 0,//是否显示
                sort: 0//排序
            }
        }
    }
}
</script>

<style>

</style>