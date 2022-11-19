document.addEventListener("DOMContentLoaded", function(){
	const condensedMenu = document.querySelector(".hamburger");
	const hamburgerIcon = document.querySelector(".bar-icon");
	const xIcon = document.querySelector(".x-icon");
	const navMenu = document.querySelector(".nav-menu");
	const navLink = document.querySelectorAll("body > header > section.menu-area > nav > div.nav-menu.active > div > ul > li > a");

	condensedMenu.addEventListener("click", openMenu);

	console.log(hamburgerIcon);
	console.log(xIcon);

	//show listed menu
	function openMenu(){
		//here for testing, delete later
		console.log("in openMenu");

		//the menu
		condensedMenu.classList.toggle("active");
		navMenu.classList.toggle("active");
		//the icon
		hamburgerIcon.classList.toggle("hide");
		xIcon.classList.toggle("hide");

		console.log(hamburgerIcon);
		console.log(xIcon);
	}

	
	//if click on menu item
	navLink.forEach(n => n.addEventListener("click", closeMenu));

	//close menu
	function closeMenu(){
		//here for testing, delete later
		console.log("in closeMenu");

		//the menu
		condensedMenu.classList.toggle("active");
		navMenu.classList.toggle("active");
		//the icon
		hamburgerIcon.classList.toggle("hide");
		xIcon.classList.toggle("hide");

		console.log(hamburgerIcon);
		console.log(xIcon);
	}
});