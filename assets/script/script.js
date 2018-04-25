$( document ).ready(function() {
    console.log( "ready!" );

    $("#fullpage").fullpage({

    });

    var typed = new Typed("#titles", {
   	strings: ["Researcher. ^150 Programmer. ^150 Innovator."],
    	typeSpeed: 75,
    	smartBackspace: false,
        showCursor: false,
        backSpeed: -100000,
        startDelay: 750

    });

});