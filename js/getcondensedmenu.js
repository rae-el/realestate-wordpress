const condensedMenu = document.querySelector(".condensed-menu");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

//not working because page not loaded yet?

//here for testing, delete later
console.log("entered function getcondensedmenu");

//if click on the menu icon
condensedMenu.addEventListener("click", showCondensedMenu);

//show listed menu
function showCondensedMenu(){
	//here for testing, delete later
	console.log("in showCondensedMenu");

	condensedMenu.classList.toggle("active");
	navMenu.classList.toggle("active");
}

//if click on menu item
navLink.forEach(n => n.addEventListener("click", closeMenu));

//close menu
function closeMenu(){
	//here for testing, delete later
	console.log("in closeMenu");

	condensedMenu.classList.remove("active");
	navMenu.classList.remove("active");
}