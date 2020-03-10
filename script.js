'use strict';

(function($){
	$('#mobile-menu').on('click', function(){
		$('.navbar').slideToggle()
	})
})(jQuery);

// gifを表示し終わったらコンテンツを表示する
window.setTimeout(LoadingComplete, 6000);

function LoadingComplete() {
	var loading = document.getElementById('loading');
	var allcontent = document.getElementById('all-content');

	allcontent.style.display = 'block';
	loading.style.display = 'none';
}