const navToggle = document.querySelector(".menu-toggle")
const primaryNav = document.querySelector(".primary-nav")
const navOpen = document.querySelector(".nav-open")
const hamburger = document.querySelector(".hamburger")

navToggle.addEventListener("click", () => {
    menuToggle()
})

function menuToggle() {
    if (primaryNav.classList.contains("primary-nav--active")) {
        primaryNav.classList.remove("primary-nav--active")
        hamburger.classList.remove("hamburger--active")
        navOpen.style.overflow = "hidden"
    } else {
        primaryNav.classList.add("primary-nav--active")
        hamburger.classList.add("hamburger--active")
        navOpen.style.overflow = "visible"
    }
}


