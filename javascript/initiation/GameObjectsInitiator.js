
class GameObjectsInitiator{
	
	constructor(player1Name, player2Name, middleSection, p1_array, p2_array){
		this.player1Name = player1Name;
		this.player2Name = player2Name;
		this.middleSection = middleSection;
		this.p1_array = p1_array;
		this.p2_array = p2_array;
	}
	
	initiateGameObjects(){
		return this.initClasses(this.player1Name, this.player2Name, this.middleSection, this.p1_array, this.p2_array);
	}


	// initiating classes needed 
	 initClasses(player1Name, player2Name, middleSection, p1_array, p2_array){
	
		var cardListSec1 = new CreateCardList(6, firstXPoint, firstYPoint, xSizeCard, firstYSize, verticalSpace);
			cardListSec1 = cardListSec1.getCardListForSecOne();
		var cardListSec2 = new CreateCardList(2, secondXPoint, secondYPoint, xSizeCard, secondYSize, verticalSpace);
			cardListSec2 = cardListSec2.getCardList();
		var cardListSec3 = new CreateCardList(6, thirdXPoint, thirdYPoint, xSizeCard, thirdYSize, verticalSpace);
			cardListSec3 = cardListSec3.getCardList();
		
	
		// instances of section 1, section 2, section 3
		var sec1 = new Section(firstXPoint, firstYPoint, firstXSize, firstYSize, player1Name, cardListSec1);
		var sec2 = new Section(secondXPoint, secondYPoint, secondXSize, secondYSize, middleSection, cardListSec2);
		var sec3 = new Section(thirdXPoint, thirdYPoint, thirdXSize, thirdYSize, player2Name, cardListSec3);
						
		// instance of board
		var board = new Board(xPoint, yPoint, ySize, xSize, "fabric", sec1, sec2, sec3);
		
		// initiating the board
		board.initSections(p1_array, middleSection, p2_array);
		
		return board;
			
	} 
}