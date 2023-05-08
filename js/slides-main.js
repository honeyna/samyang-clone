$(function(){ 
	var visual = $('#main_slides > ul.slides_container > li');
	var button = $('#main_slides > ol.slides-pagenation > li');
	var current = 0;
	var setIntervalId;					
	button.on({
		click:function(){		
			var tg = $(this);
			var i = tg.index();
			button.removeClass('on');
			tg.addClass('on');
			move(i);
		}
	});
	$('#prev').click(function(){
				var n = current -1;
				if(n == -1) n = visual.size()-1;
							move(n);
				button.eq(n).trigger('click');
						return false;
	});
	$('#next').click(function(){
				var n = current +1;
				if(n == visual.size()) n=0;
							move(n);
				button.eq(n).trigger('click');
						return false;
	});

	$('#main_slides').on({		
		mouseover:function(){
			clearInterval(setIntervalId)
		},
		mouseout:function(){
			timer();
		}
	});
	timer();
	function timer(){
		setIntervalId = setInterval(function(){
			var n = current + 1;
			if(n == visual.size()){
				n = 0;
		}
		button.eq(n).click();
		}, 5000);
	}

	function move(i){
		if(current == i) return;

		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);

		currentEl.css({left:'0%'}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:'0%'});

		current = i;
	}
});