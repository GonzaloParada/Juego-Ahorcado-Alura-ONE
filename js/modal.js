let modalVictoria = document.querySelector(".modal-victoria");
let modalDerrota = document.querySelector(".modal-derrota");
let mensajePerdiste = document.querySelector(".mensaje-perdiste");
let modalReglas = document.querySelector(".modal-reglas");

export function mostrarModalVictoria() {
  modalVictoria.classList.add("active-modal");
  setTimeout(() => {
    modalVictoria.classList.remove("active-modal");
  }, 2000);
}

export function mostrarModalDerrota(palabra) {
  modalDerrota.classList.add("active-modal");
  mensajePerdiste.innerHTML = `La palabra era ${palabra}`;
  setTimeout(() => {
    modalDerrota.classList.remove("active-modal");
  }, 2000);
}

export function mostrarModalReglas() {
  modalReglas.classList.add("active-modal");
}

export function cerrarModalReglas() {
  modalReglas.classList.remove("active-modal");
}
