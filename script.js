const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

// Scroll Navbar Effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Hamburger Toggle
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Active Link Highlight on Scroll
window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
