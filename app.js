const button1 = document.querySelector('#p1Button');
const button2 = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const winningScoreSelect = document.querySelector('#playTo')

let p1Points = 0;
let p2Points = 0;
let winningScore = 3;
let isGameOver = false;

button1.addEventListener('click', () => {
    if (!isGameOver) {
        p1Points += 1;
        if (p1Points === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Points;
    }
})

button2.addEventListener('click', () => {
    if (!isGameOver) {
        p2Points += 1;
        if (p2Points === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Points;
    }
})

const reset = () => {
    isGameOver = false;
    p1Points = 0;
    p1Display.textContent = 0;
    p2Points = 0;
    p2Display.textContent = 0;
}

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);