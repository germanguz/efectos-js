const but = document.getElementById("idMore");
const links = document.getElementById("idLinks");

but.addEventListener("click", () => links.classList.toggle("collapsed"));

// *es lo mismo de arriba pero más extenso
// but.addEventListener("click", () => {
//     links.classList.toggle("collapsed");
// })
