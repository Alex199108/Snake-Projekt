class Game {
  speed = 200;
  score = 0;
  lastMoveTime = 0;
  speedLevels = [
    { score: 150, speed: 50 },
    { score: 100, speed: 100 },
    { score: 30, speed: 150 },
    { score: 0, speed: 200 },
  ];

  constructor() {
    this.world = new World(600, 600);
    this.food = new Food(this.world);
    this.snake = new Snake(this.world, this.food, this);
    this.food.spawn(this.snake.segments);
    this.scoreElement = document.getElementById("score");
    this.restartGame();
    this.draw();
    this.start();
  }

  addScore(ammount){
    this.score+= ammount;
  }

  loop(timestamp) {
    if (timestamp - this.lastMoveTime >= this.speed) {
      this.lastMoveTime = timestamp;
      const hasEaten = this.snake.move();
      /*
      if(hasEaten){
        this.score += points;
      }
      */
      const level = this.speedLevels.find(
        (speedLevel) => speedLevel.score <= this.score,
      );
      this.speed = level.speed;
      this.draw();
    }
    if (this.snake.isGameOver) {
      return;
    }
    this.start();
  }

  start() {
    requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  draw() {
    this.world.draw();
    this.food.draw();
    this.snake.updateSnake();
    this.scoreElement.textContent = this.score;

    if (this.snake.isGameOver) {
      this.world.drawGameOver();
    }
  }

  restartGame() {
    document.addEventListener("keydown", (event) => {
      if (this.snake.isGameOver && event.key === " ") {
        location.reload();
      }
    });
  }
}
