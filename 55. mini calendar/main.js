const monthEl = document.querySelector("#month");
const dayEl = document.querySelector("#day");
const dayNumEl = document.querySelector("#day-num");
const yearEl = document.querySelector("#year");

const date = new Date();
const month = date.getMonth();

monthEl.innerHTML = date.toLocaleDateString("en", { month: "long" });
//  month: "long" như ghi đầy đủ April instead Apr
yearEl.textContent = date.getFullYear();
dayNumEl.textContent = date.getDate();

dayEl.textContent = date.toLocaleDateString("en", {
	weekday: "long",
});
