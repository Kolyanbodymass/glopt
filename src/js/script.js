$(document).ready(function(){ /*функция, которая подключает js код, когда HTML структура документа готова*/
	$('.reviews__items').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
		// responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 		centerMode: true,
		// 		centerPadding: '40px',
		// 		slidesToShow: 3
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 		centerMode: true,
		// 		centerPadding: '40px',
		// 		slidesToShow: 1
		// 		}
		// 	}
		// ]
	});

	// Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #modal').fadeIn('slow');
	});

	$('.consultation__close').on('click', function() {
		$('.overlay, #modal, #thanks').fadeOut('slow');
	});

	/* Configuring jquery-validation plugin for form validation */
	
	$('#consultation-form').validate({
		rules: {
			name: "required",
			phone: "required",
			email: {
				email: true
			}
		},
		messages: {
			name: "Пожалуйста, укажите ваше имя",
			phone: "Пожалуйста, укажите свой номер телефона",
			email: {
				email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
			}
		}
	});
	$('#consultation-question').validate({
		rules: {
			name: "required",
			phone: "required",
			email: {
				email: true
			},
			message: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			name: "Пожалуйста, укажите ваше имя",
			phone: "Пожалуйста, укажите свой номер телефона",
			email: {
				email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
			},
			message: {
				required: "Пожалуйста, введите сообщение",
				minlength: jQuery.validator.format("Ваше сообщение должно быть не меньше {0} символов!")
			}
		}
	});
	$('#consultation-modal').validate({
		rules: {
			name: "required",
			phone: "required",
			email: {
				email: true
			}
		},
		messages: {
			name: "Пожалуйста, укажите ваше имя",
			phone: "Пожалуйста, укажите свой номер телефона",
			email: {
				email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
			}
		}
	});

});