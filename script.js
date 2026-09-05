const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-login, .mobile-cta");
const navLinks = document.querySelectorAll(".nav-link");


/* =========================================
   STICKY HEADER
   ========================================= */

function updateHeader() {

    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================
   MOBILE MENU
   ========================================= */

function openMenu() {

    mobileMenu.classList.add("is-open");

    mobileMenu.setAttribute(
        "aria-hidden",
        "false"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

}


function closeMenu() {

    mobileMenu.classList.remove("is-open");

    mobileMenu.setAttribute(
        "aria-hidden",
        "true"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

}


menuToggle.addEventListener("click", () => {

    const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }

});


/* =========================================
   CLOSE MENU AFTER CLICK
   ========================================= */

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {
        closeMenu();
    });

});


/* =========================================
   ESCAPE KEY
   ========================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        menuToggle.getAttribute("aria-expanded") === "true"
    ) {
        closeMenu();
        menuToggle.focus();
    }

});


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});