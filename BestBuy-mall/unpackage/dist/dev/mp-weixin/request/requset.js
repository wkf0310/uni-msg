"use strict";
var common_vendor = require("../common/vendor.js");
const baseURL = "https://api-hmugo-web.itheima.net/api/public/v1";
function request(url, methods, data) {
  common_vendor.index.showLoading({
    title: "\u6B63\u5728\u52A0\u8F7D\u4E2D..."
  });
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseURL + url,
      method: methods ? methods : "get",
      data,
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      },
      complete() {
        common_vendor.index.hideLoading();
      }
    });
  });
}
exports.request = request;
