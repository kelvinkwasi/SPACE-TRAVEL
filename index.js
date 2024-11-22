// when someone clicks the hamburger menu
// if the menu is closed, open it
// if the menu is open, close it

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav");

navToggle.addEventListener("click", () => {
    // check if the nav is closed, open it
    const visibility = nav.getAttribute("data-is-this-visible");
    if (visibility === "false") {
        nav.setAttribute("data-is-this-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-is-this-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
    // check if the nav is open, close it

})