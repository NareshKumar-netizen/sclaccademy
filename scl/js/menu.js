function openMenu() {
    document.getElementById("mobileMenu").style.left = "0";
    document.querySelector(".overlay").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    document.getElementById("mobileMenu").style.left = "-240px";
    document.querySelector(".overlay").style.display = "none";
    document.body.style.overflow = "auto";
}
