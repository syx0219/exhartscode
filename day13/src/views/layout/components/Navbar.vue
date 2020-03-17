<template>
  <div class="navbar-container">
        <div class="navbar-title">
            <!-- <el-radio-group v-model="collapse">
                <el-radio-button :label="collapse">收起</el-radio-button>
            </el-radio-group> -->
            首页
        </div>
        <div class="navbar-img">
            <el-dropdown>
                <div class="user-wrapper ">
                    <img class="user-img" :src="loginimg" alt="userimg">
                     <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>首页</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import loginimg from '@/assets/images/mz_small_icon.png'
export default {
    name:'navbar',
    props:['collapse'],
    data:function(){
        return {
            loginimg,
            isCollapse:true
        }
    }
}
</script>

<style lang="scss" scoped="scoped">
    .user-img{
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin-top: 5px;
        margin-right: 5px;
    }
</style>