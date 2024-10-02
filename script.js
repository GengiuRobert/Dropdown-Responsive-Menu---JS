const burgerBtn = document.getElementById("mobile");
const navbarDiv = document.getElementById("navbarDiv");
const colorBtnDrp = document.querySelector(".dropdown button");
const appleBtnDrp = document.querySelector(".apple-dropdown > a");
const greenBtnDrp = document.querySelector(".green-dropdown > a")
const colorDropdown = document.querySelector('.color-dropdown');
const greenShades = document.querySelector('.green-shades');


function toggleNavbarDisplay() {
    if (window.innerWidth > 768) {
        navbarDiv.style.display = "flex";
    } else {
        navbarDiv.style.display = "none";
    }
}


burgerBtn.addEventListener("click", () => {
    if (navbarDiv.style.display === "none" || navbarDiv.style.display === "") {
        navbarDiv.style.display = "flex";
    } else if (navbarDiv.style.display === "flex") {
        navbarDiv.style.display = "none";
    }
});

colorBtnDrp.addEventListener("click", () => {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});

appleBtnDrp.addEventListener("click", (event) => {
    event.preventDefault();
    colorDropdown.style.display = colorDropdown.style.display === "block" ? "none" : "block";
});

document.querySelector(".green-dropdown > a").addEventListener("click", (event) => {
    event.preventDefault();
    greenShades.style.display = greenShades.style.display === "block" ? "none" : "block";
});

window.addEventListener("resize", toggleNavbarDisplay);
window.addEventListener("load", toggleNavbarDisplay);
