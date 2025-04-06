const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");
const imageContainer = document.querySelector(".image-container");

let x = 0;

btnPrev.addEventListener("click", () => {
	x += 45;
	rotate();
});

btnNext.addEventListener("click", () => {
	x -= 45;
	rotate();
});

function rotate() {
	imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}
