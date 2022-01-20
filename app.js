const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const winningScoreSelect = document.querySelector('#playTo')

let p1Points = 0;
let p2Points = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Points += 1;
        if (p1Points === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Points;
    }
})

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Points += 1;
        if (p2Points === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-success');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Points;
    }
})

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    p1Points = 0;
    p1Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Points = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}