
$(document).ready(function() {
	$('.slider').slick({
		dots: true,
		arrows: false, 
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	});

	$(".mobile-menu").click(function(e){
		e.preventDefault();
		$(".menu").toggleClass("show");
		$(this).toggleClass("active");
	});
});
