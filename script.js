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
drawSnake();



