const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const cellSize = 20;


let snake =  [
    {x: 5,y: 5},
    {x: 4,y: 5},
    {x: 3,y: 5}
];

function drawSnake(){
    ctx.fillStyle='green';
    for(let segment of snake){
        ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
    }

    /*
        snake.forEach((segment) => {
            ctx.fillRect(segment.x * cellSize, segment.y*cellSize, cellSize, cellSize);
        });
    */
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
}

function moveSnake(){
    const newHead = {x: snake[0].x + 1, y: snake[0].y};
    snake.unshift(newHead);
    snake.pop();

}

draw();
moveSnake();
draw();
moveSnake();
draw();
