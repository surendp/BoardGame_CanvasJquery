
class GameEngine{
	
	constructor(player1Name, player2Name, middleSection, p1_array, p2_array, orientation){
		this.canvas = new Canvas(orientation);
		this.variablesInitiator = new VariablesInitiator();
		this.gameObjectsInitiator = new GameObjectsInitiator(player1Name, player2Name, middleSection, p1_array, p2_array);
		this.gameInitiator = null;
		
		// length and height should be set later
		this.statusBar = new StatusBar(player1Name, player2Name, 0, 0);
	}
	
	start(){
		// initiate game initiator and initiate the game
		this.gameInitiator = new GameInitiator(this.canvas, this.variablesInitiator, this.gameObjectsInitiator, this.statusBar);
		var board = this.gameInitiator.initiateGame();
		
		// return the board
		return board;
	}
	
	// get the canvas 
	getCanvas(){
		return this.canvas;
	}
	
	// get board object
	getBoard(){
		return this.gameInitiator.getBoard();
	}
	
	// get variable initiator
	getVariablesInitiator(){
		return this.variablesInitiator;
	}
	
}