
class Canvas{
	
	getGameArea(){
		return gameArea();
	}	
	
	loadGame(){
		loadGame();
	}
}

function gameArea(){
		// creating the game area 
		// associative array is used
		var gameArea = {
			canvas : document.getElementById("main"),
			start : function(width, height){
				this.canvas.width = width;
				this.canvas.height = height;
				this.context = this.canvas.getContext("2d");
			}
		}

		return gameArea;
}

// load the game screen
function loadGame(){		
		// size of body
		var height = window.innerHeight;
		var width  = window.innerWidth;
		
		if(height > width){
			gameArea.start( height, width);
			$("#main").addClass("can");
			currentOrientation = "portrait";
		}
		else{
			gameArea.start( width, height);
			$("#main").removeClass("can");
			currentOrientation = "landscape";
		}
}