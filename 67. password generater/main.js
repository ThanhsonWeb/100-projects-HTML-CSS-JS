const genBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");

genBtn.addEventListener("click", () => randomPassword());
copyBtn.addEventListener("click", () => copyPassword());

function randomPassword() {
	let chars =
		"0123456789abcdefghijklmnopqristuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	let passwordLength = 7;
	let password = "";

	for (let i = 0; i < passwordLength; i++) {
		let randomNumber = Math.floor(Math.random() * chars.length);
		password += chars[randomNumber];
	}
	document.getElementById("password").value = password;
}

function copyPassword() {


	
    // gán pass vào biến mới 
	let copyText = document.getElementById("password");
	copyText.select();
	document.execCommand("copy");
}
