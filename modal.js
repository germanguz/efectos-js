// *Para modal centro
const botonModalCentro = document.querySelector("#abrir-modal-centro");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

botonModalCentro.addEventListener("click", () => {
    modalCentro.classList.add("active");
})

cerrarModalCentro.addEventListener("click", () => {
    modalCentro.classList.remove("active");
})


// *Para modal derecha
const botonModalDerecha = document.querySelector("#abrir-modal-derecha");
const modalDerecha = document.querySelector("#modal-derecha");
const cerrarModalDerecha = document.querySelector("#cerrar-modal-derecha");

botonModalDerecha.addEventListener("click", () => {
    modalDerecha.classList.add("active");
})

cerrarModalDerecha.addEventListener("click", () => {
    modalDerecha.classList.remove("active");
})


// *Para modal flotante, que cierra al hacer click fuera del modal
const botonModalFlotante = document.querySelector("#abrir-modal-flotante");
const modalFlotanteContainer = document.querySelector("#modal-flotante-container");

botonModalFlotante.addEventListener("click", () => {
    modalFlotanteContainer.classList.add("active");
})

modalFlotanteContainer.addEventListener("click", (e) => {
    if (e.target === modalFlotanteContainer) {
        modalFlotanteContainer.classList.remove("active");
    }
})