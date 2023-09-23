// TODO: write code here
import GameController from './GameController';
import LogicGame from './LogicGame';

const gameController = new GameController(document.querySelector('.field'));

const logicGame = new LogicGame();

gameController.nextTurn();

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('cell_has-goblin')) {
    logicGame.goblinClick();
    logicGame.hitClickGoblin += 1;
  } else {
    logicGame.goblinClick();
    logicGame.lossClickGoblin += 1;
  }
});
