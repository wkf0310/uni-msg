"use strict";
var request_requset = require("../request/requset.js");
const getBanner = () => request_requset.request("/home/swiperdata").then((res) => res, (err) => err);
const navList = () => request_requset.request("/home/catitems").then((res) => res, (err) => err);
exports.getBanner = getBanner;
exports.navList = navList;
