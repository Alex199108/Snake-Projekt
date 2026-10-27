class Game{
    speed = 200;
    lastMoveTime = 0;
    constructor(){
        this.world = new World(600, 600);
        this.snake = new Snake(this.world);
        this.start();
    }

     loop(timestamp){

        if(timestamp - this.lastMoveTime >= this.speed){
            this.snake.move();
            this.lastMoveTime = timestamp;
        }
        if(this.snake.isGameOver){
            return;
        }
        this.start();
    }

    start(){
        requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
}
