const API_BASE = 'http://localhost:3000/api';

// Load guess data from sessionStorage
const guessData = JSON.parse(sessionStorage.getItem('guessData') || '{}');
let sessionId = guessData.sessionId || null;

// DOM elements
const guessText = document.getElementById('guess-text');
const guessDescription = document.getElementById('guess-description');
const guessImageContainer = document.getElementById('guess-image-container');
const guessImage = document.getElementById('guess-image');
const correctBtn = document.getElementById('correct-btn');
const wrongBtn = document.getElementById('wrong-btn');
const continueBtn = document.getElementById('continue-btn');
const wrongInput = document.getElementById('wrong-input');
const actualAnswerInput = document.getElementById('actual-answer');
const submitAnswerBtn = document.getElementById('submit-answer-btn');

// Load guess data on page load
if (guessData.guessName) {
    guessText.textContent = guessData.guessName;
    
    if (guessData.guessDescription) {
        guessDescription.textContent = guessData.guessDescription;
        guessDescription.style.display = 'block';
    }
    
    if (guessData.guessImage) {
        guessImage.src = guessData.guessImage;
        guessImageContainer.style.display = 'block';
    }
}

// Handle continue questioning
async function handleContinue() {
    if (!sessionId) {
        window.location.href = 'index.html';
        return;
    }
    
    window.location.href = 'index.html';
}

// Handle guess result
async function handleGuessResult(correct) {
    if (!sessionId) {
        window.location.href = 'index.html';
        return;
    }

    if (correct) {
        const response = await fetch(`${API_BASE}/game/guess-result`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sessionId,
                correct: true
            })
        });

        if (response.ok) {
            window.location.href = 'index.html';
        }
    } else {
        wrongInput.style.display = 'block';
        wrongBtn.disabled = true;
        correctBtn.disabled = true;
    }
}

// Submit actual answer when guess is wrong
async function submitActualAnswer() {
    if (!sessionId) return;

    const actualAnswer = actualAnswerInput.value.trim();
    if (!actualAnswer) {
        alert('Please enter who you were thinking of.');
        return;
    }

    const response = await fetch(`${API_BASE}/game/guess-result`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sessionId,
            correct: false,
            actualAnswer
        })
    });

    if (response.ok) {
        window.location.href = 'index.html';
    }
}

// Event listeners
correctBtn.addEventListener('click', () => handleGuessResult(true));
wrongBtn.addEventListener('click', () => handleGuessResult(false));
continueBtn.addEventListener('click', handleContinue);
submitAnswerBtn.addEventListener('click', submitActualAnswer);

actualAnswerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitActualAnswer();
    }
});
