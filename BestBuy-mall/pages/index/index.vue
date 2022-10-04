<template>
	<view class="content">
		<!-- 头部搜索按钮 -->
		<view class="top-search">
			<text>搜索</text>
		</view>
		<!-- 轮播图 -->
		<view class="wrap">
			<u-swiper :list="data.list" height="370" name="image_src"></u-swiper>
		</view>
		<!-- nav分类 -->
		<u-grid :col="4" :border="false">
			<u-grid-item  v-for="item,index in data.navList" :key="index">
				<image class="img1"  :src="item.image_src" mode=""></image>
				<!-- <u-icon name="photo" :size="46"></u-icon>
				<view class="grid-text">分类</view> -->
			</u-grid-item>
		</u-grid>
	</view>
</template>
<script lang="ts" setup>
	import {
		getBanner,
		navList
	} from '@/api/api.js'
	import {
		reactive
	} from 'vue'
	const data=reactive({
		list:[],
		navList:[]
	})
	// 请求轮播图
	getBanner().then(res => {
		// console.log(res);
		data.list=res.data.message
	})
	// 请求导航
	navList().then(res=>{
		console.log(res);
		data.navList=res.data.message
	})
</script>

<style lang='scss' scoped>
	.top-search {
		width: 100%;
		height: 100rpx;
		padding: 10rpx;
		background-color: #ed4450;
		text-align: center;

		text {
			display: inline-block;
			width: 100%;
			height: 70rpx;
			background-color: #fff;
			line-height: 70rpx;
			border-radius: 6rpx;
		}
	}
	
	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}
	.img1{
		width: 130rpx;
		height: 140rpx;
	}
</style>
