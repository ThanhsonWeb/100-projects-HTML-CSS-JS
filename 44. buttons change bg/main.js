const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		// assign btn's value into value
		number = btn.value;
		changeColor(number);
	});
});

// choose body
const body = document.body;

function changeColor(number) {
	body.className = "";
	switch (number) {
		case "red":
			body.classList.add("red");
			break;
		case "blue":
			body.classList.add("blue");
			break;
		case "yellow":
			body.classList.add("yellow");
			break;
		case "teal":
			body.classList.add("teal");
			break;
		default:
			break;
	}
}
