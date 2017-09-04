	
	class Section extends Shape{
		
		constructor(x_coordinate, y_coordinate, x_size, y_size, section ,cardList){
			super(x_coordinate, y_coordinate, x_size, y_size);
			this.cards = cardList; 
			this.name = section;
		}
		
		getName(){
				return this.name;
		}
		
		getCards(){
			return this.cards;
		}
		
		updateCardValues(values){
			for(var i = 0; i < values.length; i ++){
				this.cards[i].setValue(values[0]);
			}
		}
		
	}