let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = { /*Criando tamanho da cobrinha */
    x: 8 * box,
    y: 8 * box
}
let direction = "left"; /*Dando direção à cobrinha */

function criarFundoDoJogo() { /*Criando background onde o jogo ocorrerá */
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 *box )
}

function criarCobrinha(){
    for ( i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update);

function update (event){
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    criarFundoDoJogo ()
    criarCobrinha()

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction =="right") snakeX +=box;
    if(direction =="left") snakeX -=box;
    if(direction =="up") snakeY -=box;
    if(direction =="down") snakeY +=box;

    snake.pop(); /*Retira o último elemento da Array*/

    let cabecaCobrinha = {
        x: snakeX,
        y: snakeY
    }
    /*unshift é o contrário do método push. Enquanto a primeira adiciona elememtnos no início da array, o segundo adiciona no final*/
    snake.unshift(cabecaCobrinha);

    
}
let jogo = setInterval (iniciarJogo, 100/*Milisegundos*/)


