const button = document.getElementsByClassName("accordion");

console.log("button", button);

fetch("../components/navbar.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;
	})
	.catch((error) => console.error("error loading the navbar: ", error));

const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function () {
	var senderName = document.getElementById("name").value;
	var senderEmail = document.getElementById("email").value;
	var senderMessage = document.getElementById("message").value;

	const infoToSend = {
		from_name: senderName,
		from_email: senderEmail,
		message: senderMessage,
	};

	console.log("senderName", senderName);
	console.log("senderEmail", senderEmail);
	console.log("senderMessage", senderMessage);

	emailjs.send("service_4p2b749", "template_xhuyici", infoToSend).then(
		function (response) {
			console.log("SUCCESS!", response.status, response.text);
			console.log("infoToSend", infoToSend);
			document.getElementById('form').reset();
		},
		function (error) {
			console.log("FAILED...", error);
		}
	);
});

// function sendEmail(recipient, sender, message) {
// 	var infoToSend = {
// 		to_name: recipient,
// 		from_name: sender,
// 		message: message
// 	};
// }
