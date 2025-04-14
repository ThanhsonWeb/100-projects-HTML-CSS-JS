const textInput = document.querySelector(".text-input"); 
const worldCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count"); 
const spaceCountElement = document.querySelector(".space-count"); 

// Array of validation functions to check each word
const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];

// Function to check if a word has at least two alphabetic characters
function atLeastTwoCharacters(text) {
	const letters = text.match(/[a-z]/gi) || []; // Matches all alphabetic characters (case-insensitive)
	return letters.length >= 2; // Returns true if there are at least 2 letters
}

// Function to check if a word does not have any character repeated 3 or more times consecutively
function abscenceOfThreeConsecutiveCharacters(text) {
	for (const character of text) {
		// Counts occurrences of the current character in the word
		const occurrences = Array.from(text).filter((v) => v == character).length;

		if (occurrences >= 3) {
			// If any character appears 3 or more times, return false
			return false;
		}
	}

	return true; // If no character appears 3 or more times, return true
}

textInput.addEventListener("input", () => {
	// Splits the input text into words or segments using spaces or hyphens as delimiters
	const splitted = textInput.value.trim().split(/[\s-]/);

	// Counts the total number of alphabetic characters in the input
	const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;

	// Counts the total number of spaces in the input
	const spaceCount = (textInput.value.match(/\s+/g) || []).length;

	let wordCount = 0; 

	outer: for (const text of splitted) {
		for (const check of checks) {
			if (!check(text)) {
				// If any check fails, skip this word
				continue outer; // Skip to the next word
			}
		}
		wordCount++; // Increment the word count if all checks pass
	}

	// Update the displayed counts
	worldCountElement.textContent = wordCount; 
	letterCountElement.textContent = letterCount; 
	spaceCountElement.textContent = spaceCount; 
});
