const clock = document.querySelector("#clock");

setInterval(update, 1000);

function update() {
	const now = new Date();

	const h = String(now.getHours()).padStart(2, 0);
	const m = String(now.getMinutes()).padStart(2, 0);
	const s = String(now.getSeconds()).padStart(2, 0);

	const time = `${h}: ${m}: ${s}`;

	clock.textContent = time;
}
