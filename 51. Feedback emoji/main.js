const emotions = document.querySelectorAll(".emotion");
const btn = document.querySelector("#send");
const container = document.querySelector("#container");
const thanks = document.querySelector("#thanks");



btn.addEventListener("click", () => {
	thanks.classList.add("active");
	container.style.display = "none";
});
