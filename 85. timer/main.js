const timer = document.getElementById("timer");
const startBtn = document.getElementById("start-button");
const stopBtn = document.getElementById("stop-button");
const resetBtn = document.getElementById("reset-button");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

const INTERVAL_MS = 1000 / 60; // => 16ms update supper fast
let timerID;
let lastTimerStartTime = 0;
let millisElapsedBeforeLastStart = 0;

// CREATE FUNCTIONS

// 1. StartTimer
function startTimer() {
	startBtn.disabled = true;
	stopBtn.disabled = false;
	resetBtn.disabled = true;

	lastTimerStartTime = Date.now(); // start
	timerID = setInterval(updateTimer, INTERVAL_MS);
}

// 2. stopTimer
function stopTimer() {
	startBtn.disabled = false;
	stopBtn.disabled = true;
	resetBtn.disabled = false;

	millisElapsedBeforeLastStart += Date.now() - lastTimerStartTime;
	clearInterval(timerID);
}

// 3 . resetTimer
function resetTimer() {
	resetBtn.disabled = true;
	timer.textContent = "00:00:00";
	millisElapsedBeforeLastStart = 0; //"Thời gian đã tích lũy được sau nhiều lần Start - Stop"
}

//4. updateTimer
function updateTimer() {
	const milllisElapsed = // calc ms
		Date.now() - lastTimerStartTime + millisElapsedBeforeLastStart;
	const secondsElapsed = milllisElapsed / 1000; // ms/1000 = s
	const minutesElaped = secondsElapsed / 60;

	const minutesText = formatNumber(Math.floor(minutesElaped), 2);
	const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
	const millisText = formatNumber(milllisElapsed % 1000, 3);

	timer.textContent = `${minutesText}:${secondsText}:${millisText}`;
}

//5. function
function formatNumber(number, desiredLength) {
	const stringNumber = String(number);
	if (stringNumber.length > desiredLength) {
		return stringNumber.slice(0, desiredLength);
	} else {
		return stringNumber.padStart(desiredLength, "0");
	}

}
