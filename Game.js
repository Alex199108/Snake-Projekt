class Game{
    constructor(){
        this.world = new World(600, 600);
        this.snake = new Snake(this.world);
    }
}
