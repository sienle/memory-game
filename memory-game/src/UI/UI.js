import { div } from "./components/factory";
import { Header } from "./Header";
import { GameBoard } from "./GameBoard";
import { VictoryModal } from "./VictoryModal";

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
    this.victoryModal = new VictoryModal({
      onNewGame,
    });
    this.root.append(this.wrapper.getNode());
  }

  render() {
    this.wrapper
      .getNode()
      .append(this.header.getNode(), this.gameBoard.getNode());
    this.root.append(this.victoryModal.getNode());
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

  showVictory({ moves }) {
    this.victoryModal.show(moves);
  }
}
