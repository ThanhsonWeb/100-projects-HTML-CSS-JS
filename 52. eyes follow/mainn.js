document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
	let eyes = document.querySelectorAll(".eye");
	eyes.forEach((eye) => {
		// Calculate Eye Center:

		let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
		let y = eye.getBoundingClientRect().top + eye.clientWidth / 2;

		// caculate angle
		let radian = Math.atan2(event.pageX - x, event.pageY - y);

		let rotate = radian * (180 / Math.PI) * -1 + 270;

		// Rotate the Eye:

		eye.style.transform = `rotate(${rotate}deg)`;
	});
}
