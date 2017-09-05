
class VariablesInitiator{	
	
	initiateVariables(gameArea){
		initVariables(gameArea);
	}
	
}

function initVariables(gameArea){		

		// canvas 
		 x = gameArea.canvas;
		
		// status bar height
		 statusBar = 0.10 * x.height;
		
		// side boarder space
		 sideBoarder = 0.07 * x.height;
		
		// height of a card
		 cardHeight = 0.22 * x.height;
			
		// length of card
		 xSizeCard = 0.125 * x.width;
		
		// space to leave around cards
		 horizontalSpace = 0.025 * x.height;
		 verticalSpace   = 0.025 * x.width; 
		
		// properties of board
		 xPoint = 0;
		 yPoint = statusBar;
		 xSize = x.width;
		 ySize = x.height - statusBar; 
		
		// properties of section first
		 firstXPoint = 0 + sideBoarder + verticalSpace;
		 firstYPoint = statusBar + sideBoarder + horizontalSpace;
		 firstXSize  = x.width;
		 firstYSize =  cardHeight;
		
		// properties of section second
		 secondXPoint = firstXPoint;
		 secondYPoint = firstYPoint + cardHeight + horizontalSpace;
		 secondXSize  = x.width;
		 secondYSize =  cardHeight;
		
		// properties of section third
		 thirdXPoint = secondXPoint;
		 thirdYPoint = secondYPoint + cardHeight + horizontalSpace;
		 thirdXSize  = x.width;
		 thirdYSize =  cardHeight;
		
	}