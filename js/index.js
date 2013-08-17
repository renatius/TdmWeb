$(document).ready(function() {
	$('#postbox').addClass('border-radius');
	$('#postbox').addClass('box-shadow');

	$('#twitterbox').addClass('border-radius');
	$('#twitterbox').addClass('box-shadow');

	$('<h1>Latest blog posts</h1>').insertBefore('#posts');
    $('<h1>Latest tweets</h1>').insertBefore('#tweets');
});
