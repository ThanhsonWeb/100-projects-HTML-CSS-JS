// images
const images = document.querySelectorAll("img");
const closeBtn = document.querySelector("#close");
const wrapper = document.querySelector("#wrapper");
const imgWrapper = document.querySelector("#fullImg");

// function openModal(pic) {
// 	wrapper.style.display = "flex";
// 	imgWrapper.src = pic;
// }
images.forEach((item, index) => {
	item.addEventListener("click", () => {
		wrapper.style.display = "flex";
		// openModal(`./images/ava${index}.jpg`);
		imgWrapper.src = `./images/ava${index}.jpg`;
	});
});

closeBtn.addEventListener("click", () => {
	wrapper.style.display = "none";
});
