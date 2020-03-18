//路由守卫  ,全局守卫
import router from './router';
import store from './store';
import {getCookie} from '@/utils/support';

//白名单 ,哪些页面不需要守卫  login
const whiteList = ["/login"];
router.beforeEach((to,from,next)=>{
	console.log('执行了守卫');
	
	if(getCookie('loginToken') && getCookie('loginToken').indexOf('345hjkkhk245khhk3534khlhk36435')){//已经登录了
		console.log('per-12');
		if(to.path === '/login'){
			console.log('per-14');
			next('/home');
		}else{
			console.log('per-17');
			next();
		}
	}else{//没登录
	console.log('per-19');
		if(whiteList.indexOf(to.path) !== -1){//不需要登录就可以访问的页面
			next();
		}else{
			next('/login');
		}
	}
	//next();
})
