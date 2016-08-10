var stickyOffset = $('#navbar').offset().top;

$(window).scroll(function(){
  var sticky = $('#navbar'),
      scroll = $(window).scrollTop();
    
  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$("li").click(function() {
	var section = "#"+$(this).text().replace(" ", "-");
	var navHeight = 0;
	if ($(window).scrollTop() < stickyOffset) {
		navHeight = $('#navbar').height();
	}
    $('html,body').animate({
        scrollTop: $(section).offset().top - navHeight},
        'slow');
    return false;
});

