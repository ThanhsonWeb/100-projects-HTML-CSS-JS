const btn = document.querySelector("#searchBtn");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
	let input = document.getElementById("input").value;

	if (input !== "") {
		let regExp = new RegExp(input, "gi");
		p.innerHTML = p.textContent.replace(regExp, "<mark>$& </mark>");
	}
});
