/*
* @Author: kk
* @Date:   2019-11-30 09:30:31
* @Last Modified by:   kk
* @Last Modified time: 2019-11-30 15:41:38
*/
$(function(){
	//导航栏按键
	var i=$('.con-top .slider ul li').index()
	$('.con-top .slider .slide-left').click(function(event) {
		i--;
		if(i<0){i=3}
		$('.con-top .slider ul li').eq(i).addClass('show')
		$('.con-top .slider ul li').eq(i).siblings().removeClass('show')
	});
	$('.con-top .slider .slide-right').click(function(event) {
		i++;
		if(i>3){i=0}
		$('.con-top .slider ul li').eq(i).addClass('show')
		$('.con-top .slider ul li').eq(i).siblings().removeClass('show')
	});






























})