const menu = document.querySelector(".menu");
const links = document.querySelectorAll("li");
const highlight = document.querySelector(".highlight");
const btn = document.querySelector(".btn");

// why cant I use arrow function for this case ?
btn.addEventListener("click", function () {
	if (this.dataset.open === "close") {
		menu.style.clipPath = "circle(100% at 50%  )";
		this.dataset.open = "open";
	} else { // it opening but u want to delete it
		menu.style.clipPath = "";
		this.dataset.open = "close";
		// highlight.style = "";
	}
});

links.forEach((link) => {
	link.addEventListener("pointerover", function () {
        // i don;t understand this 
		const w = this.offsetWidth;
		const h = this.offsetHeight;
		const t = this.offsetTop;
        // what is highlight role in this project ?????
		highlight.style.cssText = `transform : translateY(${t}px); width:${w}px; height:${h}px`;
	});
});
