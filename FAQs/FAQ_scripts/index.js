document.addEventListener("DOMContentLoaded", function () {
	const faqContainer = document.getElementById("faqContainer");

	for (let i = 1; i <= 6; i++) {
		let accordion = document.createElement("button");
		accordion.classList.add("accordion");
		accordion.innerHTML = `Item ${i} <button class='expandBtn closed'></button>`;

		let panel = document.createElement("div");
		panel.classList.add("panel");
		panel.textContent = `Content for item ${i}`;

		faqContainer.appendChild(accordion);
		faqContainer.appendChild(panel);

		accordion.onclick = function () {
			let expandBtn = this.querySelector(".expandBtn");
			let isOpen = expandBtn.classList.contains("open");

			// Close all open panels and reset buttons
			let allExpandButtons = document.querySelectorAll(".expandBtn");
			allExpandButtons.forEach((btn) => {
				btn.classList.remove("open");
				btn.classList.add("closed");
				btn.parentNode.nextElementSibling.style.display = "none"; // close panel
			});

			// Toggle the current panel
			if (!isOpen) {
				expandBtn.classList.remove("closed");
				expandBtn.classList.add("open");
				panel.style.display = "block";
			} else {
				panel.style.display = "none";
			}
		};
	}
});
