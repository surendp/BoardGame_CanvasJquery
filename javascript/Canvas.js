
class Canvas{
	
	constructor(orientation){
		
		// creating the game area 
		// associative array is used
		this.gameArea = {
			canvas : document.getElementById("main"),
			start : function(width, height){
				this.canvas.width = width;
				this.canvas.height = height;
				this.context = this.canvas.getContext("2d");
			}
		}
		
		this.orientation = orientation;
	}
	

	// load the game screen
	loadGame(){
		// size of body
		var height = window.innerHeight;
		var width  = window.innerWidth;
		
		if(height > width){
			this.gameArea.start( height, width);
			$("#main").addClass("can");
			this.Orientation = "portrait";
		}
		else{
			this.gameArea.start( width, height);
			$("#main").removeClass("can");
			this.Orientation = "landscape";
		}
	}
	
	// get game area
	getGameArea(){
		return this.gameArea;
	}	
	
	// get orientation
	getOrientation(){
		return this.orientation;
	}
	
}

