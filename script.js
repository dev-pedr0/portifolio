const nav = document.getElementById("navbar");

function mudarFundoNav() {
    if(window.scrollY > 100) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
}

window.addEventListener("scroll", mudarFundoNav)