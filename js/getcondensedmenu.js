document.addEventListener("DOMContentLoaded", function(){
	const condensedMenu = document.querySelector(".hamburger");
	const hamburgerIcon = document.getElementById("bar-icon");
	const xIcon = document.getElementById("x-icon");
	const navMenu = document.querySelector(".nav-menu");
	const navLink = document.querySelectorAll("body > header > section.menu-area > nav > div.nav-menu.active > div > ul > li > a");

	condensedMenu.addEventListener("click", openMenu);

	//show listed menu
	function openMenu(){
		//here for testing, delete later
		console.log("in openMenu");

		condensedMenu.classList.toggle("active");
		navMenu.classList.toggle("active");
		//this bit isn't working for some reason?
		hamburgerIcon.classList.toggle("hide");
		xIcon.classList.remove("hide");
	}

	
	//if click on menu item
	navLink.forEach(n => n.addEventListener("click", closeMenu));

	//close menu
	function closeMenu(){
		//here for testing, delete later
		console.log("in closeMenu");

		condensedMenu.classList.remove("active");
		navMenu.classList.remove("active");
		//this bit isn't working for some reason?
		hamburgerIcon.classList.remove("hide");
		xIcon.classList.toggle("hide");
	}
});