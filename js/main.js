let contenedorLetrasErradas = document.querySelector(".letras-equivacadas");
let guionContainer = document.querySelector(".guion-container");
let btnIniciarJuego = document.querySelector(".btn-nuevo-juego");
let pantalla = document.querySelector("#canvas");
let pincel = pantalla.getContext("2d");
let btnJuego = document.querySelector(".btn-juego");
let btnAgregar = document.querySelector(".btn-agregar");
let btnVolverInicio = document.querySelector(".btn-volver-inicio");
let btnDesistir = document.querySelector(".btn-desistir");
let btnGuardar = document.querySelector(".btn-guardar");
let seccionJuego = document.querySelector(".seccion-juego");
let iconoReglas = document.querySelector(".icono-reglas");
let btnCerrar = document.querySelector(".btn-modal-cerrar");

import { crearAhorcado } from "./canvas.js";
import {
  desistir,
  irAAgregar,
  VolverInicio,
  irAjuego,
} from "./displayViews.js";

import { listaPalabras } from "./listaPalabras.js";
import { agregarPalabra } from "./agregarPalabra.js";
import {
  mostrarModalVictoria,
  mostrarModalDerrota,
  mostrarModalReglas,
  cerrarModalReglas,
} from "./modal.js";

//elegir palabra inicialmente
let palabra = elegirPalabra();
let guionHTML = "";
let letrasErradas = [];
let contadorfallos = 0;

crearAhorcado();

for (let i = 0; i < palabra.length; i++) {
  guionHTML += `<div class="div-guion"></div>`;
}
guionContainer.innerHTML = guionHTML;

//funcion del hanging man
function hangingMan() {
  switch (contadorfallos) {
    case 1:
      pincel.beginPath();
      pincel.arc(200, 85, 35, 0, 2 * Math.PI);
      pincel.stroke();
      break;
    case 2:
      pincel.beginPath();
      pincel.lineWidth = 5;
      pincel.moveTo(200, 120);
      pincel.lineTo(200, 200);
      pincel.stroke();
      break;
    case 3:
      pincel.beginPath();
      pincel.lineWidth = 5;
      pincel.moveTo(200, 120);
      pincel.lineTo(150, 200);
      pincel.stroke();
      break;
    case 4:
      pincel.beginPath();
      pincel.lineWidth = 5;
      pincel.moveTo(200, 120);
      pincel.lineTo(250, 200);
      pincel.stroke();
      break;
    case 5:
      pincel.beginPath();
      pincel.lineWidth = 5;
      pincel.moveTo(200, 200);
      pincel.lineTo(150, 300);
      pincel.stroke();
      break;
    case 6:
      pincel.beginPath();
      pincel.lineWidth = 5;
      pincel.moveTo(200, 200);
      pincel.lineTo(250, 300);
      pincel.stroke();
      break;
    case 7:
      mostrarModalDerrota(palabra);
  }
}

//funcion que indica cuando el jugador gana
function checkganar() {
  let palabraCheck = "";
  for (let i = 0; i < palabra.length; i++) {
    palabraCheck += guionContainer.childNodes[i].textContent;
  }
  if (palabraCheck == palabra) {
    mostrarModalVictoria();
  }
}

//chequea si letra esta incluida, si esta la agrega en guiones, sino lo pone en el contenedor de letras falladas y agrega una extremidad al hanging man
function checkLetra(letra) {
  if (palabra.includes(letra)) {
    for (let i in palabra) {
      if (palabra[i].includes(letra)) {
        guionContainer.childNodes[i].innerHTML = letra;
        checkganar();
      }
    }
  } else {
    if (!letrasErradas.includes(letra)) {
      letrasErradas.push(letra);
      contenedorLetrasErradas.innerHTML += ` ${letra}`;
      contadorfallos++;
      hangingMan();
    }
  }
}

//funcion que detecta la tecla que se presiona
function presionarTecla(event) {
  if (seccionJuego.classList.contains("active")) {
    let keyValue = event.key;
    keyValue = keyValue.toUpperCase();
    let regex = /[A-Z]/;
    if (regex.test(keyValue) && keyValue.length == 1) {
      checkLetra(keyValue);
    }
  }
}

document.addEventListener("keydown", presionarTecla);

//funcion iniciar juego
//exportar array

function elegirPalabra() {
  let largoLista = listaPalabras.length;
  let numAleatorio = Math.floor(Math.random() * largoLista);
  let palabra = listaPalabras[numAleatorio];
  return palabra;
}

export function iniciarJuego() {
  palabra = elegirPalabra();
  guionHTML = "";
  letrasErradas = [];
  contadorfallos = 0;
  crearAhorcado();
  contenedorLetrasErradas.innerHTML = "";
  for (let i = 0; i < palabra.length; i++) {
    guionHTML += `<div class="div-guion"></div>`;
  }
  guionContainer.innerHTML = guionHTML;
}

btnIniciarJuego.addEventListener("click", iniciarJuego);

//volver a la pantalla inicial y resetar parametros para proximo juego
btnDesistir.addEventListener("click", desistir);

btnJuego.addEventListener("click", irAjuego);

btnAgregar.addEventListener("click", irAAgregar);

btnVolverInicio.addEventListener("click", VolverInicio);

btnGuardar.addEventListener("click", agregarPalabra);

//abrir y cerrar modal reglas
iconoReglas.addEventListener("click", mostrarModalReglas);
btnCerrar.addEventListener("click", cerrarModalReglas);
