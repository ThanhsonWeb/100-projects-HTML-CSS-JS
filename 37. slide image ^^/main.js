const panels = document.querySelectorAll(".panel");

panels.forEach((item) => {
	item.addEventListener("click", () => {
		removeActive();
		item.classList.add("active");
	});
});

function removeActive() {
	panels.forEach((child) => {
		child.classList.remove("active");
	});
}
