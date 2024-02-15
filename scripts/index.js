fetch("../components/navbar.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;

		const hamburgerBtn = document.getElementById("hamburgerBtn");
		const mobile_Navbar = document.getElementById("mobile-navbar");

		const mobileNavbar = window.getComputedStyle(mobile_Navbar);

		// console.log(style.display, "mobile nav style");

		hamburgerBtn.addEventListener("click", function (event) {
			console.log(mobileNavbar.display)
			if (mobileNavbar.display === "none") {
				mobile_Navbar.style.display = "flex";
				console.log("first");
			} else if (mobileNavbar.display === "flex") {
				mobile_Navbar.style.display = "none";
				console.log("second");
			}
		});
	})
	.catch((error) => console.error("error loading the navbar: ", error));
