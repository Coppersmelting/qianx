/*
* @Author: Administrator
* @Date:   2019-11-22 16:12:03
* @Last Modified by:   kk
* @Last Modified time: 2019-11-29 10:17:16
*/

$(function(){
	var n=0;
	var timer;
	//侧导航栏
	$('.navlogo ul li').click(function(event) {
		n=$(this).index()
		$('section').animate({'top':-100*n+'%'}, 500)
		console.log(n);
		$(this).children().removeClass('work').parent().siblings().children().addClass('work')



		//第一页
		if(n==0){
			$('.screen1 .title').removeClass('xuan')
		}else{
			timer=setTimeout(function(){
				$('.screen1 .title').addClass('xuan')
			},800)
		}
		//第二页
		if(n==1){
			$('.screen2 .title1 p').animate({'opacity': '1'}, 1000)
			$('.screen2 .title1 img').animate({'opacity': '1'}, 1000)

		}else{
			timer=setTimeout(function(){
			$('.screen2 .title1 p').css({'opacity': '0'});
			$('.screen2 .title1 img').css({'opacity': '0'});
			},800)
		}
		//第四页
		if(n==3){
			$('.screen4 .title3 p').animate({'height': '36px'}, 500)
			$('.screen4 .title3 img').animate({'height': '50px'},500)
		}else{
			timer=setTimeout(function(){
			$('.screen4 .title3 p').css({'height': '0px'});
			$('.screen4 .title3 img').css({'height': '0px'});
			},300)
		}
		//第五页
		if(n==4){
			$('.screen5 .title4').removeClass('xuan')
			timer=setTimeout(function(){$('.screen5 .hua').addClass('aa')},1000)
		}else{
			timer=setTimeout(function(){
				$('.screen5 .title4').addClass('xuan')
				$('.screen5 .hua').removeClass('aa')
			},500)
		}
		//第六页
		if(n==5){
			$('.screen6 .title5').animate({'height': '105px'},1500);
		}else{
			timer=setTimeout(function(){
				$('.screen6 .title5').css({'height': '0px'});
			},500)
		}
		//第七页
		if(n==6){
			$('.screen7 .title6 p').animate({'opacity': '1'}, 1000)
			$('.screen7 .title6 img').animate({'opacity': '1'}, 1000)
		}else{
			timer=setTimeout(function(){
			$('.screen7 .title6 p').css({'opacity': '0'});
			$('.screen7 .title6 img').css({'opacity': '0'});
			},800)
		}
		})

	//滚轮事件
	$(document).mousewheel(function(e,d){
		// alert(d)
		clearTimeout(timer)
		timer=setTimeout(function(){
			n=n-d
			console.log(n)
			if(n<0){n=0}
			if(n>6){n=6}
				//第一页
			if(n==0){
				$('.title').removeClass('xuan')
			}else{
					setTimeout(function(){
				$('.title').addClass('xuan')
			},800)	
			}
			//第二页
		if(n==1){
			$('.screen2 .title1 p').animate({'opacity': '1'}, 1000)
			$('.screen2 .title1 img').animate({'opacity': '1'}, 1000)
		}else{
			timer=setTimeout(function(){
			$('.screen2 .title1 p').css({'opacity': '0'});
			$('.screen2 .title1 img').css({'opacity': '0'});
			},800)
		}
		//第四页
		if(n==3){
			$('.screen4 .title3 p').animate({'height': '36px'}, 500)
			$('.screen4 .title3 img').animate({'height': '50px'}, 500)
		}else{
			timer=setTimeout(function(){
			$('.screen4 .title3 p').css({'height': '0px'});
			$('.screen4 .title3 img').css({'height': '0px'});
			},500)
		}
		//第五页
		if(n==4){
			$('.screen5 .title4').removeClass('xuan')
			timer=setTimeout(function(){$('.screen5 .hua').addClass('aa')},1000)
		}else{
			timer=setTimeout(function(){
				$('.screen5 .title4').addClass('xuan')
				$('.screen5 .hua').removeClass('aa')
			},500)
		}
		//第六页
		if(n==5){
			$('.screen6 .title5').animate({'height': '105px'},1500);
		}else{
			timer=setTimeout(function(){
			$('.screen6 .title5').css({'height': '0px'});
			},800)
		}
		//第七页
		if(n==6){
			$('.screen7 .title6 p').animate({'opacity': '1'}, 1000)
			$('.screen7 .title6 img').animate({'opacity': '1'}, 1000)
		}else{
			timer=setTimeout(function(){
			$('.screen7 .title6 p').css({'opacity': '0'});
			$('.screen7 .title6 img').css({'opacity': '0'});
			},800)
		}
			$('.navlogo .lis').eq(n).children().removeClass('work').parent().siblings().children().addClass('work')
			$('section').animate({'top':-100*n+'%'}, 500)
		},500)
		
		
	})
	//音乐播放
	$('.music').click(function(event) {
		$(this).toggleClass('stop');
		var s=$(this).hasClass('stop')
		if(s){
				$('audio')[0].pause()
			}else{
				$('audio')[0].play()
				}
	});

	//标题动画
	$('.title').removeClass('xuan')
	$('.screen2 .title1 p').css({'opacity': '0'});
	$('.screen2 .title1 img').css({'opacity': '0'});
	

	//气球漂浮动画
	// $('.ballon').mouseenter(function(event) {
	// 	$(' .ballon').addClass('ballonmove')
	// });

















})























