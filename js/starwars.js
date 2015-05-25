
var app = {};

$.fn.forceify = function() {

	$('.forceify').click(function(e) {
			e.preventDefault();
				app.init();
	});

		
	app.init = function() {	
		//Trying it this way....
		var saberImageDetails = '<img class="saberImage" src="assets/lightsaber.png" />'
		var vaderImageDetails = '<img class="vaderImage" src="assets/vader.png" />'
		var vaderQuote = $('<p class="quote">').text('The force is strong with this one. Only the Millennium Falcon can bring you back home...');
		var vaderAudio = '<audio id="vaderBreathe" preload="auto"><source src="assets/Vadrbrth.mp3" /></audio>';
		console.log("THE 6IX FO LIFE...If you don't know, now you know");
		$('body').append(saberImageDetails);
		$('body').append(vaderImageDetails);
		$('body').append(vaderQuote);
		$('body').append(vaderAudio);

		//Creating objects to set positioning of both characters.
		var saber = $('.saberImage').css({
			'position':'fixed',
			'max-width':'270px',
			'bottom':'50px',
			'left':'-500px',
			'display':'block',
			'z-index':'99999'
		});
		var darthVader = $('.vaderImage').css({
			'position':'fixed',
			'height':'350px',
			'bottom':'-10px',
			'right':'-500px',
			'display':'block',
			'z-index':'99999'
		});
		app.shake();
		app.animate(darthVader, saber, vaderQuote, vaderAudio);
		$(darthVader).empty();

	}

	app.animate = function(darthVader, saber, vaderQuote, vaderAudio) {
		
		var $vadersQuote = vaderQuote
		darthVader.delay(7000).animate({ "right": "100px" }, 700 );
		darthVader.delay(10000).animate({ "right": "-500px"}, 700);
		console.log(saber);
		// saber.delay(12000).animate({ "left": "100px"}, 700);
		$('.quote').delay(9000).fadeIn(2000).delay(4000).fadeOut(2000);
		setTimeout(app.backHome,15000);
		setTimeout(app.screenFade,3000);
		setTimeout(app.playSound,7000);
	}

	app.backHome = function() {
		$('.logoHome').css({
			'z-index':'9999999999'
			// 'display':'block'
		})
		$('.logoHome').on('click', function(){
			$('.overlay').css({
				'display':'none'
			})
		});
	}

	app.playSound = function() {
		document.getElementById('vaderBreathe').play();
	}

	app.screenFade = function() {
		var overlay = $('<div class="overlay">').fadeIn(3000);
		overlay.appendTo($('body'));
		// app.saberMove(overlay);
	}

	// app.saberMove = function(overlay) {
	// 	$('.fa').click(function() {
	// 		$('.overlay').css({
	// 			'display':'none',
	// 		})
	// 	});
	// 	$( '.saberImage' ).mouseover(function() {
	// 	$('body').addClass('pointer')
	// 	});
	// }

	app.shake = function() {
		$('body').each(function(i) {
		        $('body').css({ "position": "relative" });
		        for (var x = 1; x <= 7; x++) {
		            $('body').delay(100).animate({ left: -10 }, 10).animate({ top: -10}, 10).animate({ left: 0 }, 10).animate({top: 0}, 10).animate({ left: 10 }, 10).animate({top: 10}, 10).animate({ left: 0 }, 10).animate({top: 0}, 10);
		        }
		    });
	}

}