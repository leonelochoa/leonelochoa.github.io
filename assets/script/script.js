$( document ).ready(function() {
    console.log( "ready!" );

   var typed = new Typed('#titles', {
   	strings: ["Loading...", "Researcher.  ^175 Programmer.  ^175 Innovator.  "],
    	typeSpeed: 30,
        smartBackspace: false,
        showCursor: false
    });

   $("#fullpage").fullpage();

});