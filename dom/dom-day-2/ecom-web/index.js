const ham = document.querySelectorAll(".ham")[0];
const mobileMenu = document.querySelectorAll(".mobile-menu")[0];
const cross = document.getElementById("cross");

ham.addEventListener("click", () => {
    mobileMenu.style.display = "block"; 
    cross.style.display = "block"; 
    ham.style.display = "none";
})


cross.addEventListener("click", () => {
    mobileMenu.style.display = "none"; 
    cross.style.display = "none"; 
    ham.style.display = "block";
})