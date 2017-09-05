
/*	
	// function to rotate tha coordinates 
	function rotate(x, y){
		var coordinates = {
			xValue : -1*y ,
			yValue : x
		};
		
		return coordinates;
	}
	
 	// funciton to rotate the coordinates of single card
	function rotateShape(shape){
		var x = shape.getX();
		var y = shape.getY();
			
		// returns the associative array of x and y coordinates
		var updatedCoordinates = rotate(x, y);
		
		// new coordinates
		x = updatedCoordinates.xValue;
		y = updatedCoordinates.yValue;
		
		shape.setX(x);
		shape.setY(y);
	}
	
	// function to rotate all the cards of given section and the section itself
	function rotateSection(section){
		
		//get the cards of the given section
		var cards = section.getCards();
		
		// change the coordinate of the seciton
		rotateShape(section);
		
		for(var i = 0; i < cards.length; i ++){
			
			// rotate the card
			rotateShape(cards[i]);
		}
	}
	
	// fuction to rotate all the sections 
	function rotateSections(board){
		// get all the secitons of the given board
		var sections = board.getSections();
		
		for (var i = 0; i < sections.length; i ++){
				
			// rotate the  section
			rotateSection(sections[i]);
		} 
		
	}
 */
 
 /* 	// function to fill the section with cards 
	function getCardList(howMany, x, y, xSize, ySize, verticalSpace){
		var list = [];		
		for (var i = 0; i < howMany; i ++){
			var x_value = x + i * (verticalSpace + xSize);
			
			// position of the second card for second section 
			if(i == 1 && howMany == 2){
				x_value = x + 5 * (verticalSpace + xSize);
			}
			
			var card = new Card(x_value, y , ySize, xSize, "card", i);
			list.push(card);
		}
		
		return list;
	}
	
	function getCardListForSec1(howMany, x, y, xSize, ySize, verticalSpace){
		var list = [];		
		for (var i = 0; i < howMany; i ++){
			var x_value = x + i * (verticalSpace + xSize);
			
			var card = new Card(x_value, y , ySize, xSize, "card", 5-i);
			list.push(card);
		}
		
		return list;
	}
	 */
	 
	 /* 	
	function clickedSection(y_coor){
		
		var sections = board.getSections();
		var returnSection = null;
		
		// check if y coordinte is in the range of sec1, sec2, or sec3
		for(var i = 0; i < sections.length; i ++){
			var sec = sections[i];
			var y1 = sec.getY();
			var y2 = y1 + cardHeight;
			
			// check if the coordinate lies in the range
			if (y_coor >= y1 && y_coor <= y2 ){
				returnSection = sec;
				break;
			}
			
		}
		
		return returnSection;
	
	}
	
	// function to return the card
	function clickedCard(section , x_coor){
		// check section
		if(section == null){
			return null;
		}
		
		// get cards from the section and initiate the clickedCard
		var cards = section.getCards();
		var clickedCard = null;
		
		//loop through the cards and get the card
		for (var i = 0; i < cards.length; i ++) {
			
			// store current card, left and right coordinates
			 var currentCard = cards[i];
			 var xLeft = currentCard.getX();
			 var xRight = xLeft + xSizeCard;
			 
			 if(x_coor >= xLeft && x_coor <= xRight){
				 clickedCard = currentCard;
				 break;
			 }
			 
		}
		
		return clickedCard;
	}
	
	// function to return card
	function getClickedCard(x_coor, y_coor){
			
			// function to get the section
			var section = clickedSection(y_coor);
			
			// get clicked card 
			var clickCard = clickedCard(section, x_coor); 
			
			// return the card
			return clickCard;
	}
	 */
	 
	 
/* 		// check game status
	function game_over(p1_array, p2_array){
		var sum_p1 = get_sum(p1_array);
		var sum_p2 = get_sum(p2_array);
		
		//console.log(sum_p1, sum_p2);
		if(sum_p1 == 0 || sum_p2 == 0){
			
			if(sum_p1 == 0){
				console.log(player1Name + " wins");
			}
			else{
				console.log(player2Name + " wins");	
			}
			
		}
	}
	
	// function to get the sum of the values in the array
	function get_sum(array){
		var sum = 0;
		for(var i = 0; i < array.length; i++){
			sum += array[i];
		}
		return sum;
	}
 */

 
 /* 	
	// This function increases the value of each index of the array by 1 starting from the given index
	// unless the card value turns out to be 0
	// Returns the remaining value in the card
	function update_player(p_array, start_index, card){
		for(var i = start_index; i < p_array.length; i++){
			if(card > 0){
				card --;
				p_array[i] += 1;
			}else{
				break;
			}
		}		
		return card;
	}
	
	// function to capture array
	function capture_array(touchedSection, p1_array, p2_array){
		
		var array_return = p1_array;
		
			if(touchedSection == player2Name){
				array_return = p2_array;
				//array_return[1] = index;
				 
			}
			
		return array_return;
	}
	
	// updating functions
	function updateGameStatus(touchedCard, p1_array, p2_array ){
		
		var currentSection = touchedCard.getSection();
		var index = touchedCard.getIndex() ;
		var last_iterated_div = "";
		
		var array_new = capture_array(currentSection, p1_array, p2_array);
		var array = array_new;
		
		var card = array[index];
		
		
		for(;;){		
			
			if(card <= 0){
				break;
			}
			

			// function return array and the index from where to start
			array_new = capture_array(currentSection, p1_array, p2_array);
			
			// assigning the array and the index 
			array = array_new;						
			//console.log(current_div);
			//console.log(card, index);
			

			if(last_iterated_div == ""){
				
				if(currentSection == player1Name){
					// change the last_iterated_div to current div
					last_iterated_div = player1Name;
					currentSection = player2Name; 					
				}else{
					// change the last_iterated_div to current div
					last_iterated_div = player2Name;
					currentSection = player1Name;
				}				

				// update the player
				// since the last iterated section is null 
				// increasing the value of the cards is done 
				// from 1 index further
				card = update_player(array, index + 1, card);
				card--;
				// change the selected image to 0
				array[index] = 0;
				
				// change the index to zero for next iteration
				index = 0;
				//console.log(current_div);
			}
			else{
				
				if(currentSection == player1Name){
					// change the last_iterated_div to current div
					last_iterated_div = player1Name;
					currentSection = player2Name;
				}else{
					// change the last_iterated_div to current div
					last_iterated_div = player2Name;
					currentSection = player1Name;
				}
				
				// update the player
				card = update_player(array, index, card);
				card--;
			
				
				// change the index to zero for next iteration
				index = 0;
				//console.log(current_div);
			}
		}		
		
	}
 */

 
	/* 
	 // creating game object
	var canvas = new Canvas();
	 
	// game area to draw  shapes
	// associative array 
	// global variable
	gameArea = canvas.getGameArea();
	
	
	//Initiate the variable initiating object
	var variablesInitiate = new VariablesInitiator();
	

	

	// function to initiate the game
	function initGame(){
		// calculating the game area
		canvas.loadGame();
		
		// initiating  the game variables
		variablesInitiate.initiateVariables();
		
		// initiating  the game classes
		var gameInitiate = new GameObjectsInitiator(player1Name, player2Name, middleSection, p1_array, p2_array);
		board = gameInitiate.initiateGameObjects();
		
		// draw the board
		board.draw(gameArea);
	
	}
	 */
	 