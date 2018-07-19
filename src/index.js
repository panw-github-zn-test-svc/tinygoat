import style from "./main.scss";
require('./particles')


const normal = document.getElementById("tinygoat-label-normal")
const funky = document.getElementById("tinygoat-label-funky")
const nav = document.getElementById("nav")

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};



document.addEventListener('DOMContentLoaded', () => {
    if (isMobileDevice()) {
        funky.classList.remove("transparent")
    } else {
        nav.addEventListener("mouseenter", event => {
            normal.classList.add('transparent')
            funky.classList.remove("transparent")
        })


        nav.addEventListener("mouseleave", event => {
            normal.classList.remove('transparent')
            funky.classList.add("transparent")
        })

    }
});