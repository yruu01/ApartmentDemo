const nav = document.querySelector("nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll("nav ul a");

if (nav && menuToggle) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.textContent = "☰";
        });
    });
}
