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
    const actives = document.querySelectorAll(".active");
    progress.style.width = ((actives.length - 1) / (steps.length - 1)) * 100 + `%`;

    // Update button states
    if (currentStep === 1) {
        prev.disabled = true;
    } else if (currentStep === steps.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
