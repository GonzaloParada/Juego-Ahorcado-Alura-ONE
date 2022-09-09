let pantalla = document.querySelector("#canvas");
let pincel = pantalla.getContext("2d");

let colorAhorcado = "#1F78FF";

export function crearAhorcado() {
  canvas.width = canvas.width;
  //base
  pincel.beginPath();
  pincel.lineWidth = 10;
  pincel.moveTo(0, 350);
  pincel.lineTo(320, 350);
  pincel.strokeStyle = colorAhorcado;
  pincel.stroke();

  //mastil
  pincel.beginPath();
  pincel.lineWidth = 5;
  pincel.moveTo(80, 350);
  pincel.lineTo(80, 0);
  pincel.stroke();

  //tope
  pincel.beginPath();
  pincel.lineWidth = 10;
  pincel.moveTo(80, 0);
  pincel.lineTo(200, 0);
  pincel.stroke();

  //hang
  pincel.beginPath();
  pincel.lineWidth = 5;
  pincel.moveTo(200, 0);
  pincel.lineTo(200, 50);
  pincel.stroke();
}

/* //hombrecito
//cabeza
pincel.beginPath();
pincel.arc(200, 85, 35, 0, 2 * Math.PI);
pincel.stroke();

//cuerpo
pincel.beginPath();
pincel.lineWidth = 5;
pincel.moveTo(200, 120);
pincel.lineTo(200, 200);
pincel.stroke();

//brazo izq
pincel.beginPath();
pincel.lineWidth = 5;
pincel.moveTo(200, 120);
pincel.lineTo(150, 200);
pincel.stroke();

//brazo derecho
pincel.beginPath();
pincel.lineWidth = 5;
pincel.moveTo(200, 120);
pincel.lineTo(250, 200);
pincel.stroke();

//pierna izq
pincel.beginPath();
pincel.lineWidth = 5;
pincel.moveTo(200, 200);
pincel.lineTo(150, 300);
pincel.stroke();

//pierna derecho
pincel.beginPath();
pincel.lineWidth = 5;
pincel.moveTo(200, 200);
pincel.lineTo(250, 300);
pincel.stroke(); */
