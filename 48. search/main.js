const btn = document.querySelector("#searchBtn");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
	let input = document.getElementById("input").value;

	if (input !== "") {
		let regExp = new RegExp(input, "gi");
		p.innerHTML = p.textContent.replace(regExp, "<mark>$& </mark>");
	}
});

// 2 !== 2      // false (giống nhau)

// "abc" !== "ABC" // true (khác nhau ) . 

// RegExp cho phép bạn tìm kiếm chuỗi "theo mẫu".

// "gi" giúp tìm tất cả và không phân biệt hoa thường.

// $& giữ lại giá trị khớp để chèn vào HTML mới (bọc trong <mark>).