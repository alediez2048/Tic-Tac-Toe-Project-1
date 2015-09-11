var visitorName = prompt("Howdy, welcome to lavieja, what is your name?")

alert("nice to meet you" + " " + visitorName + " get ready to play some vieja with us")



// Create a function that lets clicking show output a letter either x or O
// Add function to alternate between x and o with every players click 
// add reset button to refresh game
// create an array of all possible winning combinations
// Create a function that goes through winning combinations and outputsan alert 
		//it takes a minimum of 5 moves to win this game and a maximun, start checking combination after 5 clicks 
		//if after five clicks ids A1,A2,A3, B1,B2,B3... have been chosen sotp program and alert winner 
//Create a function that allows a cats game 

//Reset Button
 $("#clearContainer").click(function(){ 
	 $('.button').html('	Click me!');
	 });


//Player Alternate
  var playerOne = true; 

  $(".container button ").click(function(){ 
  	 if (playerOne===true){
  	 	$(this).text("x");
  	 	playerOne=false ;
  	 } 
  	 else { 
  	 		  $(this).text("o");
  	 		  playerOne=true ;
  	 } 

  	 determineWinner(); 
  }); 

//Winner Determination
  function determineWinner () {
  		var A1= $("#A1").text();
  		var A2= $("#A2").text();
  		var A3= $("#A3").text();
  		var A4= $("#A4").text();
  		var A5= $("#A5").text();
  		var A6= $("#A6").text();
  		var A7= $("#A7").text();
  		var A8= $("#A8").text();
  		var A9= $("#A9").text();

  		
  		if (A1 == "x" && A2 == "x" && A3 == "x"){
			alert("Player X Wins");
		}

		if (A1 == "o" && A2 == "o" && A3 == "o"){
			alert("Player O Wins");
		}

		if (A4 == "x" && A5 == "x" && A6 == "x"){
			alert("Player X Wins");
		}

		if (A4 == "o" && A5 == "o" && A6 == "o"){
			alert("Player O Wins");
		}

		if (A7 == "x" && A8 == "x" && A9 == "x"){
			alert("Player X Wins");
		}

		if (A7 == "o" && A8 == "o" && A9 == "o"){
			alert("Player O Wins");
		}

		if (A1 == "x" && A4 == "x" && A7 == "x"){
			alert("Player X Wins");
		}

		if (A1 == "o" && A4 == "o" && A7 == "o"){
			alert("Player O Wins");
		}

		if (A2 == "x" && A5 == "x" && A8 == "x"){
			alert("Player X Wins");
		}

		if (A2 == "o" && A5 == "o" && A8 == "o"){
			alert("Player O Wins");
		}

		if (A3 == "x" && A6 == "x" && A9 == "x"){
			alert("Player X Wins");
		}

		if (A3 == "o" && A6 == "o" && A9 == "o"){
			alert("Player O Wins");
		}

		if (A1 == "x" && A5 == "x" && A9 == "x"){
			alert("Player X Wins");
		}

		if (A1 == "o" && A5 == "o" && A9 == "o"){
			alert("Player O Wins");
		}

		if (A3 == "x" && A5 == "x" && A7 == "x"){
			alert("Player X Wins");
		}

		if (A3 == "o" && A5 == "o" && A7 == "o"){
			alert("Player O Wins");
		}
	};

// Cats Game

// if (determineWinner === true) {
// 		(alert("Player x wins") || alert ("player o wins"))
// 	} else { alert("This is a cats game")}
  		


//   // }


 
 
  





