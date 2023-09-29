// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Cambiar el color de fondo aleatoriamente
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

setInterval(changeBackgroundColor, 500);







const frame = document.querySelector('.frame');

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para cambiar el color del marco
function changeFrameColor() {
    const randomColor = getRandomColor();
    frame.style.borderColor = randomColor;
}

// Cambia el color del marco cada 2 segundos (2000 milisegundos)
setInterval(changeFrameColor, 500);