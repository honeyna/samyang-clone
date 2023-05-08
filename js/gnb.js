$(function(){
    var menu = $('#gnb>li');
	var wrap = $('#gnbWrap');
	var pageURL = location.href;
	var activeMenu;
	menu.on({
		mouseover:function(){
			var tg = $(this);
				menu.removeClass('on');
				tg.addClass('on');
			var th = 68 + tg.children('.sGnbArea').height();
				wrap.stop().animate({height:th});

		},
		mouseout:function(){
			var tg = $(this);
			tg.removeClass('on');
			var th = 68;
			wrap.stop().animate({height:th});
		}
	});
	menu.each(function(i){
		var tg = $(this);
		var sub = tg.find('> .sGnbArea > ul > li');
		var menuURL = tg.children('a').attr('href');
		var active = pageURL.indexOf(menuURL);
		if(active > -1) activeMenu = tg;
		sub.each(function(j){
			var tg = $(this);
			var subURL = tg.children('a').attr('href');
			active = pageURL.indexOf(subURL);
			if(active > -1) activeMenu = tg;
		});

		sub.on({
				mouseover:function(event){
					var tg = $(this);
					sub.removeClass('on');
					tg.addClass('on');
				},
				mouseout:function(){
					var tg = $(this);
					tg.removeClass('on');

					 
				}
		});

	});

});