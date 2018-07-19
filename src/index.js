import style from "./main.scss";
require('./particles')
const funky = document.getElementById("tinygoat-label-funky")
funky.classList.add("transparent")
//
document.getElementById('tinygoat-label-1').addEventListener("mouseover", event => {
    event.target.classList.add('transparent')
    funky.classList.remove("transparent")
})
document.getElementById('tinygoat-label-1').addEventListener("mouseout", event => {
    event.target.classList.remove('transparent')
    funky.classList.add("transparent")
})
