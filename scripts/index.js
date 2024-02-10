const button = document.getElementsByClassName("accordion");

console.log("button", button);

fetch("../components/navbar.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;
	})
	.catch((error) => console.error("error loading the navbar: ", error));

function sendEmail(recipient, sender, message) {
	var infoToSend = {
		to_name: recipient,
		from_name: sender,
		message: message
	};

	emailjs.send("service_4p2b749", "template_xhuyici", infoToSend).then(
		function (response) {
			console.log("SUCCESS!", response.status, response.text);
		},
		function (error) {
			console.log("FAILED...", error);
		}
	);
}
