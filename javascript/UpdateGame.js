
class UpdateGame{
	
	constructor(player1Name, player2Name){
		this.player1Name = player1Name;
		this.player2Name = player2Name;
	}
	
	// updating functions
	 updateGameStatus(touchedCard, p1_array, p2_array ){
		
		var currentSection = touchedCard.getSection();

		var index = touchedCard.getIndex() ;
		var last_iterated_div = "";
		
		var array_new = this.capture_array(currentSection, p1_array, p2_array);
		var array = array_new;
		
		var card = array[index];
		
		
		for(;;){		
			
			if(card <= 0){
				break;
			}
			

			// function return array and the index from where to start
			array_new = this.capture_array(currentSection, p1_array, p2_array);
			
			// assigning the array and the index 
			array = array_new;						
			//console.log(current_div);
			//console.log(card, index);
			

			if(last_iterated_div == ""){
				
				if(currentSection == this.player1Name){
					// change the last_iterated_div to current div
					last_iterated_div = this.player1Name;
					currentSection = this.player2Name; 					
				}else{
					// change the last_iterated_div to current div
					last_iterated_div = this.player2Name;
					currentSection = this.player1Name;
				}				

				// update the player
				// since the last iterated section is null 
				// increasing the value of the cards is done 
				// from 1 index further
				card = this.update_player(array, index + 1, card);
				card--;
				// change the selected image to 0
				array[index] = 0;
				
				// change the index to zero for next iteration
				index = 0;
				//console.log(current_div);
			}
			else{
				
				if(currentSection == this.player1Name){
					// change the last_iterated_div to current div
					last_iterated_div = this.player1Name;
					currentSection = this.player2Name;
				}else{
					// change the last_iterated_div to current div
					last_iterated_div = this.player2Name;
					currentSection = this.player1Name;
				}
				
				// update the player
				card = this.update_player(array, index, card);
				card--;
			
				
				// change the index to zero for next iteration
				index = 0;
				//console.log(current_div);
			}
		}		
		
	}
	
	
	
	// function to capture array

	capture_array(touchedSection, p1_array, p2_array){
		
		var array_return = p1_array;
		
			if(touchedSection == this.player2Name){
				array_return = p2_array;
				//array_return[1] = index;
				 
			}
			
		return array_return;
	}
		
		
	// This function increases the value of each index of the array by 1 starting from the given index
	// unless the card value turns out to be 0
	// Returns the remaining value in the card
	update_player(p_array, start_index, card){
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
	
	
	
}



	
