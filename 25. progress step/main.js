const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progress = document.querySelector("#progress");
const steps = document.querySelectorAll(".step");

let currentStep = 1;

next.addEventListener("click", () => {
	currentStep++;
	if (currentStep > steps.length) {
		currentStep = steps.length;
	}
	update();
});

prev.addEventListener("click", () => {
	currentStep--;
	if (currentStep < 1) {
		currentStep = 1;
	}
	update();
});

function update() {
	// Update active steps
	steps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add("active");
		} else {
			step.classList.remove("active");
		}
	});

	// Update progress bar width
	progress.style.width = ((currentStep - 1) / (steps.length - 1)) * 100 + `%`;

	// Update button states
	if (currentStep === 1) {
		prev.disabled = true;
		c;
	} else if (currentStep === steps.length) {
		next.disce;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}

// Disable button nếu ở bước đầu hoặc bước cuối
prev.disabled = currentStep === 1;
next.disabled = currentStep === steps.length;
