$(document).ready(function() {
    $( "#menu li a" ).each(function( index ) {
		var linkURL = $( this ).attr( "href" );
		if( window.location.href.indexOf( linkURL ) > -1) {
			$(this).parent().addClass("current")
		}
	});

});