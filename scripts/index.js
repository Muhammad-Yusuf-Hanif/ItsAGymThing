fetch("../components/navbar.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;
	})
	.catch((error) => console.error("error loading the navbar: ", error));



	
