// JavaScript Document
var drawModule = function(){
	
	var bodysnake = function(x, y) {
		ctx.fillStyle = 'green';
		ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
		ctx.fillStyle = 'darkgreen';
		ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize,snakeSize);
	}
	
	var pizza = function(x,y) {
	ctx.fillStyle = 'yellow';
		ctx.fillStyle = 'red' ;
		ctx.fillRect (x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
		
	
	}
	
	var score_text =function(){
	var score_text = "score" + score;
		ctx.fillStyle = 'blue';
		ctx.fillText(score_text, 145, h-5);
	}
	var drawsnake = function ()	{
		var length = 4;
		snake = [];
		for (var i = length -1; i>=0;i--);
	snake.push({x:i, y:0})
	}
		
	var paint =function () {
		ctx.fillStyle='lightgrey';
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle =  'black';
		ctx.strokeRect (0, 0, w, h);
		
btn.setAttribute('disabled', true);
		
var snakeX = (0) .x;
var snakeY = (0) .y;

if (direction == 'right') {
	snakeX++ ;
}
		else if (direction == 'left') [
			snakeX--;
			
		]
		else if (direction == 'up') {
			snakeY --;
		}
		else if (direction == 'down') {
			
			snakeY++;
		}
	 if (snakeX == -1|| snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize  || check Collision (snakeX snakeY, Snake) );
	 //restart game
	 btn.removeattribute('disabled , true')
		ctx.clearRect (0,0,w,h);
		gameloop = clearInterval (gameloop) ;
		return;
		
		
		if (snakeX == food.x && snakeY == food.y);[
			
			var tail= [x:snakeX, y: snakeY]; // create a new head instead of moving the tail ;
		score++ ;
		]
		{createfood (); // create new food 
		] else[ 
			var tail = snake.pop // pops out the last cell; 
			tail.x = snakeX;
			tail.y= snakeY ;
			// the snake can now eat food
			snake.unshift(tail)// puts back the tail as the first cell
			for(var i = 0; i <snake.lenght; i++>) {bodysnake (snake(i) .x ,snake (i) .y);
			}
			
		pizza(food.x, food.y); scoretext () {
			
			}