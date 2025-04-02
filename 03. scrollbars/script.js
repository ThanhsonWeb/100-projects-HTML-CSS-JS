btn.addEventListener("click", function () {
    if (this.dataset.open === "close") {
        menu.style.clipPath = "circle(90% at 50%)";
        this.dataset.open = "open";
    } else {
        menu.style.clipPath = "";
        this.dataset.open = "close";
        highlight.style = "";
    }
});
