const upload = document.querySelector("input");
const image = document.querySelector(".img img");
const close = document.querySelector("#close");

upload.addEventListener("change", () => {
	uploadFile(event);
});

function uploadFile(event) {
	image.classList.add("active");
	close.classList.add("exit");

	image.src = URL.createObjectURL(event.target.files[0]);
	// event.target.files 👉 là danh sách các file bạn chọn từ <input type="file">.

	// files[0] 👉 là file đầu tiên, thường là ảnh bạn vừa chọn.

	// URL.createObjectURL(files[0]) 👉 tạo ra đường dẫn tạm để hiển thị ảnh đó trên trang.

	close.addEventListener("click", () => {
		image.classList.remove("active");
		close.classList.remove("exit");
	});
}
