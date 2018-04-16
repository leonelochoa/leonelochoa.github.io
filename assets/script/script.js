$( document ).ready(function() {
    console.log( "ready!" );

   $("#wrapper").fullpage();

   var typed = new Typed('#titles', {
   	strings: ["Loading...", "Researcher.  ^150 Programmer.  ^150 Innovator.  "],
    	typeSpeed: 45,
        smartBackspace: false,
        showCursor: false
    });

});