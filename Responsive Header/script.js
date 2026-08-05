// Mobile Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});

// Close menu after click

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    });

});

// Theme Toggle

const themeBtn = document.getElementById("themeToggle");
const icon = themeBtn.querySelector("i");

// Load saved theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light");

    }

});

// Active Menu on Scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});