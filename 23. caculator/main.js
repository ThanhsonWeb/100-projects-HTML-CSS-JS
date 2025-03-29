// 1
document.querySelector("#btn").addEventListener("click", () => {
	//  1
	let num1 = document.querySelector(".num1").value;
	let num2 = document.querySelector(".num2").value;
	let results = document.querySelector(".results");
	let selectOp = document.querySelector("#select").value;

	// 2
	switch (selectOp) {
		case "plus":
			results.innerHTML = num1 + num2;
			break;
		case "min":
			results.innerHTML = Number(num1) - Number(num2);
			break;
		case "dev":
			results.innerHTML = Number(num1) / Number(num2);
			break;
		case "multi":
			results.textContent = Number(num1) * Number(num2);
			break;
	}
});
