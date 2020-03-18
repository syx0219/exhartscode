import request from '@/utils/request';
//登录接口
export function login(username,password){
	return request({
		url:'/Api/login',
		method:'post',
		data:{username,password}
	})
}