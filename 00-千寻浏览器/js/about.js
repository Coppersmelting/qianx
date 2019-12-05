/*
* @Author: kk
* @Date:   2019-11-29 10:16:08
* @Last Modified by:   kk
* @Last Modified time: 2019-11-29 11:24:16
*/
$(function(){
	//导航栏右边触碰事件
	$('.nav .nav-right').hover(function() {
		$('.nav .nav-right ul li:nth-child(2)').css(
			'color','#fff'
		);
		$('.nav .nav-right ul li:nth-child(1)').css(
			'backgroud-position','17px -69px'
		);
	}, function() {
		$('.nav .nav-right ul li:nth-child(2)').css(
			'color','#ccc'
		);
		$('.nav .nav-right ul li:nth-child(1)').css(
			'backgroud-position','17px -46px'
		);
	});
	//导航栏左边触碰事件
	var i=0;
	$('.nav .nav-left ul li').mouseenter(function(event){
		i=$(this).index()
		//console.log(i)
		$('.nav .nav-left ol li').eq(i).addClass('lis').siblings().removeClass('lis')
	})























})