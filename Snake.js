class Snake{
    
    currentDirection = "ArrowRight";
    lastDirection = this.currentDirection;
    cellSize = 20;
    speed = 200;
    lastMoveTime = 0;


    constructor(){

        this.world = new World(600, 600);

        this.segments = [
            {x: 5, y: 5},
            {x: 6, y: 5},
            {x: 7, y: 5}
        ];
        this.updateSnake();

        this.createEvents();
        this.start();

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

    loop(timestamp){

        if(timestamp - this.lastMoveTime >= this.speed){
            this.move();
            this.lastMoveTime = timestamp;
        }
        this.start();
    }

    start(){
        requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

    move(){
        //const newHead = {x:this.segments[0].x + 1, y:this.segments[0].y};
        const head = this.segments[0];
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

        this.segments.unshift(newHead);
        this.segments.pop();
        this.lastDirection = this.currentDirection;
        this.updateSnake();
    }


    updateSnake(){
        const ctx = this.world.getContext();
        ctx.fillStyle = "green";


        this.world.draw();

        this.segments.forEach((segment)=>{
            ctx.fillRect(segment.x * this.cellSize, segment.y * this.cellSize, this.cellSize, this.cellSize);
        })
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