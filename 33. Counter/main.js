const incrementBtn = document.querySelector(".increment-btn");
const saveBtn = document.querySelector(".save-btn");
const countEl = document.querySelector("#count");
const saveEl = document.querySelector("#save");

let counts = 0;

incrementBtn.addEventListener("click", () => {
	counts += 1;
	countEl.textContent = counts;
});

saveBtn.addEventListener("click", () => {
	let countStr = counts + " , ";
	saveEl.textContent += countStr;
	countEl.textContent = 0;
});
