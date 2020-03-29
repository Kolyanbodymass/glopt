$(document).ready(function(){ /*функция, которая подключает js код, когда HTML структура документа готова*/
	$('.reviews__items').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
				}
			}
		]
	});

	// Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #modal').fadeIn('slow');
	});

	$('.consultation__close').on('click', function() {
		$('.overlay, #modal, #thanks').fadeOut('slow');
	});
});