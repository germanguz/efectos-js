const nav = document.querySelector("#id-nav");
const abrir = document.querySelector("#id-abrir");
const cerrar = document.querySelector("#id-cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});