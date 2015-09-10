// var visitorName = prompt("Howdy, welcome to lavieja, what is your name?")

// alert("nice to meet you" + visitorName + " get ready to play some vieja with us")



// Create a function that lets clicking show output a letter either x or O
// Add function to alternate between x and o with every players click 


  var playerOne = true; 

  $(".container button ").click(function(){ 
  	 if (playerOne===true){
  	 	$(this).html("<p> X </p>");
  	 	playerOne=false ;
  	 } 
  	 else { 
  	 		  $(this).html("<p> O </p>");
  	 		  playerOne=true ;
  	 } 
  }); 
  	
  
  	 
// });


// var playerTwo = false

// $(".container button").click(function() {
//   $(this).html("<p> O </p>");
 
// });







