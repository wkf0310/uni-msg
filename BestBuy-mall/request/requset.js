// 请求头
const baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1'
// 封装请求
function request(url, methods, data) {
	uni.showLoading({
		title: '正在加载中...'
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			method: methods ? methods : 'get',
			data: data,
			success(res) {
				resolve(res)
			},
			fail(res) {
				reject(res)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}
export default request
