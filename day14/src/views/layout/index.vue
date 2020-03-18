<template>
	<div class="app-wrapper">
		<Sidebar class="sidebar-container" :class="this.sidebar.opened?'sidebar-width':'sidebar-width1'"></Sidebar>
		<div class="main-container" :class="this.sidebar.opened?'main-width':'main-width1'">
			<Navbar></Navbar>
			<AppMain></AppMain>
		</div>
	</div>
</template>

<script>
	//引入 左侧，头部，主体部分的组件
	import Sidebar from './components/Sidebar';
	import Navbar from  './components/Navbar';
	import AppMain from './components/AppMain';
	import {mapGetters} from 'vuex';
	export default {
		name:'layout',
		data:function(){
			return {
				isCollapse: false
			}
		},
		computed:{
			...mapGetters(['sidebar'])
		},
		components:{
			Sidebar,
			Navbar,
			AppMain
		}
	}
</script>
<!-- scoped="scoped" 表示以下css只在该页面起作用
lang="scss" 以下css使用 scss语法
-->
<style lang="scss"  scoped="scoped">
	#app{
		.app-wrapper{
			position: relative;
			height:100%;
			width: 100%;
			.sidebar-container{
				height: 100%;
				position: fixed;
				top:0;
				left:0;
				bottom:0;
				overflow: hidden;
				background: #304156;
				color:#fff;
			}
			.main-container{
				clear:both;
				min-height: 100%;
				.navbar-container{
					height: 50px;
					background: lightgoldenrodyellow;
					line-height: 50px;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: space-between;
					border-bottom:1px solid #ccc;
				}
				.main-con{
					width:100%;
					min-height:100%;
					//background: lightcyan;
				}
			}
		}
		.sidebar-width{
			width: 180px;
		}
		.main-width{
			margin-left: 180px;
		}
		/*当=菜单收起时需要修改样式*/
		.sidebar-width1{
			width: 64px;
		}
		.main-width1{
			margin-left: 64px;
		}
	}
</style>
