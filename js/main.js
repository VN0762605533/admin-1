$(document).ready(function() {
	$('.toggle-sidebar').on('click', function(){
		$('.sidebar').toggle();
		$('.main-content').toggleClass('main-content-full');
	});
});