'use strict';

(function($){
	$('#mobile-menu').on('click', function(){
		$('.navbar').slideToggle()
	})
})(jQuery);

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
	item.onclick = function() {
		document.getElementById('bigimg').src = this.dataset.image;
	}
})