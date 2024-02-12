const button = document.getElementsByClassName("accordion");

console.log("button", button);

fetch("../components/navbar.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;
	})
	.catch((error) => console.error("error loading the navbar: ", error));

const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function (event) {
	var senderName = document.getElementById("name").value;
	var senderEmail = document.getElementById("email").value;
	var senderMessage = document.getElementById("message").value;

	const infoToSend = {
			from_name: senderName,
			from_email: senderEmail,
			message: senderMessage,
	};

	// Email validation pattern
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Check if any field is empty
	if (senderName === '' || senderEmail === '' || senderMessage === '') {
			alert("Please fill in all the fields.");
			event.preventDefault(); // Prevent form from submitting
	} else if (!emailPattern.test(senderEmail)) { // Check if email is valid
			alert("Please enter a valid email address.");
			event.preventDefault(); // Prevent form from submitting
	} else {
			// If all fields are filled and email is valid, attempt to send the email
			emailjs.send("service_4p2b749", "template_xhuyici", infoToSend).then(
					function (response) {
							console.log("SUCCESS!", response.status, response.text);
							alert("Email sent successfully!");
							document.getElementById('form').reset();
					},
					function (error) {
							console.log("FAILED...", error);
							alert("Failed to send the email.");
					}
			);
	}
});


// function sendEmail(recipient, sender, message) {
// 	var infoToSend = {
// 		to_name: recipient,
// 		from_name: sender,
// 		message: message
// 	};
// }
