$(document).ready(function() {

	$(document).click(function(e) {
		if($(e.target).closest('#change-lng').length || $(e.target).closest('#change-currency').length || $(e.target).closest('.catalog__header_nav-filter-body').length || $(e.target).closest('.item-buy-amount').length) return;
		$('#change-lng .header__gray_nav-sub, #change-currency .header__gray_nav-sub').fadeOut(150);
		$('.catalog__header_nav-filter .catalog__header_nav-filter-list').fadeOut(150);
		$('.catalog__main_products-list .item-buy-amount-list').fadeOut(150);
	});
	

	$('#change-lng, #change-currency').click(function(e) {
		$('#change-lng .header__gray_nav-sub, #change-currency .header__gray_nav-sub').fadeOut(150)
		if($(this).find('.header__gray_nav-sub').is(':hidden')){
			$(this).find('.header__gray_nav-sub').fadeIn(150);
		}else{
			$(this).find('.header__gray_nav-sub').fadeOut(150);
		}
	});

	$('.catalog__main_products-list .item-buy-amount').click(function(e) {
		$('.catalog__main_products-list .item-buy-amount-list').fadeOut(150);
		if($(this).find('.item-buy-amount-list').is(':hidden')){
			$(this).find('.item-buy-amount-list').fadeIn(150);
		}else{
			$(this).find('.item-buy-amount-list').fadeOut(150);
		}
	});

	

	$('.catalog__header_nav-filter-body').click(function(e) {		
		if($(this).find('.catalog__header_nav-filter-list').is(':hidden')){
			$(this).find('.catalog__header_nav-filter-list').fadeIn(150);
		}else{
			$(this).find('.catalog__header_nav-filter-list').fadeOut(150);
		}
	});

	
});