$(document).ready(function() {

	$(document).click(function(e) {
		if($(e.target).closest('#change-lng').length || $(e.target).closest('#change-currency').length || $(e.target).closest('.item-buy-amount').length) return;
		$('#change-lng .header__gray_nav-sub, #change-currency .header__gray_nav-sub').fadeOut(150);
		$('#main-hits-list .item-buy-amount-list').fadeOut(150);		
	});

	$('.nav__left_search-input').focus(function(e) {
		$('.nav__left_search-input').closest('.nav__left_search').addClass('focus');
	});
	$('.nav__left_search-input').blur(function(e) {
		$('.nav__left_search-input').closest('.nav__left_search').removeClass('focus');
	});

	$('#change-lng, #change-currency').click(function(e) {
		$('#change-lng .header__gray_nav-sub, #change-currency .header__gray_nav-sub').fadeOut(150)
		if($(this).find('.header__gray_nav-sub').is(':hidden')){
			$(this).find('.header__gray_nav-sub').fadeIn(150);
		}else{
			$(this).find('.header__gray_nav-sub').fadeOut(150);
		}
	});

	$('#main-hits-list .main__hits_list-item .item-buy-amount span').click(function(e) {
		$('#main-hits-list .item-buy-amount-list').fadeOut(150);
		if($(this).closest('.item-buy-amount').find('.item-buy-amount-list').is(':hidden')){
			$(this).closest('.item-buy-amount').find('.item-buy-amount-list').fadeIn(150);
		}else{
			$(this).closest('.item-buy-amount').find('.item-buy-amount-list').fadeOut(150);
		}
	});




	/* ==========================================================================
		Sliders init
	========================================================================== */
	$('#main-navs-slider').slick({
		arrows : false,
		dots : true,
		autoplay : true,
		autoplaySpeed : 5000
    });
	
    $('#main-hits-list').slick({
		arrows : true,          
		slidesToShow: 4,
		slidesToScroll: 1
    });

    $('#main-for-you-list').slick({
		arrows : true,          
		slidesToShow: 3,
		slidesToScroll: 1
    });

});