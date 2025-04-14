const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null; // empty

function randomSquare() {
	squares.forEach((square) => {
		square.classList.remove("emoji");
	});

	let randomSquare = squares[Math.floor(Math.random() * squares.length)];
	randomSquare.classList.add("emoji");
	hitPosition = randomSquare.id;
}

squares.forEach((square) => {
	square.addEventListener("mousedown", () => {
		if (square.id == hitPosition) {
			result++;
			score.textContent = result;
			hitPosition = null; // no value, empty
		}
	});
});

function moveEmoji() {
	timerId = setInterval(randomSquare, 500);
}

moveEmoji();

function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;

	if (currentTime == 0) {
		clearInterval(countDownTimerId);
		clearInterval(timeId);
		alert(`Game over ! Your final score is ${result}`);
	}
}

let countDownTimerId = setInterval(countDown, 1000);
