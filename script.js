// var visitorName = prompt("Howdy, welcome to lavieja, what is your name?")

// alert("nice to meet you" + visitorName + " get ready to play some vieja with us")



// Create a function that lets clicking show output a letter either x or O
// Add function to alternate between x and o with every players click 
// add reset button to refresh game
// create an array of all possible winning combinations
// Create a function that loops through winning combinations and outputsan alert 
		//it takes a minimum of 5 moves to win this game, start checking combination after 5 clicks 
		//if after five clicks ids A1,A2,A3, B1,B2,B3... have been chosen sotp program and alert winner 


 

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



//var winCombo = [(A1,A2,A3),(B1,B2,B3),(C1,C2,C3),(A1,B1,C1),(A2,B2,C2),(A3,B3,C3),(A1,B2,C3),(A3,B2,C1)]

  // function determineWinner {
  // 		for (var i = 0; i < 3; i++)


  // }


 
 
  





