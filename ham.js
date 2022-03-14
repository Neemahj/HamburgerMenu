const HamburgerOpenToggle = document.querySelector(".ham_icon");
const HamburgerCloseToggle = document.querySelector(".close_ham");
const navItems = document.querySelector(".nav-items");

HamburgerOpenToggle.addEventListener('click', OpenHam)
HamburgerCloseToggle.addEventListener('click', CloseHam)

function OpenHam(){
    navItems.style.color = "red";
    navItems.style.top = "0";
}

function CloseHam(){
    navItems.style.top= "-100%"
}