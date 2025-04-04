const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders.forEach((accordion) => {
	accordion.addEventListener("click", collapseAccordion);
	
	function collapseAccordion() {
		// this part for optimize
		const activeAccordion = document.querySelector(".active");
		if (activeAccordion && activeAccordion !== accordion) {
			activeAccordion.classList.toggle("active");
			activeAccordion.nextElementSibling.style.maxHeight = 0;
		}

		//this part is essential
		accordion.classList.toggle("active");
		const accordionItemBody = accordion.nextElementSibling;

		if (accordion.classList.contains("active")) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
		} else {
			accordionItemBody.style.maxHeight = 0;
		}
	}
});
