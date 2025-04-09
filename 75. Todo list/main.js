let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let message = document.querySelector(".message-container");

function getTodo(value) {
	// 1. create new Element --> fix value --> add into todo
	// --> visible success
	let todo = document.createElement("div");
	let textEl = document.createElement("span");
	textEl.innerHTML = value;
	todo.appendChild(textEl);
	message.classList.toggle("success");
	message.textContent = "Item Added";
	// time to lose 3s
	setTimeout(() => {
		message.classList.toggle("success");
	}, 3000);

	// 2. create new span (x) --> add class có sẵn cho nó

	let closeEl = document.createElement("span");
	closeEl.innerHTML = "X";
	closeEl.classList.add("delete");
    // click vào X --> remove "todo" --> add class error --> fix content
	closeEl.addEventListener("click", () => {
		output.removeChild(todo);
		message.classList.toggle("error");
		message.textContent = "Item Deleted";
        // after 3s vanish
		setTimeout(() => {
			message.classList.toggle("error");
		}, 3000);
	});

	todo.appendChild(closeEl);
	todo.classList.add("todo");
	return todo;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let value = input.value;
	if (!value.trim()) return;
	output.appendChild(getTodo(value));
	input.value = "";
});
