let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

function criarGB() {
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 *box )
}

criarGB ()

