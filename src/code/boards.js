const boardSize = 10;
const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
  // Cleanse previous boards
  playerBoard.innerHTML = '';
  computerBoard.innerHTML = '';

  // Create cells for player board
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      playerBoard.appendChild(cell);
    }
  }

  // Create cells for computer board
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      computerBoard.appendChild(cell);
    }
  }
});
