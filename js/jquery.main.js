/* script by ProVerstka */
$(document).ready(function(){
	/* инициализация функций */
	initMaxHeight();
	initBgImage($('.main_products_list .main_products_holder .visual'), 		$('.main_products_list .visual img'));
	initBgImage($('.main_product_block .visual'), 		$('.main_product_block .visual img'));
	initParticle();
	/* описание функций */

	function initMaxHeight() {
		if (!('matchHeight' in $.fn)) return false;{
			$('.directions_list li .directions_list_block').matchHeight();
		}
	};



	$('.blog_carousel').slick({
		slidesToShow: 3,
		centerMode: true,
 		centerPadding: '200px',
 		arrows: false,
 		infinite: false,
 		responsive: [{
			breakpoint: 1000,
				settings: {
					centerMode: false,
					centerPadding: '0',
					slidesToShow: 3,
				}
			},{
			breakpoint: 800,
				settings: {
					centerMode: false,
					centerPadding: '0',
					slidesToShow: 2,
				}
			},{
			breakpoint: 600,
				settings: {
					centerMode: false,
					centerPadding: '0',
					slidesToShow: 1,
				}
			}
		]
	});
	$('.sertificate_carousel').slick({
		slidesToShow: 2,
		centerMode: false,
 		variableWidth: true,
 		responsive: [{
			breakpoint: 800,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
				}
			},{
			breakpoint: 600,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
				}
			}
		]
	});
	$('.carousel').slick({
		slidesToShow: 2,
		centerMode: false,
 		variableWidth: true,
 		responsive: [{
			breakpoint: 800,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
				}
			},{
			breakpoint: 600,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
				}
			}
		]
	});
	$('.presentation_carousel').slick({
		slidesToShow: 1,
		appendArrows: '.presentation_arrows',
		infinite: false,
	});


	$('.burger_menu').click(function(){
		$(this).toggleClass('open');
		if($(this).hasClass('open')){
			$('header nav').addClass('active')
			$('body').addClass('ovh')
			$('header nav ul').fadeIn();
			setTimeout(function(){
				$('header nav ul').addClass('active');
			}, 200)
		}else{
			$('header nav, header nav ul').removeClass('active')
			$('body').removeClass('ovh')
			$('header nav ul').fadeOut();
		}

	});


	//Ставим картинку на фон, _parent - на что вешать, _img - что вешаем
	function initBgImage(_parent, _img) {
		_img.each(function() {
			$(this).closest(_parent).css({
				'background-image': 'url(' + $(this).attr('src') + ')',
			})
		});
	};


	function initParticle(){
		if (device.tablet() || device.mobile()) {
			$('#particles-header-js').remove();
			$('#particles-js').remove();
			// $('#particles-js-2').remove();
		}
		if($('#particles-header-js').length){
			particlesJS.load("particles-header-js", "js/particlesjs-config-1-blue.json", function() {});
		}
		if($('#particles-js').length){
			particlesJS.load("particles-js", "js/particlesjs-config-1-blue.json", function() {});
		}
		if($('#particles-js-2').length){
			particlesJS.load("particles-js-2", "js/particlesjs-config-1-blue.json", function() {});
		}
	};

	// $(window).resize(function(){
	// 	var _deltaX, _deltaY;
	// 	if (window.innerWidth >= 1000) {
	// 		if (window.innerWidth <= 2100) {
	// 			_deltaX =  ((window.innerWidth / 2100) * 100);
	// 		}
	// 		//  else {
	// 		// 	_deltaX = (2100 / 1200) * 100;
	// 		// }
	// 	} else {
	// 		_deltaX = '100%';
	// 	}
	// 	$('html').css('font-size',_deltaX+'%')
	// }).trigger('resize');
});

/* подключение плагинов */

$('.presentation_carousel').on('init', function(event, slick){
	slideCount = slick.slideCount;
	console.log(slideCount)
	setSlideCount();
	setCurrentSlideNumber(slick.currentSlide);
});

$('.presentation_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
	var $el = $('.presentation_count_wrap').find('.total');
	$el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
	var $el = $('.presentation_count_wrap').find('.current');
	$el.text(currentSlide + 1);
}