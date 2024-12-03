import Game from "./game";
import Goblin from "./goblin";
import PlayingField from "./playing-field";

document.addEventListener("DOMContentLoaded", () => {
  const goblin = new Goblin();
  const card = document.querySelector(".card");
  const goblinElement = goblin.createHtmlElement();
  const deadGoblins = card.querySelector(".dead");
  const lost = card.querySelector(".lost");
  const holeGame = new PlayingField();
  const holeGameElement = holeGame.createPlayingField();
  card.appendChild(holeGameElement);

  const game = new Game(holeGameElement, goblinElement, deadGoblins, lost);
  setTimeout(() => game.letPlay(), 1000);
});
