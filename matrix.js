// *traigo canvas desde html
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

// *seteo ancho y alto del canvas de acuerdo a las medidas de la pantalla del navegador
// *las medidas van a cambiar, al cargar, de acuerdo a esa medida de navegador
// canvas.width = document.body.offsetWidth;
// canvas.height = document.body.offsetHeight;
// const w = canvas.width;
// const h = canvas.height;

// *lo mismo de arriba pero en una linea
// const w = canvas.width = document.body.offsetWidth;
// const h = canvas.height = document.body.offsetHeight;

// *otra forma pero tomando siempre el tamaño/resolucion de monitor
// *dejo esta porque siempre la pantalla queda llena
const s = window.screen;
const w = canvas.width = s.width;
const h = canvas.height = s.height;


// *dibujo rectángulo de acuerdo a las medidas "capturadas"
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, w, h);

// *cada columna mide 20px
const cols = Math.floor(w / 20) + 1; /* +1 para que llegue bien al final? en caso de que width sea nº raro y de con coma el rdo */
// *llena el array de ceros
const posicion_y = Array(cols).fill(0);

// *función que se va a ejecutar
function matrix() {

    // *cada vez que se ejecuta la fc cubre con un gris/negro para ir tapando
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, w, h);
    
    // *color de la letra y tipo
    ctx.fillStyle = "#0f0";
    ctx.font = "15pt matrix-code-font";

    // *por cada elemento e indice...
    posicion_y.forEach((y, ind) => {
        // *elige una letra
        const text = String.fromCharCode(Math.random() * 128);

        // *determina valor de x
        const x = ind * 20;
        // *llena con la letra
        ctx.fillText(text, x, y);

        // *determina si y se sigue incrementando o se resetea
        if (y > 100 + Math.random() * 10000) {
            posicion_y[ind] = 0;
        } else {
            posicion_y[ind] = y + 20;
            // *el valor de posicion_y en ese indice es el valor de "y"
            // *voy cambiando el valor del elemento "y", sumandole 20
        }
    });
}
// *seteo que se repita cada 50 milisegundos
setInterval(matrix, 50);