class Food{

    position = {
        x : null,
        y: null
    };

    constructor(world, snake){
        this.world = world;
        //this.snake = snake;
    }

    spawn(segments){
        this.position.x =  Math.floor(Math.random() * this.world.columns); // random
        this.position.y =  Math.floor(Math.random() * this.world.rows);
        while(this.isOnSnake(segments)){
            
            this.position.x = Math.floor(Math.random() * this.world.columns);
            this.position.y = Math.floor(Math.random() * this.world.rows);
            
        }
    }

    getPosition(){
        return this.position;
    }

    draw(){


        if (this.position.x === null)
            return;

        const ctx = this.world.getContext();
        const size = this.world.cellSize;
        //this.world.draw();
        //this.snake.updateSnake();
        ctx.fillStyle = "pink";
        ctx.fillRect(this.position.x * size, this.position.y * size, size, size );
    }
    
    isOnSnake(segments){
        for(let segment of segments){
            if(segment.x === this.position.x  &&  segment.y === this.position.y){
                return true;
            }
        }
        return false;
    }
}