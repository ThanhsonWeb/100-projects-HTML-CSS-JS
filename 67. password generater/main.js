const genBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");

genBtn.addEventListener("click", () => randomPassword());
copyBtn.addEventListener("click", () => copyPassword());

function randomPassword() {
	let chars =
		"0123456789abcdefghijklmnopqristuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	passwordLength = 7;
	password = "";

	for (let i = 0; i <= passwordLength; i++) {
		let randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber + 1);
	}
	document.getElementById("password").value = password;
}

function copyPassword() {
    // gán pass vào biến mới 
	let copyText = document.getElementById("password");
	copyText.select();
	document.execCommand("copy");
}
