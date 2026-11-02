class Snake {
  currentDirection = "ArrowRight";
  oppositeOf = {
    ArrowLeft: "ArrowRight",
    ArrowRight: "ArrowLeft",
    ArrowUp: "ArrowDown",
    ArrowDown: "ArrowUp",
  };
  lastDirection = this.currentDirection;
  //cellSize = 20;
  isGameOver = false;

  constructor(world, food) {
    this.world = world;
    this.food = food;

    this.segments = [
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5 },
    ];

    this.startLength = this.segments.length;

    this.columns = this.world.getWidth() / this.world.cellSize;
    this.rows = this.world.getHeight() / this.world.cellSize;

    this.updateSnake();

    this.createEvents();
  }

  createEvents() {
    document.addEventListener("keydown", (event) => this.setDirection(event));
  }

  setDirection(event) {
    if (!event.key.startsWith("Arrow")) {
      return;
    }
    event.preventDefault();

    if (this.lastDirection === "ArrowRight" && event.key === "ArrowLeft") {
      return;
    }
    if (this.lastDirection === "ArrowLeft" && event.key === "ArrowRight") {
      return;
    }
    if (this.lastDirection === "ArrowUp" && event.key === "ArrowDown") {
      return;
    }
    if (this.lastDirection === "ArrowDown" && event.key === "ArrowUp") {
      return;
    }

    this.currentDirection = event.key;
  }

  move() {
    const head = this.segments[this.segments.length - 1];

    let newHead = this.getNextPosition(head, this.currentDirection);

    if (
      newHead.x >= this.columns ||
      newHead.x < 0 ||
      newHead.y >= this.rows ||
      newHead.y < 0 ||
      this.isOnBody(newHead)
    ) {
      this.isGameOver = true;
      return;
    }

    if (
      newHead.x === this.food.position.x &&
      newHead.y === this.food.position.y
    ) {
      this.food.spawn(this.segments);
      this.segments.push(newHead);

      newHead = this.getNextPosition(newHead, this.currentDirection);
    }

    this.segments.shift();
    this.segments.push(newHead);
    this.lastDirection = this.currentDirection;
  }

  isOnBody(newHead) {
    for (let segment of this.segments) {
      if (newHead.x === segment.x && newHead.y === segment.y) {
        return true;
      }
    }
    return false;
  }

  getNextPosition(position, direction) {
    if (direction === "ArrowRight") {
      return { x: position.x + 1, y: position.y };
    } else if (direction === "ArrowLeft") {
      return { x: position.x - 1, y: position.y };
    } else if (direction === "ArrowUp") {
      return { x: position.x, y: position.y - 1 };
    } else {
      return { x: position.x, y: position.y + 1 };
    }
  }

  updateSnake() {
    const ctx = this.world.getContext();

    ctx.fillStyle = "green";
    this.segments.forEach((segment, index) => {
      if (index === this.segments.length - 1) ctx.fillStyle = "red";

      ctx.fillRect(
        segment.x * this.world.cellSize,
        segment.y * this.world.cellSize,
        this.world.cellSize,
        this.world.cellSize,
      );
    });
  }
  getScore() {
    return (this.segments.length - this.startLength) * 10;
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
