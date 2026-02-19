/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = new Date();
	var seconds = (Date.parse(date) - Date.parse(current)) / 1000;

	if (seconds <= 0) {
		$("#clock").html(" <span class=\"digit\">0 days 0 hours 0 minutes</span>");
		return;
	}

	var days = Math.floor(seconds / (3600 * 24));
	var hours = Math.floor((seconds % (3600 * 24)) / 3600);
	var minutes = Math.floor((seconds % 3600) / 60);
	var sec = Math.floor(seconds % 60);

	var result = " <span class=\"digit\">" + days + " days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + sec + "</span> seconds";
	$("#clock").html(result);
}
