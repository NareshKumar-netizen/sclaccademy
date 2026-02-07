const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

if (menuBtn && mobileMenu && closeBtn && overlay) {

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");
    });

    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    function closeMenu() {
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
}
