const result = document.querySelector("#result");
const filter = document.querySelector("#filter");
const listItem = [];

getData();

filter.addEventListener("input", (e) => {
	filterData(e.target.value);
});

// fetches random user data from the API and dynamically populates (điền tự động)
async function getData() {
	const res = await fetch("https://randomuser.me/api?results=50"); //API
	const { results } = await res.json(); // array contains the user data returned by the API.

	result.innerHTML = ""; //Clears any existing content

	results.forEach((user) => {
		// 1. Creates a new <li> element for each user and adds it to the listItem array.
		const li = document.createElement("li");
		listItem.push(li);

		// 2. Add User Information into "li" tag
		li.innerHTML = `
			<img src="${user.picture.large}" alt="${user.name.first}" />
			<div class="user-info">
				<h4>${user.name.first} ${user.name.last}</h4>
				<p>${user.location.city}, ${user.location.country}</p>
			</div>
		`;
		// finally
		result.appendChild(li);
	});
}

// searchTerm = (e.target.value)

function filterData(searchTerm) {
	listItem.forEach((item) => {
		if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove("hide");
		} else {
			item.classList.add("hide");
		}
	});
}

// tới đây qua css lại
