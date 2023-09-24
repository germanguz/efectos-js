const img = document.querySelector(".captain");
const icon = document.querySelector(".heart");

img.addEventListener("dblclick", () => {
    icon.classList.add("like");

    setTimeout(() => {
        icon.classList.remove("like")
    }, 1000);
})