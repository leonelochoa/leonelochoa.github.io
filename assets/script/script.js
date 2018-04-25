$( document ).ready(function() {
    console.log( "Ready ;)");

    var $isAnimatedMe = $('.isAnimatedMe'),
    	$isAnimatedHey = $('.isAnimatedHey'),
    	$isAnimatedLeo = $('.isAnimatedLeo'),
    	$isAnimatedGallery = $('.isAnimatedGallery');
    	$isAnimatedGrid = $('.grid')


    $("#fullpage").fullpage({
    	navigation: true,
    	onLeave: function(index, nextIndex, direction) {


    	if( index == 1 && nextIndex == 2 ) { 
	        $isAnimatedMe.addClass('animated rollIn').css('animation-delay', '.5s'); // jQuery Function Number 1: (.addClass)
	        $isAnimatedHey.addClass('animated fadeInRight').css('animation-delay', '2s'); // jQuery Function Number 2: (.css)
	        $isAnimatedLeo.addClass('animated jackInTheBox').css('animation-delay', '3.5s');
      		}

      	if( ( index == 1 || index == 2) && nextIndex == 3 ) {
		    $isAnimatedGallery.addClass('animated fadeInUp').css('animation-delay', '.5s');
		    $isAnimatedGallery.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          		$(this).removeClass('animated fadeInUp').addClass('animated bounceOutDown').css('animation-delay', '2.5s'); // jQuery Function Number 3: (.removeClass)
       		 });
		    $('.grid-container').show();
		    $isAnimatedGrid.addClass('animated zoomIn').css('animation-delay', '3.5s');

			}	

    	}



    });

    /* var typed = new Typed("#titles", {
   	strings: ["Researcher. ^150 Programmer. ^150 Innovator."],
    	typeSpeed: 75,
    	smartBackspace: false,
        showCursor: false,
        backSpeed: -100000,
        startDelay: 750

    }); */

    $('.grid').isotope({
	  layoutMode: 'masonryHorizontal',
	  itemSelector: '.grid-item',
	  masonryHorizontal: {
	    rowHeight: 100
	  }
	});
    
});