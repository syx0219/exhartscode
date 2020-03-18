<template>
  <div class="navbar-container">
        <div class="navbar-title">
            <i class="icon iconfont icon-hanbaobao my-hanbao" @click="handleChangeType"
			:class="{'is-active':!this.sidebar.opened}"></i>
            <div class="mianbaodaohang"><Breadcrumb></Breadcrumb></div>
        </div>
        <div class="navbar-img">
            <el-dropdown>
                <div class="user-wrapper ">
                    <img class="user-img" :src="loginimg" alt="userimg">
                     <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>首页</el-dropdown-item>
                    <el-dropdown-item>
                        <span @click="logout">退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import loginimg from '@/assets/images/mz_small_icon.png';
import {mapGetters} from 'vuex';
import Breadcrumb from '@/components/Breadcrumb/index';
export default {
    name:'navbar',
    props:['collapse'],
    data:function(){
        return {
            loginimg,
            isCollapse:true
        }
    },
    computed:{
        ...mapGetters(['sidebar']),
    },
    methods:{
        handleChangeType:function(){
            //将状态提交到actions
            this.$store.dispatch('ToggleSideBar');
        },
        logout:function(){
            console.log('view-45');
            this.$store.dispatch('Logout').then(()=>{
                this.$router.push('/login');
            })
        }
    },
    components:{
        Breadcrumb
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
    .navbar-title{
        width: 60%;
        display: flex;
        .my-hanbao{
            margin-left:20px;
            transform: rotate(0deg);
            transition: 1s;
            transform-origin:50% 50% ;
        }
        .is-active{
            transform: rotate(90deg);
        }
        .mianbaodaohang{
            margin-left:20px;
            .el-breadcrumb{
                line-height: 50px;
            }
        }
	  }

</style>