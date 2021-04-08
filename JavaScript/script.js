let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = { /*Criando tamanho da cobrinha */
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; /*Dando direção à cobrinha */

function criarFundoDoJogo() { /*Criando background onde o jogo ocorrerá */
    context.fillStyle = "lightpink";
    context.fillRect(0,0,16 * box, 16 *box )
}

function criarCobrinha(){
    for ( i=0; i<snake.length; i++){
        context.fillStyle = "purple";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
/*Relacionando as teclas de direção do teclado co a direção da cobrinha*/
document.addEventListener('keydown', update);

function update (event){
    if (event.keyCode == 37 && direction != "right") direction = "left";
    /*37 botão para esquerda */
    if (event.keyCode == 38 && direction != "down") direction = "up";
    /*37 botão para esquerda */
    if (event.keyCode == 39 && direction != "left") direction = "right";
    /*37 botão para esquerda */
    if (event.keyCode == 40 && direction != "up") direction = "down";
    /*37 botão para esquerda */
}

/*Função de início do jogo*/
function iniciarJogo(){
/*Cria "barreira" que impede que a cobrinha saia da área de jogo*/
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0  && direction == "left") snake[0].x = 16 * box ;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16*box;

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


