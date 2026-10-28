class Game{
    speed = 200;
    lastMoveTime = 0;

    constructor(){
        this.world = new World(600, 600);
        this.food = new Food(this.world);
        this.snake = new Snake(this.world, this.food);
        this.food.spawn(this.snake.segments);
        this.scoreElement = document.getElementById("score"); 
        this.draw();
        this.start();
        
    }

     loop(timestamp){

        if(timestamp - this.lastMoveTime >= this.speed){
            this.snake.move();
            this.lastMoveTime = timestamp;

            this.draw();
        }
        if(this.snake.isGameOver){
            return;
        }
        this.start();
    }

    start(){
        requestAnimationFrame((timestamp) => this.loop(timestamp));
    }


    draw(){

        this.world.draw();
        this.food.draw();
        this.snake.updateSnake();
        this.scoreElement.textContent = this.snake.getScore();

        if (this.snake.isGameOver){
            this.world.drawGameOver();
        }

    }
}
