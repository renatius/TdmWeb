$(document).ready(function() {
	$('#page').removeClass('border-radius');
	$('#contact_info').append('<div><a class="email" href="mailto:mancuso@renatomancuso.com">mancuso@renatomancuso.com</a></div>');
	var current_year = new Date().getFullYear();
	var experience = current_year - 1997;
	$('#experience').html(experience.toString());
});
