let color1 = document.querySelector(".c1");
let color2 = document.querySelector(".c2");
let gradientContainer = document.querySelector("#gradient-container");
let btn = document.querySelector(".randomColorBtn");
// 1
function makeColor() {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return randomColor;
}
// 2 : for gradientContainer
function generateGradient() {
	color1.value = "#" + makeColor();
	color2.value = "#" + makeColor();
	gradientContainer.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
}

// 3 : for input

function setGradient() {
	gradientContainer.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
}
// 4 : each time body load ---> function 
document.body.addEventListener("load", generateGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", generateGradient);
