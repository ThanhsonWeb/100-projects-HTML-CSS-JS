const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
	load++;
	if (load > 99) {
		clearInterval(int);
	}
	loadText.textContent = `${load}%`;
	// blur text  & bg
	loadText.style.opacity = hello(load, 0, 100, 1, 0); //Chuyển load từ 0-100% sang opacity 1-0.
	background.style.filter = `blur(${hello(load, 0, 100, 30, 0)}px)`; //Chuyển load từ 0-100% sang blur 30-0px.
}

const hello = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
