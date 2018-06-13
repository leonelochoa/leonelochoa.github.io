$( document ).ready(function() {
    console.log( "Ready ;)");

    if (window.innerHeight > window.innerWidth){
    alert("For the best user experience switch to landscape - Leo");
}

    var $isAnimatedMe = $('.isAnimatedMe'),
    	$isAnimatedHey = $('.isAnimatedHey'),
    	$isAnimatedLeo = $('.isAnimatedLeo'),
    	$isAnimatedGallery = $('.isAnimatedGallery'),
    	$isAnimatedGrid = $('.grid'),
    	$isAnimatedContact = $('.isAnimatedContact'),
    	$isAnimatedContactItem = $('.isAnimatedContactItem'),
    	$isAnimatedNav = $('.isAnimatedNav');

    	animation_over = false;


    $("#fullpage").fullpage({
    	navigation: true,
    	scrollOverflow: true,
    	anchors:['Home', 'About'],

    	afterLoad: function(anchorLink, index){

    	if (animation_over == false){
    		function entrance(){
				$isAnimatedNav.addClass('animated slideInUp').css('visibility', 'visible');
	    		$isAnimatedNav.addClass('animated slideInUp').css('visibility', 'visible');
	    		$isAnimatedNav.addClass('animated slideInUp').css('visibility', 'visible');
	    		$isAnimatedNav.addClass('animated slideInUp').css('visibility', 'visible');
	    		$isAnimatedNav.addClass('animated slideInUp').css('visibility', 'visible');

	    		function active(){
	    		$isAnimatedNav.removeClass('animated slideInUp').addClass('animated hvr-grow');
	    		$isAnimatedNav.eq(0);
	    		$isAnimatedNav.eq(1);
	    		$isAnimatedNav.eq(2);
	    		$isAnimatedNav.eq(3);
				}

				setTimeout(active, 2000);
				animation_over = true;
			}

			setTimeout(entrance, 7625);
    	}
    		
    		
    	},

    	onLeave: function(index, nextIndex, direction) {

    	//From: https://webdesign.tutsplus.com/tutorials/quick-tip-scroll-animations-with-fullpagejs-and-animatecss--cms-25235

    	if( index == 1 && nextIndex == 2 ) { 
	        $isAnimatedMe.addClass('animated rollIn').css('animation-delay', '.5s'); // jQuery Function Number 1: (.addClass)
	        $isAnimatedHey.addClass('animated fadeInRight').css('animation-delay', '2s'); // jQuery Function Number 2: (.css)
	        $isAnimatedLeo.addClass('animated jackInTheBox').css('animation-delay', '3.5s');
      		}
	    }

    });

    $('#instagram').click( function(){ //jQuery Function 4: (.click)
    	location.href = "https://www.instagram.com/8a.leo/";
    });

    $('#linkedin').click( function(){ 
    	location.href = "https://www.linkedin.com/in/leonel-ochoa";
    });

    $('#resume').click( function(){ 
    	location.href = "./assets/OchoaLeonelCV.pdf";
    });

    /* $('.grid').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3
	}); */

    var typed = new Typed("#titles", {
   	strings: ["Photographer.  ^130 Researcher.  ^130 Innovator."],
    	typeSpeed: 90,
    	smartBackspace: false,
        showCursor: false,
        startDelay: 1500 

    });

    
    
});