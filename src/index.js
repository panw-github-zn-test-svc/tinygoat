import style from "./main.scss";
require('./particles')


const normal = document.getElementById("tinygoat-label-normal")
const funky = document.getElementById("tinygoat-label-funky")
const nav = document.getElementById("nav")


nav.addEventListener("mouseenter", event => {
    normal.classList.add('transparent')
    funky.classList.remove("transparent")
})


nav.addEventListener("mouseleave", event => {
    normal.classList.remove('transparent')
    funky.classList.add("transparent")
})
