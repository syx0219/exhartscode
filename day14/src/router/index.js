import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/home/index.vue'
//引入框架页面
import Layout from '../views/layout';

Vue.use(VueRouter)

const routes = [
  {
	  path:'/login',
	  component:()=>import(/*webpackChunkName:"login"*/'@/views/login/index'),
	  name:"login",
	  meta:{title:'登录'},
	  hidden:true
  },
  {
	  path:'/404',
	  component:()=>import(/*webpackChunkName:"404"*/'@/views/404'),
	  name:"404",
	  meta:{title:'404页'},
	  hidden:true
	},
  {
	  path:'',
	  component:Layout,
      redirect:'/home',
      name:'home',
	  meta:{title:'首页',icon:'icon-home'},
	  children:[
		  {
			path:'home',
			name:'myhome',
			meta:{title:"首页",icon:'icon-home'},
			component:()=>import(/*webpackChunkName:"home"*/'@/views/home/index')  
		  }  
	  ]
  },
  {
	  path:'/pms',
	  component:Layout,
	  redirect:'/pms/product',
	  name:'pms',
	  meta:{title:'商品',icon:'icon-shangpin'},
	  children:[
		  {
			  path:'product',
			  name:'product',
			  meta:{title:"商品列表",icon:'icon-liebiao1'},
			  component:()=>import(/*webpackChunkName:"product"*/'@/views/pms/product/index') 
		  },
		  {
			  path:'addproduct',
			  name:'addproduct',
			  meta:{title:"添加商品",icon:'icon-tianjia'},
			  component:()=>import(/*webpackChunkName:"addproduct"*/'@/views/pms/product/add') 
		  },
		  {
			path:'updateproduct',
			name:'updateproduct',
			meta:{title:"修改商品",icon:'icon-tianjia'},
			hidden:true,
			component:()=>import(/*webpackChunkName:"updateproduct"*/'@/views/pms/product/update') 
		},
		  {
			  path:'productCate',
			  name:'productCate',
			  meta:{title:"商品分类",icon:'icon-fenlei1'},
			  component:()=>import(/*webpackChunkName:"productCate"*/'@/views/pms/productCate/index') 
		  },
		  {
			  path:'productAttr',
			  name:'productAttr',
			  meta:{title:"商品类型",icon:'icon-haofangtuo400iconfontzhuzhaileixing'},
			  component:()=>import(/*webpackChunkName:"productAttr"*/'@/views/pms/productAttr/index') 
		  },
		  {
			  path:'brand',
			  name:'brand',
			  meta:{title:"品牌管理",icon:'icon-pinpaitemai'},
			  component:()=>import(/*webpackChunkName:"brand"*/'@/views/pms/brand/index') 
		  }  
	  ]
  }
]

const router = new VueRouter({
  routes
})

export default router
