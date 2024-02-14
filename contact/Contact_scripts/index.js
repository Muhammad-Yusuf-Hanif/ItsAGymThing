sendButton.addEventListener("click", function (event) {
	const sendButton = document.getElementById("sendButton");
	var senderName = document.getElementById("name").value;
	var senderEmail = document.getElementById("email").value;
	var senderMessage = document.getElementById("message").value.trim();

	// console.log(document.getElementById("name").value);
	// console.log(document.getElementById("email").value);
	// console.log(document.getElementById("message").value);
	// console.log("typeof senderName", typeof senderName);
	// console.log("typeof senderEmail", typeof senderEmail);
	// console.log("typeof senderMessage", typeof senderMessage);

	const infoToSend = {
		from_name: senderName,
		from_email: senderEmail,
		message: senderMessage,
	};

	// Email validation pattern
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Check if any field is empty
	if (
		senderName.trim() === "" ||
		senderEmail.trim() === "" ||
		senderMessage == ""
	) {
		alert("Please fill in all the fields.");
		event.preventDefault(); // Prevent form from submitting
	} else if (!emailPattern.test(senderEmail)) {
		// Check if email is valid
		alert("Please enter a valid email address.");
		event.preventDefault(); // Prevent form from submitting
	} else {
		// If all fields are filled and email is valid, attempt to send the email
		emailjs.send("service_4p2b749", "template_xhuyici", infoToSend).then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
				alert("Email sent successfully!");
				document.getElementById("form").reset();
			},
			function (error) {
				console.log("FAILED...", error);
				alert("Failed to send the email.");
			}
		);
	}
});
