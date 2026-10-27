class Food{
    constructor(world){
        this.world = world;
        this.draw()
        this.x = 10;
        this.y = 10;
    }

    draw(){
        const ctx = this.world.getContext();
        const size = this.world.cellSize;
        //this.world.draw();
        //this.snake.updateSnake();
        ctx.fillStyle = "pink";
        ctx.fillRect(this.x * size, this.y * size, size, size );
    }
}