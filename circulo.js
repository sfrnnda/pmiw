function CambiarTamanoCir() {
  circulotamb = int(random(10, 30));
}

function sobreCirculo(x, y, circleX, circleY, circulotamb) {
  let d = dist(x, y, circleX, circleY);
  return d < circulotamb / 2;
}

function verificarClic() {
  for (let i = 0; i <= numcuadra; i++) {
    for (let j = 0; j <= numcuadra; j++) {
      let circleX = i * tamanoCuadrado;
      let circleY = j * tamanoCuadrado;
      
      if (sobreCirculo(mouseX, mouseY, circleX, circleY, circulotamb)) {
        background(0);
        CambiarTamanoCir();
        dibujarCuadricula();
      }
    }
  }
}
