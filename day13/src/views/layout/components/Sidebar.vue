<template>
	<div class="sidebar-container">
		 <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose"
			  :collapse="collapse"
		      background-color="#545c64"
		      text-color="#fff"
		      active-text-color="#ffd04b">
			  <template v-for="(item,index) in routes"  v-if="!item.hidden">
				  <template v-if= "item.name=='home'" >
					  <el-menu-item :index="item.path" >
							<router-link to="/home">
							  <i class="icon iconfont my-icon" :class="item.meta.icon"></i>
							  <span >{{item.meta.title}}</span>
						   </router-link>						
					  </el-menu-item>
				  </template>
				  <template v-else>
					 <el-submenu :index="item.name" >
					    <template slot="title" >
					      <i class="icon iconfont my-icon" :class="item.meta.icon"></i>
					      <span>{{item.meta.title}}</span>
					    </template>
					    <el-menu-item-group v-for="(item2,index2) in item.children" :key="index2" v-if="!item2.hidden">		         
					      <router-link :to="item.path+'/'+item2.path">
					  			<el-menu-item :index="item.path+'/'+item2.path">
									<i class="icon iconfont my-icon" :class="item2.meta.icon"></i>
									<span>{{item2.meta.title}}</span>
								</el-menu-item>
					  		</router-link>
					    </el-menu-item-group> 
					  </el-submenu>
				  </template>
			  </template>
		    </el-menu>
	</div>
</template>

<script>
	export default{
		name:'sidebar',
		props:['collapse'],
		data:function(){
			return {
				routes:[],
				
			}
		},
		methods:{
			//菜单打开时触发的函数
			handleOpen(key, keyPath) {
			    console.log(key, keyPath);
			},
			//菜单关闭时触发的函数
			handleClose(key, keyPath) {
			    console.log(key, keyPath);
			}
		},
		mounted:function(){
			console.log(this.$router);
			this.routes = this.$router.options.routes;
			console.log(this.routes);
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.el-menu{border-right:0;}
	.my-icon{margin-right: 10px;}
</style>