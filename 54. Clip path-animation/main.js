let find = document.documentElement;

find.addEventListener("mousemove", (e) => {
	find.style.setProperty("--1", e.clientX + "px");
	find.style.setProperty("--2", e.clientY + "px");
});
