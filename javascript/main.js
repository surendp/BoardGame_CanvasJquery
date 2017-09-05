

// document ready
$(function(){
	
	// orientation 
	var orientation = "";
	

	// function to draw the board
	function drawBoard(){
		// draw the board
		board.draw(gameArea);
	}
	
	
	// function to update the game status
	function updateGame(){
		
		// update the players sections 
		board.updateSections(p1_array, p2_array);
		
		// draw the board again
		drawBoard();		
		
		
	}
	


	// funciton to fill the players' cards their values
	function fillArray(array){
		for (var i = 0; i < array.length ; i++ ){
			array[i] = i + 1;
		}
	}

	// defining players default name
	var player1Name = "p1";
	var player2Name = "p2";
	var middleSection = "mid";
	
	// defining the arrays for players
	var p1_array = [0, 0, 0, 0, 0, 0];
	var p2_array = [0, 0, 0, 0, 0, 0];
	var middleSection = ["void", "void"];
	
	// filling the arrays
	fillArray(p1_array);
	fillArray(p2_array);
	
	// reverse the player 1 and 2 array
	p2_array.reverse();
	p1_array.reverse();


	// initiate game engine
	 var gameEngine = new GameEngine(player1Name, player2Name, middleSection, p1_array, p2_array, orientation);
	  board = gameEngine.start();
	 
	 // get canvas ,game area and orientation
	 var canvas = gameEngine.getCanvas();
	  gameArea = canvas.getGameArea();
	  orientation = canvas.getOrientation();
	 
	 // get variable Initiator
	 var variablesInitiator = gameEngine.getVariablesInitiator();
	
	
	
	//initiate game updater 
	var gameUpdater = new UpdateGame(player1Name, player2Name);
	
	// click event added to the canvas
	gameArea.canvas.addEventListener("click", function(e){
		
		// noting x and y position
		var x_coor = e.clientX;
		var y_coor = e.clientY;
		
		// print in console
		//console.log(x_coor, y_coor);
		if(orientation == "portrait"){
			x = x_coor;
			x_coor =  y_coor;
			y_coor =  -1 * x + gameArea.canvas.height;
		}
		
	    console.log(x_coor, y_coor);
			
		// get the clicked card
		var clickedCard = new  GetClickedCard(x_coor, y_coor);
			clickedCard = clickedCard.getClickedCard();
			
		// update the game game status	
			gameUpdater.updateGameStatus(clickedCard, p1_array, p2_array);
		
		// check game over
		var checkGameStatus = new GameOver(player1Name, player2Name);
		checkGameStatus.game_over(p1_array, p2_array);
		
		// update the game
		updateGame();
		
		
	});

	// re-calculating the canvas size
	$(window).on("orientationchange", function(){
		
		if(orientation == "portrait"){
			orientation = "landscape";
		}else{
			orientation = "portrait";
		}
		
		// re-calculating the game area
		canvas.loadGame();
		
		// re-calculating  the game variables
		variablesInitiator.initiateVariables();
		
		// drawing the board after recalculation
		board.draw(gameArea);
	});
	
});