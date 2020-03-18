//引入封装好的axios  
import request from '@/utils/request';

/*获取商品列表index/Api/*/
export function fetchList(params){
	return request({
		url:'/product_list',
		method:'get',
		params:params
	})
}
/*获取商品分类列表index/Api/*/
export function fetchCateList(params){
	return request({
		url:'/get_product_category',
		method:'get',
		params:params
	})
}
/*获取商品品牌列表index/Api/*/
export function fetchBrandList(params){
	return request({
		url:'/get_product_brand',
		method:'get',
		params:params
	})
}
/*获取添加商品列表index/Api/*/
export function fetchAddList(data){
	return request({
		url:'/create_product',
		method:'post',
		data:data
	})
}
/*获取商品类型列表index/Api/*/
export function fetchTypeList(params){
	return request({
		url:'/get_product_attr',
		method:'get',
		params:params
	})
}
/*通过 id号查找某一条商品信息*/
export function getOneProduct(params){
	return request({
		url:'/product_one',
		method:'get',
		params:params
	})
}

/*商品分类通过子级节点的id查找到父级节点信息的接口*/
export function getParentProductCate(params){
	return request({
		url:'/get_parent_id',
		method:'get',
		params:params
	})
}
/*修改一条商品信息*/
export function updateProduct(data){
	return request({
		url:'/update_product',
		method:'post',
		data:data
	})
}
/*删除一条商品信息*/
export function deletProduct(params){
	return request({
		url:'/delete_status',
		method:'get',
		params:params
	})
}
/* 获取一级二级列表*/
export function fetchProductCatelor2(parent_id,params){
	return request({
		url:'/get_product_category_list/'+parent_id,
		method:'get',
		params:params
	})
}
/*获取品牌管理*/
export function fetchBrandsProduct(params){
	return request({
		url:'/get_product_brand_pag',
		method:'get',
		params:params
	})
}