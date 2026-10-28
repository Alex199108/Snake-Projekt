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

        do{
            
            this.position.x = Math.floor(Math.random() * this.world.columns);
            this.position.y = Math.floor(Math.random() * this.world.rows);
            
        }while(this.isOnSnake(segments));
    }

    getPosition(){
        return this.position;
    }

    draw(){


        if (this.position.x === null)
            return;

        const ctx = this.world.getContext();
        const size = this.world.cellSize;
        const centerX = this.position.x * size + size / 2;
        const centerY = this.position.y * size + size / 2;
        const radius = size / 2;
        
        //this.world.draw();
        //this.snake.updateSnake();
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
        //ctx.fillRect(this.position.x * size, this.position.y * size, size, size );
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