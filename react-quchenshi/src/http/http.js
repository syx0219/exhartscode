//封装  axios的
import axios from 'axios';
import qs from 'qs';//对传到后台的参数进行序列化的

//默认地址
const base = "";//如果不需要跨域,或者是服务器环境,需要将地址写在这里

//请求拦截前的配置
axios.interceptors.request.use(
	config=>{
		return config;
	},
	err=>{
		console.log("请求出错");
		return  Promise.reject(err);
	}
)


//返回后的拦截
axios.interceptors.response.use(
	data=>{
		return data
	},
	err=>{
		if(err.response.status === 404){
			console.log("页面地址出错!");
		}else if(err.response.status === 401){
			console.log("登录信息失败,请求的参数有问题!");
		}else if(err.response.status === 504  || err.response.status === 500){
			console.log("服务器端报错!");
		}
		else if(err.response.status === 405){
			console.log("请求方式不对!");
		}
		return Promise.reject(err);
	}
)

let http={
	post:'',
	get:'',
	getToken:''
}


http.post = function (api,data){
	//参数序列化
	let params = qs.stringify(data);
	return new Promise((resolve,reject)=>{
		axios.post(base+api,params).then(res=>{
			resolve(res);
		})
	})
}


http.get = function (api,data){
	//参数序列化
	let params = qs.stringify(data);
	return new Promise((resolve,reject)=>{
		axios.get(base+api,params).then(res=>{
			resolve(res);
		})
	})
}

//有头部传递 token的  请求

http.getToken = function(api,data){
	
	let params = qs.stringify(data);
	return new Promise((resolve,reject)=>{
		axios.get(base+api,params,{
			headers:{
				'Authorization':localStorage['token']
			}
			
		}).then(res=>{
			resolve(res);
		})
	})
	
	
	
}

//输出
export default  http;