$(document).ready(function() {
    $( "#menu li a" ).each(function( index ) {
		var linkURL = $( this ).attr( "href" );
		if( window.location.href.indexOf( linkURL ) > -1) {
			var a = $(this).parent();
			window.setTimeout(function(){a.addClass("current");},1000);
		}
	});

});