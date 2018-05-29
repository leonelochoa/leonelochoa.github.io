$( document ).ready(function() {
    console.log( "Ready ;)");

    var $isAnimatedMe = $('.isAnimatedMe'),
    	$isAnimatedHey = $('.isAnimatedHey'),
    	$isAnimatedLeo = $('.isAnimatedLeo'),
    	$isAnimatedGallery = $('.isAnimatedGallery'),
    	$isAnimatedGrid = $('.grid'),
    	$isAnimatedContact = $('.isAnimatedContact'),
    	$isAnimatedContactItem = $('.isAnimatedContactItem'),
    	$isAnimatedNavUp = $('.isAnimatedNavUp'),
    	$isAnimatedNavDown = $('.isAnimatedNavDown');

    	animation_over = false;


    $("#fullpage").fullpage({
    	navigation: true,
    	anchors:['Home', 'About'],

    	afterLoad: function(anchorLink, index){

    	if (animation_over == false){
    		function entrance(){
				$isAnimatedNavUp.addClass('animated slideInUp').css('animation-delay', '0').css('visibility', 'visible');
	    		$isAnimatedNavDown.addClass('animated slideInDown').css('animation-delay', '.3s').css('visibility', 'visible');
	    		$isAnimatedNavUp.addClass('animated slideInUp').css('animation-delay', '.6s').css('visibility', 'visible');
	    		$isAnimatedNavDown.addClass('animated slideInDown').css('animation-delay', '.9s').css('visibility', 'visible');
	    		$isAnimatedNavUp.addClass('animated slideInUp').css('animation-delay', '1.2s').css('visibility', 'visible');

	    		function active(){
				$isAnimatedNavUp.removeClass('animated slideInUp').addClass('animated hvr-float-shadow');
	    		$isAnimatedNavDown.removeClass('animated slideInDown').addClass('animated hvr-float-shadow');
	    		$isAnimatedNavUp.eq(0);
	    		$isAnimatedNavDown.eq(0);
	    		$isAnimatedNavUp.eq(1);
				}

				setTimeout(active, 2000);
				animation_over = true;
			}

			setTimeout(entrance, 6800);
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
    	location.href = "linkedin.com/in/leonel-ochoa";
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
        startDelay: 750 

    });

    
    
});