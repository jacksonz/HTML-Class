$(document).ready(function() {
    $( "#menu li a" ).each(function( index ) {
		var linkURL = $( this ).attr( "href" );
		if( window.location.href.indexOf( linkURL ) > -1) {
			var a = $(this).parent();
			window.setTimeout(function(){a.animate({marginLeft:"+=10px"}).addClass("current").delay(10).animate({marginLeft:"-=10px"});},1000);
		}
	});

});