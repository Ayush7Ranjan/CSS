const searchInput = document.querySelector("main input");
const header = document.querySelector("header");
const navItems = document.querySelectorAll("header ul li");

// Header color change on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#b00000";
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "rgba(180, 0, 0, 0.25)";
        header.style.boxShadow = "none";
    }
});

// Search input animation
searchInput.addEventListener("focus", () => {
    searchInput.style.transform = "scale(1.05)";
    searchInput.style.transition = "0.3s";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.transform = "scale(1)";
});

// Search typing effect
searchInput.addEventListener("keyup", () => {
    if (searchInput.value.length > 0) {
        searchInput.style.backgroundColor = "#fff5f5";
    } else {
        searchInput.style.backgroundColor = "white";
    }
});

// Navigation click effect
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.style.color = "#ffdddd";

        setTimeout(() => {
            item.style.color = "white";
        }, 300);
    });
});

// Welcome animation
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);
});