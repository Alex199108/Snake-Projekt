class Snake {
  currentDirection = "ArrowRight";
  oppositeOf = {
    ArrowLeft: "ArrowRight",
    ArrowRight: "ArrowLeft",
    ArrowUp: "ArrowDown",
    ArrowDown: "ArrowUp",
  };
  shiftOf = {
    ArrowRight: { dx: 1, dy: 0 },
    ArrowLeft: { dx: -1, dy: 0 },
    ArrowUp: { dx: 0, dy: -1 },
    ArrowDown: { dx: 0, dy: 1 },
  };
  lastDirection = this.currentDirection;
  isGameOver = false;

  constructor(world, food, game) {
    this.world = world;
    this.food = food;
    this.game = game;

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
    if (event.key === this.oppositeOf[this.lastDirection]) {
      return;
    }

    this.currentDirection = event.key;
  }

  move() {
    const head = this.segments[this.segments.length - 1];

    const newHead = this.getNextPosition(head, this.currentDirection);

    if (
      newHead.x >= this.columns ||
      newHead.x < 0 ||
      newHead.y >= this.rows ||
      newHead.y < 0 ||
      this.isOnBody(newHead)
    ) {
      this.isGameOver = true;
      return false;
    }

    this.segments.push(newHead);
    this.lastDirection = this.currentDirection;

    if (
      newHead.x === this.food.position.x &&
      newHead.y === this.food.position.y
    ) {
      console.log(this.world);
      this.game.addScore(this.food.typeOfFood.points);
      this.food.spawn(this.segments);
      return true;
    } else {
      this.segments.shift();
      return false;
    }
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
    const shift = this.shiftOf[direction];
    return { x: position.x + shift.dx, y: position.y + shift.dy };
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
}
