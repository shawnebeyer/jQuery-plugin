#jQuery plugin project - Week 6

basic functionality of the plug in

1. deploy "raptorize" "starwarsize" on bottom of screen
	1a. give decveloper character options: Chewie, Vador, yoda, Emperor
	1b. depending on options, display specific starwars character

2. developer can apply .scroll to any div, making the content of that div scroll like Star Wars credit roll.
3. developer can put .lightsaber on any ul to make link underline a lightsaber power on. Increase glow and vibrate?
4. lightsaber image to appear at bottom of screen, user can grab it and navigate page - page is dark, lightsaber glows.








//rewrite! just test first
//////////////////////////
//FORCE-IZE //////////////
//////////////////////////
(function($) {

    $.fn.raptorize = function(options) {

        //Yo' defaults
        var defaults = {  
            enterOn: 'click', //timer, konami-code, click
            delayTime: 5000 //time before raptor attacks on timer mode
            };  
        
        //Extend those options
        var options = $.extend(defaults, options); 
	
        return this.each(function() {

			var _this = $(this);
			var audioSupported = false;
			//Stupid Browser Checking which should be in jQuery Support
			// if ($.browser.mozilla && $.browser.version.substr(0, 5) >= "1.9.2" || $.browser.webkit) { 
			// 	audioSupported = true;
			// }
			
			//Raptor Vars
			var raptorImageMarkup = '<img id="elRaptor" style="display: none" src="assets/chewie.png" />'
			var raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="assets/raptor-sound.mp3" /><source src="assets/raptor-sound.ogg" /></audio>';	
			var locked = false;
			
			//Append Raptor and Style
			$('body').append(raptorImageMarkup);
 			if(audioSupported) { $('body').append(raptorAudioMarkup); }
			var raptor = $('#elRaptor').css({
				"position":"fixed",
				"bottom": "-700px",
				"right" : "0",
				"display" : "block"
			})
			
			// Animating Code
			function init() {
				locked = true;
			
				//Sound Hilarity
				if(audioSupported) { 
					function playSound() {
						document.getElementById('elRaptorShriek').play();
					}
					playSound();
				}
								
				// Movement Hilarity	
				raptor.animate({
					"bottom" : "0"
				}, function() { 			
					$(this).animate({
						"bottom" : "-130px"
					}, 100, function() {
						var offset = (($(this).position().left)+400);
						$(this).delay(300).animate({
							"right" : offset
						}, 2200, function() {
							raptor = $('#elRaptor').css({
								"bottom": "-700px",
								"right" : "0"
							})
							locked = false;
						})
					});
				});
			}
			
			
			//Determine Entrance
			if(options.enterOn == 'timer') {
				setTimeout(init, options.delayTime);
			} else if(options.enterOn == 'click') {
				_this.bind('click', function(e) {
					e.preventDefault();
					if(!locked) {
						init();
					}
				})
			} else if(options.enterOn == 'konami-code'){
			    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
			    $(window).bind("keydown.raptorz", function(e){
			        kkeys.push( e.keyCode );
			        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
			        	init();
			        	$(window).unbind('keydown.raptorz');
			        }
			    }, true);
	
			}
			
        });//each call
    }//orbit plugin call
})(jQuery);