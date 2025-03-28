const arrow = document.querySelector(".arrow");
const list = document.querySelector("#list");
const options = document.querySelectorAll(".option");
const selectorfather = document.querySelector(".selectfather");
const selectText = document.querySelector(".seclectText");

selectorfather.addEventListener("click", () => {
	list.classList.toggle("hide");
	arrow.classList.toggle("rotate");
});

// for (option of options) {
// 	option.onclick = function () {
// 		selectText.innerHTML = this.textContent;
// 		list.classList.toggle("hide");
// 		arrow.classList.toggle("rotate");
// 	};
// }

options.forEach((option) => {
	option.addEventListener("click", function () {
		selectText.innerHTML = this.textContent;
		list.classList.toggle("hide");
		arrow.classList.toggle("rotate");
	});
});

