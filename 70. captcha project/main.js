let reloadBtn = document.querySelector(".reload-btn");
let inputField = document.querySelector("input");
let captcha = document.querySelector(".captcha");
let checkBtn = document.querySelector(".check-btn");
let statusTxt = document.querySelector(".status-text");

let allCharacters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
];
// ok
function getCaptcha() {
	for (let i = 0; i < 6; i++) {
		let randomChar =
			allCharacters[Math.floor(Math.random() * allCharacters.length)];
		captcha.innerHTML += `${randomChar}`;
	}
}
// ok
reloadBtn.addEventListener("click", () => {
	captcha.innerHTML = "";
	getCaptcha();
});

// not ok
checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    statusTxt.style.display = "block";
    let inputVal = inputField.value.split("").join("");
    if (inputVal == captcha.innerText) {
        // nếu hợp lệ thì..
      statusTxt.style.color = "#4db2ec";
      statusTxt.innerText = "Nice, Captcha Matched";
      setTimeout(() => {
        statusTxt.style.display = "none";
        inputField.value = "";
        captcha.innerText = "";
        getCaptcha();
      }, 4000);
    } else {
      statusTxt.style.color = "#ff0000";
      statusTxt.innerText = "Captcha not matched. Please Try Again Later";
    }
  });
