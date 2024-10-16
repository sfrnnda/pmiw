function dibujarCuadricula() {
  stroke('#9A9A9A');
  strokeWeight(10);
  
  for (let i = 0; i <= numcuadra; i++) {
    line(0, i * tamanoCuadrado, numcuadra * tamanoCuadrado, i * tamanoCuadrado);
    line(i * tamanoCuadrado, 0, i * tamanoCuadrado, numcuadra * tamanoCuadrado);
  }
  
  for (let i = 0; i <= numcuadra; i++) {
    for (let j = 0; j <= numcuadra; j++) {
      fill(255);
      noStroke();
      ellipse(i * tamanoCuadrado, j * tamanoCuadrado, circulotamb, circulotamb);
    }
  }
}
