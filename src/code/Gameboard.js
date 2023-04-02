class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.ships = [];
    this.attacks = [];
  }

  placeShip(ship, coord) {
    const [x, y] = coord;
    const [startX, startY] = ship.startPos;
    const [endX, endY] = ship.endPos;
    const length = ship.length;

    if (startX === endX) {
      // Ship is vertical
      for (let i = startY; i <= endY; i++) {
        if (this.board[x][i]) {
          return false;
        }
      }

      for (let i = startY; i <= endY; i++) {
        this.board[x][i] = { ship, index: i - startY };
      }
    } else if (startY === endY) {
      // Ship is horizontal
      for (let i = startX; i <= endX; i++) {
        if (this.board[i][y]) {
          return false;
        }
      }

      for (let i = startX; i <= endX; i++) {
        this.board[i][y] = { ship, index: i - startX };
      }
    }

    this.ships.push(ship);
    return true;
  }

  receiveAttack(coord) {
    const [x, y] = coord;

    if (this.board[x][y] === null) {
      this.board[x][y] = 'miss';
      this.attacks.push({ coord, result: 'miss' });
      return 'miss';
    } else if (this.board[x][y] === 'miss' || this.board[x][y] === 'hit') {
      return null;
    } else {
      const { ship, index } = this.board[x][y];
      ship.hit(index);
      this.attacks.push({ coord, result: 'hit' });
      this.board[x][y] = 'hit';
      return 'hit';
    }
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

class Ship {
  constructor(length) {
    this.length = length;
    this.startPos = null;
    this.endPos = null;
    this.hits = Array(length).fill(false);
  }

  hit(index) {
    this.hits[index] = true;
  }

  isSunk() {
    return this.hits.every((hit) => hit === true);
  }
}

export { Gameboard, Ship };
