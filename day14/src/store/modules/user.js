//引入的登录接口
import {login} from '@/api/login';
//登录信息保存在cookie中
import {getCookie,setCookie,removeCookie} from '@/utils/support';
//创建 user的 store  
const user = {
	state:{
		token:getCookie('loginToken'),//token 的数据
		name:getCookie('name')//登录的用户的真实姓名
	},
	mutations:{//修改store中的状态值
		SET_TOKEN:(state,token) =>{
			state.token = token
		},
		SET_NAME:(state,name) =>{
			state.name = name
		},
	},
	actions:{//动作
		//登录
		Login({commit},userInfo){
			console.log(userInfo);
			const username = userInfo.username.trim();
			const password = userInfo.password.trim();
			return new Promise((resolve,reject)=>{
				//调用 login的后台接口
				login(username,password).then(res=>{
					console.log(res);
					//将返回的数据保存到 cookie中
					const tokenStr = res['userid']+"-345hjkkhk245khhk3534khlhk36435-"+res['encryption'];
					setCookie('loginToken',tokenStr,15);
					setCookie('name',res['name'],15);
					setCookie('username',username,15);
					//去写一下 store中的state
					commit('SET_TOKEN',tokenStr);
					commit('SET_NAME',res['name']);
					
					resolve();
				}).catch(error=>{
					reject(error);
				});
				
			})
		},
		Logout({commit}){
			console.log('logout-48');
			return new Promise(resolve=>{
				commit('SET_TOKEN','');
				commit('SET_NAME','');
				removeCookie('loginToken');
				removeCookie('name');
				removeCookie('username');
				resolve();
			})
		}	
		
	}
}
export default user;