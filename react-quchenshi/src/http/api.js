import http from './http';
export const lunboData = async()=>{
    return await http.get("aladdin/get_batch_data?codes=[%22%E4%B8%B4%E6%97%B6%22,%22chajian%22,%22newhome_10icon_one_img2%22,%22newhome_10icon_one_img1%22,%22new_Home_4navs_180105_1%22,%22Home_seckill%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=646b29c0-6d74-11ea-9bcd-c53527f03e1c")
}
export const miaoshaData = async()=>{
    return await http.get("activity/specials/info?count=8&code=Home_flashSale__Top_Img&stock_code=&device_id=646b29c0-6d74-11ea-9bcd-c53527f03e1c")
}
// export const bimaiData = async()=>{
//     return await http.get("item/ws/group_list?current_page=1&page_size=9&group_id="+group_id+"&device_id=646b29c0-6d74-11ea-9bcd-c53527f03e1c")
// }