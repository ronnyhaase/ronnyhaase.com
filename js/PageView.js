var PageView = new function()
{
	var
		h1 = $('#wrapper h1')
		, h2 = $('#wrapper h2')
		, $wada = $('#wada')
		, socialbar = $('#socialbar')
		, $hireme = $('#hireme')
		, logo = $('#wrapper #logo')
		, logopieces = $('#logo img.logopiece')
		, logopieceanchors = $('#logo a')
		, designprinciples = $('#logo li')
		, $footer = $('#footer')
		, $btn_connect = $('#btn-connect')
		, $social = $('#social');

	onDOMReady = function(e) {
		// Hide & place all elements for animation
		h1.animate({opacity:0, marginLeft:'-=50'},0);
		h2.animate({opacity:0, marginLeft:'+=50'},0);
		$wada.animate({opacity:0, marginTop:'+=25'},0);
		socialbar.css({opacity:0});
		$hireme.animate({top:'-=64'},0);
		logo.css({opacity:0});
		designprinciples.css({opacity:0});
		$footer.css('visibility','hidden');

		$btn_connect.bind('click', function (ev) {
			$social.toggleClass('show');

			if ( $social.hasClass('show') )
				window.setTimeout(function() {
					window.scroll(0,32000);
				}, 250);
		})
	},
	
	onContentLoaded = function(e) {
		animationIntro();
	}

	onLogopieceMouseenter = function(e) {
		var sel = '#logo img\.logopiece\[src="img/logo_p'+ $(e.currentTarget).attr('tabindex') + '\.png"\]';

		$(sel)
			.stop(true,true)
			.animate({opacity:0},'slow');
		$(designprinciples[$(e.currentTarget).attr('tabindex')-1])
			.css({opacity:1});
	},

	onLogopieceMouseleave = function(e) {
		var sel = '#logo img\.logopiece\[src="img/logo_p'+ $(e.currentTarget).attr('tabindex') + '\.png"\]';

		$(sel)
			.stop(true,true)
			.animate({opacity:1},'slow');
		$(designprinciples[$(e.currentTarget).attr('tabindex')-1])
			.css({opacity:0});
	},

	//--------------------------------------------------------------------

	animationIntro = function() {
		//
		// Headings Animation
		//
		Queue.add( function() { h1.animate({ marginLeft: '+=50', opacity: 1.0 }, 1000); }, 1000 );
		Queue.add( function() {
			h2.animate({ marginLeft: '-=50', opacity: 1.0 }, 1000);
			$wada.animate({ marginTop: '-=25', opacity: 1.0 }, 1000);
		}, 500 );
		Queue.add( function() { logo.animate({ opacity:1.0 }, 1000); }, 500 );

		//
		// Logopiece Animation
		//
		Queue.add( function() {
			$(logopieces[4]).animate({opacity:0}, 600, function() {
				$(logopieces[4]).animate({opacity:1},'slow');
			})
		}, 500);
		Queue.add( function() {
			$(logopieces[3]).animate({opacity:0}, 600, function() {
				$(logopieces[3]).animate({opacity:1},600);
			})
		}, 300);
		Queue.add( function() {
			$(logopieces[2]).animate({opacity:0},600, function() {
				$(logopieces[2]).animate({opacity:1},600);
			})
		}, 300);
		Queue.add( function() {
			$(logopieces[1]).animate({opacity:0},600, function() {
				$(logopieces[1]).animate({opacity:1},600);
			})
		}, 300);
		Queue.add( function() {
			$(logopieces[0]).animate({opacity:0},600, function() {
				$(logopieces[0]).animate({opacity:1},600, function() {

				});
			})
		}, 300);
		Queue.add( function() {
			$(logopieces[4]).animate({opacity:0},600, function() {
				$(logopieces[4]).animate({opacity:1},600, function() {
					socialbar.animate({opacity:1},600);
					
					$hireme.show('bounce', { times: 3 }, 'fast');

					$footer.css('visibility','visible');
				});
			})
		}, 300);
		
		Queue.run();
	},

	bindEvents = function() {
		$(document).bind( 'ready', onDOMReady );
		$(window).bind( 'load', onContentLoaded );

		logopieceanchors.bind( 'mouseenter focus touchstart', onLogopieceMouseenter );
		logopieceanchors.bind( 'mouseleave blur', onLogopieceMouseleave );
		$('body').bind('touchend', function() {
			//$('#logo img.logopiece')
			logopieces.stop(true,true).animate({opacity:1},'slow');
			designprinciples.css({opacity:0});
		});
	},

	_init = function() {
		$('body').removeClass('no-js');
		$hireme.hide();
		bindEvents();
	};

	(function() {
		_init();
	})();
};
