let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight =
	document.documentElement.scrollHeight - document.documentElement.clientHeight;

// event
window.addEventListener("scroll", scroll);

function scroll() {
	let scrollTop = document.documentElement.scrollTop;
	let scrolled = (scrollTop / scrollHeight) * 100;
	indicator.style.width = `${scrolled}%`;
}

// 🔍 Ví dụ để hiểu 70%:
// Giả sử tổng chiều cao trang cần cuộn là 1000px.

// Nếu bạn đã cuộn xuống 700px, thì:

// Sao chép
// Chỉnh sửa
// scrolled = (700 / 1000) * 100 = 70;
// Thanh tiến trình sẽ dài 70%.