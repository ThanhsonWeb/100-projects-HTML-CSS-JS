const body = document.body;
const imgs = document.querySelectorAll(".img");
const arrowBtns = document.querySelectorAll(".arrow-btn");

let activeImg = 0;

setImagesAsBackground();

function setImagesAsBackground() {
	body.style.backgroundImage = imgs[activeImg].style.backgroundImage; // ? ? ?
}

// main
arrowBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (btn.classList == "right-arrow") {
			activeImg++;
			// because index start with 0
			if (activeImg > imgs.length - 1) {
				activeImg = 0; // return first img
			}
		} else {
			// if it's left-arrow
			activeImg--;
			if (activeImg < 0) {
				activeImg = imgs.length - 1; // haha là nó trở lại cuối img
			}
		}

		setImagesAsBackground(); //
	});
});
