
class ClassesInitiator{
	
	initiateClasses(){
		initClasses();
	}
	
}

	
	// initiating classes needed 
	function initClasses(){

		// card list for section 1, section 2, section 3 
		var cardListSec1 = getCardListForSec1(6, firstXPoint, firstYPoint, xSizeCard, firstYSize, verticalSpace);
		var cardListSec2 = getCardList(2, secondXPoint, secondYPoint, xSizeCard, secondYSize, verticalSpace);
		var cardListSec3 = getCardList(6, thirdXPoint, thirdYPoint, xSizeCard, thirdYSize, verticalSpace);
		
		// instances of section 1, section 2, section 3
		var sec1 = new Section(firstXPoint, firstYPoint, firstXSize, firstYSize, player1Name, cardListSec1);
		var sec2 = new Section(secondXPoint, secondYPoint, secondXSize, secondYSize, middleSection, cardListSec2);
		var sec3 = new Section(thirdXPoint, thirdYPoint, thirdXSize, thirdYSize, player2Name, cardListSec3);
						
		// instance of board
		board = new Board(xPoint, yPoint, ySize, xSize, "fabric", sec1, sec2, sec3);
		
		// initiating the board
		board.initSections(p1_array, middleSection, p2_array);
			
	}
	
	
		
	// function to fill the section with cards 
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
	
