
class GameInitiator{
	
	constructor(canvas, variablesInitiator, gameObjectsInitiator){
		this.canvas = canvas;
		this.variablesInitiator = variablesInitiator;
		this.gameObjectsInitiator = gameObjectsInitiator;
		this.board = null;
	}
	
	
	// function to initiate the game
	initiateGame(){
		// calculating the game area
		this.canvas.loadGame();
		
		// initiating  the game variables
		this.variablesInitiator.initiateVariables(this.canvas.getGameArea());
		
		// initiating  the game classes
		this.board = this.gameObjectsInitiator.initiateGameObjects();		
		
		// draw the board
		this.board.draw(this.canvas.getGameArea());
		
		// return board
		return this.board;
	
	}
	
	
	// get board
	getBoard(){
		return this.board;
	}
	
}
