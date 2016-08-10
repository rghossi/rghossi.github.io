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

function initMap() {
	var myLatLng = {lat: -21.769889, lng: -41.3147017};
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	    center: myLatLng,
	    zoom: 7
	});

	var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

