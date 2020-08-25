
class CreateCardList{
	
	constructor(numberOfCards, xCoor, yCoor, x_size, y_size, vertical_space){
		this.size = numberOfCards;
		this.x = xCoor;
		this.y = yCoor;
		this.x_size = x_size;
		this.y_size = y_size;
		this.vertical_space = vertical_space;
	}
	
	getCardList(){
		
		var list = [];		
		for (var i = 0; i < this.size; i ++){
			var x_value = this.x + i * (this.vertical_space + this.x_size);
			
			// position of the second card for second section 
			if(i == 1 && this.size == 2){
				x_value = this.x + 5 * (this.vertical_space + this.x_size);
			}
			
			var card = new Card(x_value, this.y , this.y_size, this.x_size, "card", i);
			list.push(card);}
		
		return list;
	}
	
	
	getCardListForSecOne(){
		
		var list = [];		
		
		for (var i = 0; i < this.size; i ++){
			
			var x_value = this.x + i * (this.vertical_space + this.x_size);
			
			var card = new Card(x_value, this.y , this.y_size, this.x_size, "card", 5-i);
			
			list.push(card);
		}
		
		return list;
		
	}
}

	