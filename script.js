//Define language learning phrases organized by categories
const phraseCategories = {
    greetings: [
        "Hello, how are you?",
        "Good morning!",
        "Nice to meet you!",
    ],
    introductions: [
        "What is your name?",
        "My name is...",
        "Where are you from?",
    ],
    orderingFood: [
        "I would like to order food, please.",
        "What's on the menu?",
        "Can I have the bill, please?",
    ],
    askingDirections: [
        "Can you help me with directions?",
        "Where is the nearest...",
        "How do I get to...",
    ],
    prices: [
        "How much does it cost?",
        "Is there a discount?",
        "It's too expensive!",
    ],
    farewells: [
        "Goodbye!",
        "See you later!",
        "Take care!",
    ],
};

// Function to generate a random phrase from a specific category
const generateRandomPhrase = category => {
    const categoryPhrases = phraseCategories[category];
    if (!categoryPhrases) {
        return "Invalid category.";
    }

    const randomIndex = Math.floor(Math.random() * categoryPhrases.length);
    return categoryPhrases[randomIndex];
}

const getSelectedCategory = () => {
    const categorySelect = document.getElementById('categorySelect');
    return categorySelect.value;
}

// Function to display the generated phrase in the HTML
const updateDisplayedPhrase = () => {
    const generatedPhraseElement = document.getElementById('generatePhrase');
    const selectedCategory = getSelectedCategory();
    const randomPhrase = generateRandomPhrase(selectedCategory);
    generatedPhraseElement.textContent = randomPhrase;
}


const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', updateDisplayedPhrase);

updateDisplayedPhrase();