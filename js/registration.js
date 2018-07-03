$(document).ready(function() {
	$('.registration__form input[type="tel"]').mask('+38 (000) 000 00 00');

	$('#email-field').blur(function(e){
		function validateEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
		console.log(validateEmail($(this).val()));
	});
});