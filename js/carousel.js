/**
 * Created by XR on 2017/3/1.
 * Time: 20:57
 * email 413401168@qq.com
 */
$.fn.extend({
	carousel: function(option) {
		var el = $(this);
		var defaults = {
			interval: 1000 * 10, //The amount of time to delay between automatically cycling an item. 
			hover: true, //  If set to true, pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it.
			itemNum: 0 //set witch solide is first show
		};
		var settings = $.extend(defaults, option || {}); //init	
		var num = settings.itemNum;
		var funIntervalNext = function() {
			$('.slides img').css('display', 'none');
			$('#slideshow .texts').css('display', 'none');
			var y = num + 1;
			if(y == $('.slides img').length) {
				num = 0;
				y = 0;
			} else {
				num++
			}
			$($('.slides img')[y]).fadeIn(1500);
			$($('#slideshow .texts')[y]).css('display', 'block');
		};
		var funIntervalPre = function() {
			$('.slides img').css('display', 'none');
			$('#slideshow .texts').css('display', 'none');
			var y = num - 1;
			if(y < 0) {
				num = $('.slides img').length - 1;
				y = $('.slides img').length - 1;
			} else {
				num--
			}
			$($('.slides img')[y]).fadeIn(1500);
			$($('#slideshow .texts')[y]).css('display', 'block');
		};
		var solid = setInterval(funIntervalNext, settings.interval);
		$('#slideshow .next').on('click', function() {
			funIntervalNext();
		});
		$('#slideshow .previous').on('click', function() {
			funIntervalPre();
		})
		$('#slideshow .toggle').on('mouseenter', function() {
			$('#slideshow .arrow').animate({
				opacity: 1
			}, 1000)
		}).on('mouseleave', function() {
			$('#slideshow .arrow').animate({
				opacity: 0
			}, 1000)
		})
		if(settings.hover) {
			$('#slideshow').on('mouseenter', function() {
				clearInterval(solid)
			}).on('mouseleave', function() {
				solid = setInterval(funIntervalNext, 10000);
			});
		}

	}
})