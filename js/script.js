function slide1() {
    document.getElementById('image-banner').src = "img/banner-01.png";
    setTimeout("slide2()", 4000)
}

function slide2() {
    document.getElementById('image-banner').src = "img/banner-02.png";
    setTimeout("slide3()", 4000)
}

function slide3() {
    document.getElementById('image-banner').src = "img/banner-03.png";
    setTimeout("slide4()", 4000)
}

function slide4() {
    document.getElementById('image-banner').src = "img/banner-04.png";
    setTimeout("slide1()", 4000)
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
