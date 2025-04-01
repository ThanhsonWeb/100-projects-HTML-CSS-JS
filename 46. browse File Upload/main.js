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

	close.addEventListener("click", () => {
		image.classList.remove("active");
		close.classList.remove("exit");
	});
}



// const closeBtn = document.querySelector(".icon p.close");
// const imgElement = document.querySelector(".img img");
// const uploadBtn = document.querySelector(".wrapper .upload");

// // Simulate showing the image and enabling the close button
// uploadBtn.addEventListener("click", () => {
//     imgElement.classList.add("active"); // Show the image
//     closeBtn.classList.add("exit"); // Show the close button
// });

// // Hide the image and close button when the close button is clicked
// closeBtn.addEventListener("click", () => {
//     imgElement.classList.remove("active"); // Hide the image
//     closeBtn.classList.remove("exit"); // Hide the close button
// });
