// Utility function to generate a random character from a set of characters
function getRandomChar(charSet) {
    return charSet[Math.floor(Math.random() * charSet.length)];
}

// Function to generate the random string
function generateString() {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const allChars = numbers + symbols + letters;

    let string = '';
    for (let i = 0; i < 16; i++) {
        if (i === 3 || i === 6 || i === 9 || i === 12) {
            string += '-';
        }
        string += getRandomChar(allChars);
    }
    return string;
}

// DOM Elements
const stringDisplay = document.getElementById('string-display');
const generateButton = document.getElementById('generate-button');
const resetButton = document.getElementById('reset-button');

// Event Listeners
generateButton.addEventListener('click', () => {
    stringDisplay.textContent = generateString();
    generateButton.textContent = 'Regenerate';
    resetButton.style.display = 'inline-block';
});

resetButton.addEventListener('click', () => {
    stringDisplay.textContent = 'Generate string';
    generateButton.textContent = 'Generate';
    resetButton.style.display = 'none';
});
