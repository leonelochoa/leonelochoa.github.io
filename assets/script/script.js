$( document ).ready(function() {
    console.log( "ready!" );

   $("#wrapper").fullpage();

   var typed = new Typed('.typed', {
   	strings: ["Loading...", "Researcher.  ^175 Programmer.  ^175 Innovator.  "],
    	typeSpeed: 85,
        smartBackspace: false,
        showCursor: false
    });

});