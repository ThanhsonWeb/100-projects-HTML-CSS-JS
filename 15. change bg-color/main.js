let btn = document.querySelector("#btn");
let text = document.querySelector("#text");

function randomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

btn.addEventListener("click", () => {
	document.body.style.backgroundColor = randomColor();
	text.innerHTML = randomColor();
});

// method 1
// function changeColor() {
// 	let r = Math.floor(Math.random() * 255);
// 	let g = Math.floor(Math.random() * 255);
// 	let b = Math.floor(Math.random() * 255);
// 	let colorTotal = `rgb(${r},${g},${b})`;
// 	document.body.style.backgroundColor = colorTotal;
// 	return colorTotal;
// }

// btn.addEventListener("click", () => {
// 	let color = changeColor(); // Get the returned color value
// 	text.textContent = color; // Update the text content with the color
// });
