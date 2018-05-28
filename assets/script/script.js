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


    $("#fullpage").fullpage({
    	navigation: true,
    	anchors:['home', 'about'],

    	onLeave: function(index, nextIndex, direction) {

    	//To create the code below, I used this tutorial: https://webdesign.tutsplus.com/tutorials/quick-tip-scroll-animations-with-fullpagejs-and-animatecss--cms-25235

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
   	strings: ["Photographer.  ^150 Researcher.  ^150 Innovator."],
    	typeSpeed: 75,
    	smartBackspace: false,
        showCursor: false,
        startDelay: 750 

    });

    
    
});