const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		// assign btn's value into value
		value = btn.value;
		changeColor(value);
	});
});

// choose body
const body = document.body;

function changeColor(value) {

	switch (value) {
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
	}
}
