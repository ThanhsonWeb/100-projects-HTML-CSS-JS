const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Sonddz", "Join", "Ben", "ken"];

const typingDelay = 200;
const erasingDelay = 200;
// Delay between current and next text
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0; // impact to add or erase

//  3
document.addEventListener("DOMContentLoaded", () => {
    // nếu đúng thì cho nó type lại với time 2s
	if (words.length) {
		setTimeout(type, newLetterDelay);
	}
});


// 1
function type() {
	if (charIndex < words[index].length) {
		// nếu bé hơn thì thêm text
		typedTextSpan.textContent += words[index].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	} else {
		setTimeout(erase, newLetterDelay);
	}
}

// 2

function erase() {
	if (charIndex > 0) {
		// nếu lớn hơn thì xóa text
		typedTextSpan.textContent = words[index].slice(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	} else {
		index++;
		if (index >= words.length) {
			index = 0; // Loop back to the first word
		}
		setTimeout(type, typingDelay + 2100); //Pause before typing the next word
	}
}
