
// This class gets the card that is clicked on the canvas
// It takes xCoordinate and yCoordinate of the clicked point 

class GetClickedCard{
	
	constructor(xCoordinate , yCoordinate){
		this.x = xCoordinate;
		this.y = yCoordinate;
	}
	
	
	clickedSection(y_coor){
				
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
	
	 clickedCard(section , x_coor){
		
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
	
	 getClickedCard(){
			
			var x_coor = this.x;
			var y_coor = this.y;
			
			// function to get the section
			var section = this.clickedSection(y_coor);
			
			// get clicked card 
			var clickCard = this.clickedCard(section, x_coor); 
			
			
			// return the card
			return clickCard;
	}
	
	
}


	