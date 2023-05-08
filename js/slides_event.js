$(document).ready(function(){
	var visual = $("div.block-event > ul > li");
	var button = $("div.block-event > ol > li");
	var setIntervalId;
	var current=0;
			
	button.on({
		click:function(){
			var tg = $(this);
			var i = tg.index();
			button.removeClass('on');
			tg.addClass('on');
			move(i);
			return false;
		}
	});
	
	$('div.block-event').on({		
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
		}, 2000);
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