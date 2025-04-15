const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
	"A day in the life of programmer",
	"What is JavaScript?",
	"What is React?",
	"What is Programming Language?",
	"What's your name?",
	"Where are you from?",
	"This is just random word",
	"What is Remix.js?",
	"New Technologies",
	"Is programming hard?",
	"Why do you wanna become a programmer?",
	"Which programming language you like the most?",
	"What is Golang? and why do you wanna learn it?",
	"What is CSS",
];

const game = {
	start: 0,
	end: 0,
	user: "",
	arrText: "",
};

btn.addEventListener("click", () => {
	if (btn.textContent === "Start") {
		play();
	} else if (btn.textContent === "Done") {
		end();
	}
});

function play() {
	typeArea.value = "";
	typeArea.disabled = false;
	// random Text
	let randText = Math.floor(Math.random() * words.length);
	main.textContent = words[randText];
	game.arrText = words[randText];
	btn.textContent = "Done";
	main.style.borderColor = "#c8c8c8";

	//   take time when click "start"
	const duration = new Date();
	game.start = duration.getTime(); //  timestamp
}

function end() {
	typeArea.disabled = true;
	main.style.borderColor = "white";
	// take time when click "Done"
	const duration = new Date();
	game.end = duration.getTime();

	// timestamp is ms => ms/1000 = s
	const totalTime = (game.end - game.start) / 1000;
	game.user = typeArea.value;

	// result
	const correct = results();

	//   easy
	main.style.borderColor = "white";
	main.innerHTML = `Time: ${totalTime} Score: ${correct.score} out of ${correct.total}`;
	btn.textContent = "Start";
}

function results() {
	let valueOne = game.arrText.split(" ");
	let valueTwo = game.user.split(" ");
	let score = 0;
	valueOne.forEach((word, idx) => {
		if (word === valueTwo[idx]) {
			score++;
		}
	});

	return { score, total: valueOne.length };
}
