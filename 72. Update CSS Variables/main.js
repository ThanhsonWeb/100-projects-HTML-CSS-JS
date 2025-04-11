const input = document.querySelectorAll(".controls input");

function handleUpdate() {
	// console.log(this.name);
	this.name == "base" ? (support = "") : (support = "px");
	document.documentElement.style.setProperty(

		`--${this.name}`,
		this.value + support
	);
}

input.forEach((input) => input.addEventListener("change", handleUpdate));
