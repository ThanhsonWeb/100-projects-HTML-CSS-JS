const btn = document.querySelector("#btn");
const closeIcon = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.getElementsByTagName("video");

btn.addEventListener("click", () => {
	trailerContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
	trailerContainer.classList.remove("active");
});
