const game = { timer: 0, start: null };

// Create Message Element
const message = document.createElement("div");
message.classList.add("message");
message.textContent = "Press To Start ^^";
document.body.prepend(message);

// Create A Box

const box = document.createElement("div");
box.classList.add("box");

// event
box.addEventListener("click", () => {
	box.style.display = "none";
	// box.textContent = "";
	game.timer = setTimeout(addBox, 2000);
	if (!game.start) {
		message.textContent = "Watch for Element and click it";
	} else {
        // take time when 
		const current = new Date().getTime();
		const duration = (current - game.start) / 1000;
		message.textContent = `It look ${duration} seconds to click`;
	}
});

const output = document.querySelector(".output");
output.prepend(box);

function randomNumbers(max) {
	return Math.floor(Math.random() * max);
}

function addBox() {
	// take time when box appear
	game.start = new Date().getTime();
	const container = output.getBoundingClientRect();
	// array
	const dim = [randomNumbers(50) + 20, randomNumbers(50) + 20];
	box.style.display = "block";
	box.style.width = `${dim[0]}px`;
	box.style.height = `${dim[1]}px`;
	box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
	box.style.left = randomNumbers(container.width - dim[0]) + "px";
	box.style.top = randomNumbers(container.height - dim[1]) + "px";
	box.style.borderRadius = randomNumbers(30) + "%";
}
