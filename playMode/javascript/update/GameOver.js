
class GameOver{
	
	constructor(player1, player2){
		this.player1Name = player1;
		this.player2Name = player2;
	}
	
	// check game status
	game_over(p1_array, p2_array){
		var sum_p1 = this.get_sum(p1_array);
		var sum_p2 = this.get_sum(p2_array);
		
		//console.log(sum_p1, sum_p2);
		if(sum_p1 == 0 || sum_p2 == 0){
			
			if(sum_p1 == 0){
				localStorage.winner = this.player1Name;
				console.log(this.player1Name + " wins");
			}
			else{
				localStorage.winner = this.player2Name;
				console.log(this.player2Name + " wins");	
			}
			
		}
	}
	
	
	// function to get the sum of the values in the array
	get_sum(array){
		var sum = 0;
		for(var i = 0; i < array.length; i++){
			sum += array[i];
		}
		return sum;
	}

	
		
}

		

	