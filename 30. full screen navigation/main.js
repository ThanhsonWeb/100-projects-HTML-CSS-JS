const menu = document.querySelector(".menu");
const links = document.querySelectorAll("li");
const highlight = document.querySelector(".highlight");
const btn = document.querySelector(".btn");

// why cant I use arrow function for this case ?
btn.addEventListener("click", function () {
	if (this.dataset.open === "close") {
		menu.style.clipPath = "circle(90% at 50%  )";
		this.dataset.open = "open";
		console.log(this); // Refers to the `btn` element
	} else {
		// it opening but u want to delete it
		menu.style.clipPath = "";
		this.dataset.open = "close";
		highlight.style = "";
	}
});

links.forEach((link) => {
	link.addEventListener("pointerover", function () {



		
		// i don;t understand this
		const h = this.offsetHeight;
		const w = this.offsetWidth;
		const t = this.offsetTop;
		highlight.style.cssText = `transform : translateY(${t}px); width:${w}px; height:${h}px`;
	});
});
