class Food {
  position = {
    x: null,
    y: null,
  };
  typeOfFood = null;
  typesOfFoods = {
    normal: {color: "pink", points: 10},
    bonus: {color: "gold",  points: 50}
  };

  constructor(world) {
    this.world = world;
  }

  spawn(segments) {
    do {
      this.position.x = Math.floor(Math.random() * this.world.columns);
      this.position.y = Math.floor(Math.random() * this.world.rows);
    } while (this.isOnSnake(segments));

    if(Math.random() < 0.2){
      this.typeOfFood = this.typesOfFoods.bonus;
    }else{
      this.typeOfFood = this.typesOfFoods.normal;
    }
  }

  draw() {
    if (this.position.x === null) return;

    const ctx = this.world.getContext();
    const size = this.world.cellSize;
    const centerX = this.position.x * size + size / 2;
    const centerY = this.position.y * size + size / 2;
    const radius = size / 2;

    ctx.fillStyle = this.typeOfFood.color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  isOnSnake(segments) {
    for (let segment of segments) {
      if (segment.x === this.position.x && segment.y === this.position.y) {
        return true;
      }
    }
    return false;
  }
}
