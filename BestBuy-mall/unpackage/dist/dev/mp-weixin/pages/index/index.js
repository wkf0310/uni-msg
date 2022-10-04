"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/requset.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_u_swiper2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_grid_item + _easycom_u_grid)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      list: [],
      navList: []
    });
    api_api.getBanner().then((res) => {
      data.list = res.data.message;
    });
    api_api.navList().then((res) => {
      console.log(res);
      data.navList = res.data.message;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: data.list,
          height: "370",
          name: "image_src"
        }),
        b: common_vendor.f(data.navList, (item, index, i0) => {
          return {
            a: item.image_src,
            b: index,
            c: "57280228-2-" + i0 + ",57280228-1"
          };
        }),
        c: common_vendor.p({
          col: 4,
          border: false
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "D:/\u5168\u6808\u5B66\u4E60\u8D44\u6599/\u5B9E\u8BAD2/BestBuy-mall/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
