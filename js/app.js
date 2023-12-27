const navToggle = document.querySelector(".menu-toggle")
const primaryNav = document.querySelector(".primary-nav")
const navOpen = document.querySelector(".nav-open")

navToggle.addEventListener("click", () => {
    menuToggle()
})

function menuToggle() {
    if (primaryNav.classList.contains("primary-nav--active")) {
        primaryNav.classList.remove("primary-nav--active")
        navOpen.style.overflow = "hidden"
    } else {
        primaryNav.classList.add("primary-nav--active")
        navOpen.style.overflow = "visible"
    }
}


