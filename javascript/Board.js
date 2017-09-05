	
	class Board extends Shape{
		
		constructor(x_coordinate, y_coordinate, x_size, y_size, image_name, sec1, sec2, sec3){
				super(x_coordinate, y_coordinate, x_size, y_size);
				this.name = image_name;
				this.section = [sec1, sec2, sec3];		
			
		}
		
		getSections(){
			return this.section;
		}
				
		
		initSections(section1Values, section2Values, section3Values){
				this.fillSection(this.section[0], section1Values);
				this.fillSection(this.section[1], section2Values);
				this.fillSection(this.section[2], section3Values);

		}
		
		updateSections(section1Values, section3Values){
			this.fillSection(this.section[0], section1Values);
			this.fillSection(this.section[2], section3Values);
		}
		
	
		draw(gameArea){
			var img = new Image();
			
			img.src = "images/" + this.name + ".png";
			
			var x = super.getX();
			var y = super.getY();
			var len=  super.getBreadth();
			var height = super.getLength();
			
			var sec = this.section;
			
			img.addEventListener("load", function(){			
				gameArea.context.drawImage(img, x, y, len, height);

				for(var i = 0; i < 3; i++){	
					var seci =  sec[i].getCards();
					for (var card = 0; card < seci.length; card++ ){
						seci[card].draw(gameArea);
					}
				}
			}, false);
			
		}
		
		//  funciton to update the values of the cards of the given section
		fillSection(section, values){
			var cards = section.getCards();
			for(var i = 0; i < values.length; i ++){
				var index = cards[i].getIndex();
				cards[i].setValue(values[index]);
				cards[i].setSection(section.getName());
				
				//console.log(cards[i].getValue());
			}
		}
	}
	

	
	