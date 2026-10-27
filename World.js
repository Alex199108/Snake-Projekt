class World{

    canvas = null;
    ctx = null;
    cellSize = 20;


    constructor( width, height) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.border = "1px solid red"; 
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
    }

     draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
     }


    drawGameOver(){
        const ctx = this.ctx;
        ctx.fillStyle = "red";
        ctx.font = "48px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Game Over", this.getWidth() / 2, this.getHeight() / 2);
    }

     getContext(){
        return this.ctx;
     }

     getWidth(){
      return this.canvas.width;
     }

     getHeight(){
      return this.canvas.height;
     }




}


