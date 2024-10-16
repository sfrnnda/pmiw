

//https://youtu.be/WbVXlIdqaZk

let tamanoCuadrado = 65;
let numcuadra = 6;
let circulotamb = 15;
let imagen1;

function preload() {
  imagen1 = loadImage('/assets/imagenfinal.png');
}

function setup() {
  createCanvas(800, 400);
  background(0);
  dibujarCuadricula(); 
}

function draw() {
  imagenCargada();
}

function mousePressed() {
  verificarClic(); 
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    resetGrid(); 
  }
}
