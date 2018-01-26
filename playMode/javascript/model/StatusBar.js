
class StatusBar extends Shape{
	
	constructor(player1name, player2name,length, height){
		super(0,0, length, height);
		this.player1name = player1name;
		this.player2name = player2name;
	}
	
	setLength(length){
			super.setLength(length);
	}
		
	setHeight(height){
			super.setBreadth(height);
	}
	
	getLength(){
			return super.getLength();
	}
	
	getHeight(){
			return super.getBreadth();
	}
	
	draw(gameArea){
		var context = gameArea.context;
		context.font = super.getBreadth() + "px Arial";
		
		context.fillText(this.player1name,this.getLength() * 0.1  ,this.getBreadth() - 0.15 * this.getBreadth());
		context.fillText(this.player2name,this.getLength() * 0.6,this.getBreadth() - 0.15 * this.getBreadth());
	}
}