const cursor = document.querySelector(".cursor");

// 3
document.addEventListener("mousemove", (event) => {
	moveCursor(event.pageX, event.pageY);
});
// 2
const moveCursor = function (pageX, pageY) {
	cursor.style.left = pageX + "px";
	cursor.style.top = pageY + "px";
};
