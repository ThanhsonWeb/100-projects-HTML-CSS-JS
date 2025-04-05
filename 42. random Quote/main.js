const btn = document.querySelector("#btn");
const quoteOutput = document.querySelector("#quoteOutput");
const authorOutput = document.querySelector("#authorOutput");

// array for quotes

const arrayOfQuote = [
	{
		author: "Arthur Helps",
		quote:
			"Keep your feet on the ground, but let your heart soar as high as it will. Refuse to be average or to surrender to the chill of your spiritual environment.",
	},
	{
		author: "Elon Musk",
		quote: "Surrender to the chill of your spiritual environment.",
	},
	{
		author: "Leonardo Da Vinci",
		quote:
			"Let your heart soar as high as it will. Refuse to be average or to surrender to the chill of your spiritual environment.",
	},
	{
		author: "Nikola Tesla",
		quote:
			"Keep your feet let your heart soar as high as it will.  or to surrender to the chill of your spiritual environment.",
	},
];

btn.addEventListener("click", () => {
	generateQuote();
});

// main
function generateQuote() {
	// Generate a random index between 0 and arrayOfQuote.length - 1
	const random = Math.floor(Math.random() * arrayOfQuote.length - 1);

	// Display the random quote and its author
	quoteOutput.innerHTML = `<span>${arrayOfQuote[random].quote}</span>`;
	authorOutput.innerHTML = `<small>- ${arrayOfQuote[random].author}</small>`;
}
