var menuIcon = document.querySelector("#menu-icon");
var menuList = document.querySelector("#menu-list");

menuList.style.display = "none";

menuIcon.addEventListener("click", () => {
    setTimeout(() => {
        if (menuList.style.display === "flex") {
            menuList.style.display = "none";
        } else {
            menuList.style.display = "flex";
        }
    }, 100);
});
