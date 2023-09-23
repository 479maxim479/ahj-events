export default class GameController {
  constructor(cellsSelector) {
    this.cells = cellsSelector.querySelectorAll('.cell');
    this.goblin = cellsSelector.querySelector('.cell_has-goblin');
    this.activeCell = 0;
    this.nextCell = 0;
  }

  nextTurn() {
    setInterval(() => {
      while (this.nextCell === this.activeCell) {
        this.nextCell = Math.floor(Math.random() * this.cells.length);
      }
      this.activeCell = this.nextCell;
      this.cells[this.nextCell].appendChild(this.goblin);
    }, 1000);
  }
}
