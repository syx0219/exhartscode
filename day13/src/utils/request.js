import axios from 'axios';
import {Message} from 'element-ui';
console.log(process.env.BASE_API);
//创建axios实例
const service = axios.create({
	baseURL:'/api/',//api的基础路径http://yinruifang.cn/
	timeout:15000,//请求的超时时间
});
//service.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
//console.log(9,service);

//request请求拦截,验证token ,为了防攻击防注入
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
	//验证token ,如果token正确,我们就可以请求数据,需要后台支持
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  
//response响应拦截,封装了数据请求的报错信息
service.interceptors.response.use(function (response) {
	//获取到相应数据
	const res = response.data;
	if(res.status !== 200){//提示错误
		Message({
			message:res.msg,
			type:'error',
			duration:3000
		})
	}else{
		return response.data;
	}
	
    // 对响应数据做点什么
    return Promise.reject('error');
  }, function (error) {
	  
	 Message({
	 	message:error.msg,
	 	type:'error',
	 	duration:3000
	 }) 
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  //将封装好的axios输出
  export default service;