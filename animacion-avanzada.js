const imageContainers = document.querySelectorAll("figure");

// creo observador para que cuando la imagen sea visible al menos un 80% llame
// a una función (callback en este caso)
const observer = new IntersectionObserver(callback, {
    threshold: 0.8      /* threshold = limite, umbral */
});

// itero los parámetros de la fc y tomo la img que viene dentro del contenedor
function callback(entries) {

    entries.forEach(entry => {

        const image = entry.target.querySelector("img");
        // si la img se ve 80% agrego clase unset y si no se la quito
        image.classList.toggle("unset", entry.isIntersecting);
    });
}

// a cada imagen voy a observarla
imageContainers.forEach(container => {
    observer.observe(container);
})