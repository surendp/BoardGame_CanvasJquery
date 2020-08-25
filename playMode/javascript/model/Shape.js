
	
	class Shape{
		
		constructor(x_coordinate, y_coordinate, x_size, y_size){
			this.x = x_coordinate;
			this.y = y_coordinate;
			this.length = x_size;
			this.breadth = y_size;
		}

		getX(){
			return this.x;
		}
		
		getY(){
			return this.y;
		}
		
		setX(x){
			this.x = x;
		}
		
		setY(y){
			this.y = y;
		}
		
		setLength(length){
			this.length = length;
		}
		
		setBreadth(breadth){
			this.breadth = breadth;
		}
		
		
		getLength(){
			return this.length;
		}
		
		getBreadth(){
			return this.breadth;
		}
		
		draw(){
			console.log("position: " + this.x + " " + this.y + "\nsize: "+
						this.length + " * " + this.breadth );
		}
		
	}
