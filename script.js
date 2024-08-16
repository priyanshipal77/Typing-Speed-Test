const passageElement = document.getElementById('passage');
const inputElement = document.getElementById('input');
const wpmElement = document.getElementById('words-per-minute');
const accuracyElement = document.getElementById('accuracy');
const resetButton = document.getElementById('reset-button');

let startTime;
let interval;

const passageText = passageElement.textContent;

function startTimer() {
    if (startTime) return; // Prevent multiple timers
    startTime = new Date();
    interval = setInterval(calculateResults, 1000);
}

function calculateResults() {
    const elapsedTime = (new Date() - startTime) / 1000; // seconds
    const words = inputElement.value.split(/\s+/).filter(Boolean).length;
    const minutes = elapsedTime / 60;
    const wpm = Math.round(words / minutes);

    const passageWords = passageText.split(/\s+/).filter(Boolean).length;
    const typedWords = inputElement.value.split(/\s+/).filter(Boolean).length;
    const correctWords = typedWords; // Simple calculation; could be more complex

    const accuracy = passageWords > 0 ? Math.round((correctWords / passageWords) * 100) : 0;

    wpmElement.textContent = `Words per minute: ${wpm}`;
    accuracyElement.textContent = `Accuracy: ${accuracy}%`;
}

function resetTest() {
    clearInterval(interval);
    startTime = null;
    inputElement.value = '';
    wpmElement.textContent = `Words per minute: 0`;
    accuracyElement.textContent = `Accuracy: 0%`;
    inputElement.focus();
}

inputElement.addEventListener('focus', startTimer);
resetButton.addEventListener('click', resetTest);


