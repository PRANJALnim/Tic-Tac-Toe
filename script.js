const boxes = document.querySelectorAll('.box');

let currentPlayer = 'X';

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerHTML !== '') {
            return;
        }
        box.innerHTML = currentPlayer;
        if (checkWinner()) {
            const playersDiv = document.querySelector('.players');
            playersDiv.innerHTML = `${currentPlayer} wins!`;
            const button = document.createElement('button');
            button.textContent = 'Play Again';
            button.addEventListener('click', resetGame);
            playersDiv.appendChild(button);
        } else {
            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else {
                currentPlayer = 'X';
            }
        }
    });
});

function checkWinner() {
    const boxesArray = Array.from(boxes);
    for (let i = 0; i < 9; i += 3) {
        if (boxesArray[i].innerHTML !== '' && boxesArray[i].innerHTML === boxesArray[i + 1].innerHTML && boxesArray[i + 1].innerHTML === boxesArray[i + 2].innerHTML) {
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (boxesArray[i].innerHTML !== '' && boxesArray[i].innerHTML === boxesArray[i + 3].innerHTML && boxesArray[i + 3].innerHTML === boxesArray[i + 6].innerHTML) {
            return true;
        }
    }
    if (boxesArray[0].innerHTML !== '' && boxesArray[0].innerHTML === boxesArray[4].innerHTML && boxesArray[4].innerHTML === boxesArray[8].innerHTML) {
        return true;
    }
    if (boxesArray[2].innerHTML !== '' && boxesArray[2].innerHTML === boxesArray[4].innerHTML && boxesArray[4].innerHTML === boxesArray[6].innerHTML) {
        return true;
    }
    return false;
}
function resetGame() {
    boxes.forEach(box => {
        box.innerHTML = '';
    });
    currentPlayer = 'X';
    const playersDiv = document.querySelector('.players');
    playersDiv.innerHTML = 'O Vs X';
}