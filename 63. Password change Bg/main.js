const password = document.querySelector("#password");
const backgroundImg = document.querySelector(".background-image");

password.addEventListener("input", (e) => {
	const input = e.target.value;
	const length = input.length;
	const blurness  = 20 - length * 2;

    // change filter

    backgroundImg.style.filter = `blur(${blurness}px)`
});
