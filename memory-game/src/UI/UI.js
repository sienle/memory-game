import { div } from "./components/factory";
import { Header } from "./Header";
import { GameBoard } from "./GameBoard";

export class UI {
  constructor({ onNewGame, onLeaderboard, cards, onCardClick }) {
    this.root = document.body;
    this.wrapper = div("wrapper");

    this.header = new Header({
      onNewGame,
      onLeaderboard,
    });
    this.gameBoard = new GameBoard({
      cards,
      onCardClick,
    });
    this.root.append(this.wrapper.getNode());
  }

  render() {
    this.wrapper
      .getNode()
      .append(this.header.getNode(), this.gameBoard.getNode());
  }

  updateCard(card) {
    this.gameBoard.updateCard(card);
  }
  updateCards(cards) {
    cards.forEach((card) => {
      this.gameBoard.updateCard(card);
    });
  }

  resetGame(cards) {
    this.gameBoard.reset(cards);
  }

  updateGameInfo(data) {
    this.header.updateGameInfo(data);
  }
}
