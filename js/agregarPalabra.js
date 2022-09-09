let inputPalabra = document.querySelector(".input-nueva-palabra");

import { listaPalabras } from "./listaPalabras.js";
import { irAjuegoDesdeAgregar } from "./displayViews.js";

export function agregarPalabra() {
  let nuevaPalabra = inputPalabra.value;
  let regex = /[a-zA-Z]/;
  if (nuevaPalabra != "") {
    for (let letra of nuevaPalabra) {
      if (!regex.test(letra)) {
        return;
      }
    }
    listaPalabras.push(inputPalabra.value);
    irAjuegoDesdeAgregar();
  }
}
