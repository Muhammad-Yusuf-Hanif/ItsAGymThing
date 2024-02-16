function toggleAccordion(itemId) {
	var item = document.getElementById(itemId);
	var button = item.querySelector('.accordionBtn');
	var panel = item.querySelector('.panel');

	button.classList.toggle('open');

	// Check if the panel is open
	if (panel.style.display === "block") {
			panel.style.display = "none";
	} else {
			// Close all open panels and remove the open class from other buttons
			document.querySelectorAll('.panel').forEach(function(otherPanel) {
					otherPanel.style.display = "none";
			});
			document.querySelectorAll('.accordionBtn').forEach(function(otherButton) {
					otherButton.classList.remove('open');
			});
			
			// Open the current panel and dynamically add the class 
			panel.style.display = "block";
			button.classList.add('open');
	}
}

