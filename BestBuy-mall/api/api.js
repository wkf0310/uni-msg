import request from '../request/requset.js'
// 请求轮播图
const getBanner = () => request('/home/swiperdata').then(res => res,err => err);
// 请求导航
const navList =()=>request('/home/catitems').then(res=>res,err=>err)
export {
	getBanner,
	navList
}