var sections = [];

$(function(){

	// Work out how many sections links there are, and store in array
	$('.clever-nav li a').each(function(){
		var target = $(this).attr('href');
		sections.push(target);
	});

	// Whenever user scrolls...
	$(window).on('scroll', function(){
		// For each section, check it is off the top of the screen and update which link has 'active class'
		for (var i = 0; i < sections.length; i++){
			var topOfSection = $(sections[i]).offset().top;
			var currentScrollTop = $(window).scrollTop();
			if (currentScrollTop > topOfSection) {
				$('.clever-nav li a').each(function(){
					$(this).removeClass('active')
				})
				$('.clever-nav li a').eq(i).addClass('active')
				console.log('changing active!');
			} else {
				if (!$('.clever-nav li a.active').length > 0 ) {
					$('.clever-nav li a').eq(i).removeClass('active')
				}
			}

			// Check if user has scrolled to very bottom of page, and if so, give final section link the class 'active'
			if($(window).scrollTop() + $(window).height() == $(document).height()) {
				console.log('At bottom of page')
		        $('.clever-nav li a').each(function(){
					$(this).removeClass('active')
				})
				$('.clever-nav li a').eq($('.clever-nav li a').length -1).addClass('active')
		    }

		}
	});

	$('.clever-nav li a').on('click', function(e){
		e.preventDefault();
		var theTarget = $(this).attr('href');
		if (theTarget.substring(0,1) == '#') {
			var theAnchor = theTarget.substring(1,theTarget.length -1);
			console.log(theAnchor);
			$('html, body').animate({				
				scrollTop: $(theTarget).offset().top + 1
			}, 500);
		}
	});

	$('.back-to-top').on('click', function(e){
		e.preventDefault();
		console.log
		var theTarget = $(this).attr('href');
		if (theTarget.substring(0,1) == '#') {
			var theAnchor = theTarget.substring(1,theTarget.length -1);
			$('html, body').animate({				
				scrollTop: $(theTarget).offset().top + 1
			}, 500);
		}
	});

});
