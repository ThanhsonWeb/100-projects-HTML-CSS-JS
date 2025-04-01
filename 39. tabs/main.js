function getTab(el) {
	const active = document.querySelector(".active");
	const visible = document.querySelector(".visible");
	const tabContent = document.getElementById(el.href.split("#")[1]);

	active.classList.toggle("active");
	visible.classList.toggle("visible");

	el.classList.add("active");
	tabContent.classList.add("visible");
}

document.addEventListener("click", (event) => {
	if (event.target.matches(".tab-item a")) {
		getTab(event.target);
	}
});
