const dots = document.querySelectorAll(".dot");
const banner = document.querySelector("#banner");

dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
        banner.src = `${index}.jpeg`;
		animation();
		dot.classList.add("active");
	});
});

function animation() {
	banner.classList.add("zoom");
	setTimeout(() => {
		banner.classList.remove("zoom");
	}, 1000);   
	for (b of dots) {
		b.classList.remove("active");
	}
}
