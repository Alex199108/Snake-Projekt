class Snake{
    
    currentDirection = "ArrowRight";
    lastDirection = this.currentDirection;
    cellSize = 20;
    isGameOver = false;


    constructor(world){
        this.world = world;

        this.segments = [
            {x: 5, y: 5},
            {x: 6, y: 5},
            {x: 7, y: 5}
        ];

        this.columns = this.world.getWidth() / this.cellSize;
        this.rows = this.world.getHeight() / this.cellSize;
        this.updateSnake();

        this.createEvents();
    }

    createEvents(){
        document.addEventListener("keydown", (event) => this.setDirection(event));
    }

    setDirection(event){
        if(!event.key.startsWith("Arrow")){
            return;
        }
        event.preventDefault();
        
        if(this.lastDirection === "ArrowRight" && event.key === "ArrowLeft"){
            return;
        }
        if(this.lastDirection === "ArrowLeft" && event.key === "ArrowRight"){
            return;
        }
        if(this.lastDirection ==="ArrowUp" && event.key === "ArrowDown"){
            return;
        }
        if(this.lastDirection === "ArrowDown" && event.key === "ArrowUp"){
            return;
        }

        this.currentDirection = event.key;
        console.log("direction", this.currentDirection)
    }

    move(){
        
        const head = this.segments[this.segments.length - 1];
        let newHead;
        
        switch(this.currentDirection){
            case "ArrowRight":{
                newHead = {x: head.x + 1, y: head.y};
                break;
            }
            case "ArrowDown":{
                newHead = {x: head.x, y: head.y + 1};
                break;
            }
            case "ArrowLeft":{
                newHead = {x: head.x - 1, y: head.y};
                break;
            }

            case "ArrowUp":{
                newHead = {x: head.x, y: head.y - 1};
                break;
            }
        }

        if(newHead.x >= this.columns || newHead.x < 0 || newHead.y >= this.rows || newHead.y < 0){
            this.isGameOver = true;
            this.drawGameOver();
            console.log(newHead);
            return;
        }

        this.segments.shift();
        this.segments.push(newHead);
        this.lastDirection = this.currentDirection;
        this.updateSnake();
    }

    updateSnake(){
        const ctx = this.world.getContext();


        this.world.draw();

        ctx.fillStyle = "green";
        this.segments.forEach((segment, index)=>{

            if (index === this.segments.length - 1)
                ctx.fillStyle = "red";

            ctx.fillRect(segment.x * this.cellSize, segment.y * this.cellSize, this.cellSize, this.cellSize);

        })
    }

    drawGameOver(){
        const ctx = this.world.getContext();
        ctx.fillStyle = "red";
        ctx.font = "48px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Game Over", this.world.getWidth() / 2, this.world.getHeight() / 2);
    }



/*



function ShowDirection(event){
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
    }
    switch(event.key){
        case "ArrowUp":
            display.textContent = "UP";
            break;
        case "ArrowDown":
            display.textContent = "Down";
            break;
        case "ArrowLeft":
            display.textContent = "LEFT";
            break;
        case "ArrowRight":
            display.textContent = "Right";
            break;
        default :
            display.textContent = "Not an Arrow Key";
    }
}

document.addEventListener("keydown", ShowDirection);;





    draw(ctx, cellSize){
        ctx.fileStyle = "green";
        this.segments.forEach((segment)=>{
            ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
        });
    }
        */
}