// 
var visitorName = prompt("what is your name?")
// alert("nice to meet you" + " " + visitorName + " get ready to play some vieja with us")



// Create a function that lets clicking show output a letter either x or O
// Add function to alternate between x and o with every players click 
// add reset button to refresh game
// create an array of all possible winning combinations
// Create a function that goes through winning combinations and outputsan alert 
		//it takes a minimum of 5 moves to win this game and a maximun, start checking combination after 5 clicks 
		//if after five clicks ids A1,A2,A3, B1,B2,B3... have been chosen sotp program and alert winner 
//Create a function that allows a cats game 
//Create READY TO PLAY BUTTON 

$("#startGame").click(function(){
	alert("OK"+" " + visitorName + " LEEEETS GET READY TO RUMBLEEEEEEE")
});


//Reset Button
 $("#clearContainer").click(function(){ 
	 $('.button').html('');
	 });


//Player Alternate
  var playerOne = true; 

  $(".container button ").click(function(){
  	buttonCount++; 
  	 if (playerOne===true){
  	 	$(this).text("X");
  	 	playerOne=false ;
  	 } 
  	 else { 
  	 		  $(this).text("O");
  	 		  playerOne=true ;
  	 } 

  	 determineWinner(); 
  	 catsGame();
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

  		
  		if (A1 == "X" && A2 == "X" && A3 == "X"){
			alert("Player X Wins");
				$('.button').html('');
				buttonCount=0;

		}

		if (A1 == "O" && A2 == "O" && A3 == "O"){
			alert("Player O Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A4 == "X" && A5 == "X" && A6 == "X"){
			alert("Player X Wins");
				$('.button').html('');
				buttonCount=0;

		}

		if (A4 == "O" && A5 == "O" && A6 == "O"){
			alert("Player O Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A7 == "X" && A8 == "X" && A9 == "X"){
			alert("Player X Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A7 == "O" && A8 == "O" && A9 == "O"){
			alert("Player O Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A1 == "X" && A4 == "X" && A7 == "X"){
			alert("Player X Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A1 == "O" && A4 == "O" && A7 == "O"){
			alert("Player O Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A2 == "X" && A5 == "X" && A8 == "X"){
			alert("Player X Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A2 == "O" && A5 == "O" && A8 == "O"){
			alert("Player O Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A3 == "X" && A6 == "X" && A9 == "X"){
			alert("Player X Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A3 == "O" && A6 == "O" && A9 == "O"){
			alert("Player O Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A1 == "X" && A5 == "X" && A9 == "X"){
			alert("Player X Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A1 == "O" && A5 == "O" && A9 == "O"){
			alert("Player O Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A3 == "X" && A5 == "X" && A7 == "X"){
			alert("Player X Wins");
				$('.button').html('');
				buttonCount=0;
		}

		if (A3 == "O" && A5 == "O" && A7 == "O"){
			alert("Player O Wins");
				$('.button').html('');
				buttonCount=0;
		}
	};

// function catsGame () {

// 	if 
// }

// Cats Game

// if (determineWinner === true) {
// 		(alert("Player x wins") || alert ("player o wins"))
// 	} else { alert("This is a cats game")}
  
var buttonCount = 0;

	function catsGame (){

		if (buttonCount===9) {
			alert("This is a cats game");
			buttonCount=0;
		} 

	}




// //   // }


 
 
  





