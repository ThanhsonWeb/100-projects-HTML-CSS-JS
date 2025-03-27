const eye = document.querySelector("#eye");
const input = document.querySelector("#password");

eye.addEventListener("click", () => {
	// if (input.type === "password") {
	// 	input.type = "text";
	// } else {
	// 	input.type = "password";
	// }

	input.type === "password" ? (input.type = "text") : (input.type = "password");
});
