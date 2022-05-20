const condensedMenu = document.querySelector(".condensed-menu");
const navMenu = document.querySelector(".nav-menu");

condensedMenu.addEventListener("click", showCondensedMenu);

function showCondensedMenu(){
	condensedMenu.classList.toggle("active");
	navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
	condensedMenu.classList.remove("active");
	navMenu.classList.remove("active");
}