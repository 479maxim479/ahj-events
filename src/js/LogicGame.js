export default class LogicGame {
  constructor() {
    this.lossClickGoblin = 0;
    this.hitClickGoblin = 0;
  }

  goblinClick() {
    if (this.lossClickGoblin === 5) {
      alert(`
      Вы проиграли !
      Попаданий: ${this.hitClickGoblin}
      Промахов: ${this.lossClickGoblin}
      `);
      this.lossClickGoblin = 0;
      this.hitClickGoblin = 0;
    } else if (this.hitClickGoblin === 5) {
      alert(`
      Вы выиграли !
      Попаданий: ${this.hitClickGoblin}
      Промахов: ${this.lossClickGoblin}
      `);
      this.lossClickGoblin = 0;
      this.hitClickGoblin = 0;
    }
  }
}
