let btn = document.querySelector(".mobile-navbar-btn");
let menu = document.querySelector(".navbar-items");

btn.addEventListener("click", () => {
    menu.classList.toggle("showItems")
})