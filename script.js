let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameover = false;

let cells = document.querySelectorAll('.cell');
let message = document.querySelector('.message');
let restart = document.querySelector('.restart');

cells.forEach(cell => {
cell.addEventListener('click', () => {
if (!gameover && cell.textContent === '') {
cell.textContent = currentPlayer;
board[cell.id.split('-')[1]] = currentPlayer;
checkWinner();
switchPlayer();
}
});
});

restart.addEventListener('click', () => {
board = ['', '', '', '', '', '', '', '', ''];
currentPlayer = 'X';
gameover = false;
cells.forEach(cell => {
cell.textContent = '';
});
message.textContent = '';
});

function checkWinner() {
let winningCombinations = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

for (let i = 0; i < winningCombinations.length; i++) {
let [a, b, c] = winningCombinations[i];
if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
message.textContent = `${currentPlayer} wins!`;
gameover = true;
break;
}
}

if (!board.includes('') && !gameover) {
message.textContent = 'Tie game!';
gameover = true;
}
}

function switchPlayer() {
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
message.style.color="#faf7f7";