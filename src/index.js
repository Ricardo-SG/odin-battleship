import './styles/board.scss';
import { Gameboard, Ship } from './Gameboard.js';

const playerBoard = new Gameboard(10);
const computerBoard = new Gameboard(10);

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const playerBoardDiv = document.querySelector('.player-board');
const computerBoardDiv = document.querySelector('.computer-board');

let gameStarted = false;

function startGame() {
  if (!gameStarted) {
    playerBoardDiv.innerHTML = '';
    computerBoardDiv.innerHTML = '';
    playerBoard.placeRandomShips();
    computerBoard.placeRandomShips();
    gameStarted = true;
  }
}

function resetGame() {
  gameStarted = false;
  playerBoard.reset();
  computerBoard.reset();
  playerBoardDiv.innerHTML = '';
  computerBoardDiv.innerHTML = '';
}

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
