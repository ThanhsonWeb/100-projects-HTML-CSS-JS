const sliders = document.querySelectorAll('input[type="range"]');
const colors = document.querySelector('input[type="color"]');
let output = document.getElementById("css-code");
let btnCopy = document.getElementById("copy");

sliders.forEach((slider) => {
	slider.addEventListener("input", createBox);
});

colors.addEventListener("change", createBox);

btnCopy.addEventListener("click", () => {
	output.select();
	document.execCommand("copy");
	alert("code Copied");
});

function createBox() {
	let X = sliders[0].value;
	let Y = sliders[1].value;
	let blur = sliders[2].value;
	let spread = sliders[3].value;

	let shadowColor = colors.value;

	let boxShadow = `${X}px ${Y}px ${blur}px  ${spread}px `;

	// change box
	document.getElementById(
		"box"
	).style.cssText = `box-shadow: ${boxShadow} ${shadowColor}  `;

	output.value = `box-shadow:${boxShadow} `;
}

createBox();
