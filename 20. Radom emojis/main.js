const btn = document.querySelector(".emoji");
// 1
const emojis = ["😘", "😁", "😎", "😜"];
// 2
btn.addEventListener("click", () => {
	btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});
