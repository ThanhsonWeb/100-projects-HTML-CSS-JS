const emotions = document.querySelector("#emotions");
emotions.style.display = "none"; // Hides the element

function getTab(el) {
    // Remove 'active' and 'visible' classes from the currently active tab and content
    document.querySelector(".active")?.classList.remove("active");
    document.querySelector(".visible")?.classList.remove("visible");

    // Add 'active' and 'visible' classes to the clicked tab and its corresponding content
    el.classList.add("active");
    document.getElementById(el.hash.substring(1)).classList.add("visible");
}

document.addEventListener("click", (event) => {
    if (event.target.matches(".tab-item a")) {
        event.preventDefault(); // Prevent default anchor behavior
        getTab(event.target);
    }
});

const upButton = document.querySelector("#up-btn");
const downButton = document.querySelector("#down-btn");
const leftSlide = document.querySelector(".left-slid");
const rightSlide = document.querySelector(".right-slid");
const sliderContainer = document.querySelector(".slider-container");
const sliderLength = rightSlide.querySelectorAll("div").length; // Updated selector

let activeSlideIndex = 0;
leftSlide.style.top = `-${(sliderLength - 1) * 100}vh`;

upButton.addEventListener("click", () => nextSlide("up"));
downButton.addEventListener("click", () => nextSlide("down"));

function nextSlide(direction) { // Renamed parameter for clarity
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > sliderLength - 1) {
            activeSlideIndex = 0;
        }
    }

    if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = sliderLength - 1;
        }
    }

    rightSlide.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
    }px)`;

    leftSlide.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
    }px)`;
}
