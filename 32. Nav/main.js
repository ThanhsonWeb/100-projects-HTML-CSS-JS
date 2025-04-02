const pageContainer = document.querySelector(".page-container");
const pages = document.querySelectorAll(".page");
const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector(".nav-list");
const links = document.querySelectorAll(".link");

// click btn -> navlist>li
// click li --> page
toggleBtn.addEventListener("click", () => {
	toggleBtn.classList.toggle("active");
	pageContainer.classList.toggle("active");
	ul.classList.toggle("show");
});

links.forEach((item, index) => {
	item.addEventListener("click", () => {
		nextPage(index);
	});
});

let pageIndex = 0;

function nextPage(index) {
	setTimeout(() => {
		pages[pageIndex].classList.remove("active");
		pages[index].classList.add("active");
        pageIndex = index;
	}, 500);
}


