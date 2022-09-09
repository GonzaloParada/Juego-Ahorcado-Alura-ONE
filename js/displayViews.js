let seccionMenu = document.querySelector(".seccion-menu");
let seccionJuego = document.querySelector(".seccion-juego");
let seccionAgregar = document.querySelector(".seccion-agregar");

import { iniciarJuego } from "./main.js";

export function irAjuego() {
  seccionJuego.classList.add("active");
  seccionMenu.classList.add("seccion-menu-hidden");
}

export function irAAgregar() {
  seccionAgregar.classList.add("active");
  seccionMenu.classList.add("seccion-menu-hidden");
}

export function VolverInicio() {
  seccionMenu.classList.remove("seccion-menu-hidden");
  seccionAgregar.classList.remove("active");
}

export function desistir() {
  seccionMenu.classList.remove("seccion-menu-hidden");
  seccionJuego.classList.remove("active");
  iniciarJuego();
}

export function irAjuegoDesdeAgregar() {
  seccionAgregar.classList.remove("active");
  seccionJuego.classList.add("active");
  iniciarJuego();
}
