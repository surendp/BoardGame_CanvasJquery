
class Card extends Shape{
		
		constructor(x_coordinate, y_coordinate, x_size, y_size, card_value, cardIndex){
				super(x_coordinate, y_coordinate, x_size, y_size);
				this.value = card_value;
				this.section = "";
				this.index = cardIndex;
		}
		
		getValue(){
			return this.value;
		}
		
		getSection(){
			return this.section;
		}
		
		getIndex(){
			return this.index;
		}
		
		setSection(section){
			this.section = section;
		}
		
		setValue(value){
			this.value = value;
		}
		
		draw(gameArea){
			
			if(this.value == 0){
				return;
			}
			
			var img = new Image();
			
			img.src = "images/" + this.value + ".png";

			var x = super.getX();
			var y = super.getY();
			var len=  super.getBreadth();
			var height = super.getLength();
			
			img.addEventListener("load", function(){					
				gameArea.context.drawImage(img, x, y, len, height);
				//console.log(x + " " + y + " " + len + " " + height + " " + img);
			}, false);	

		}
	}
