'use strict';

(function($){
	$('#mobile-menu').on('click', function(){
		$('.navbar').slideToggle()
	})
})(jQuery);

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
	item.onclick = function() {
		if (index === 0 || index === 1) {
			document.getElementById('bigimg1').src = this.dataset.image;
		} else if (index === 2 || index === 3) {
			document.getElementById('bigimg2').src = this.dataset.image;
		} else if (index === 4 || index === 5) {
			document.getElementById('bigimg3').src = this.dataset.image;
		} else if (index === 6 || index === 7) {
			document.getElementById('bigimg4').src = this.dataset.image;
		} else if (index === 8 || index === 9) {
			document.getElementById('bigimg5').src = this.dataset.image;
		}
	}
});