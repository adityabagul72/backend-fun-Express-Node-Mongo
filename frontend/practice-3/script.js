var menuIcon = document.querySelector("#menu-icon")
var navRight = document.querySelector(".nav-right")

menuIcon.addEventListener("click",()=>{
    navRight.classList.toggle("show")
})