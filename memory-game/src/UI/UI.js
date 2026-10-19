import { div } from "./components/factory";
import { Header } from "./Header";
import { GameBoard } from "./GameBoard";
import { VictoryModal } from "./VictoryModal";
import { LeaderboardModal } from "./LeaderboardModal";

export class UI {
  constructor({ onNewGame, onLeaderboard, onToggleSound, cards, onCardClick }) {
    this.root = document.body;
    this.wrapper = div("wrapper");

    this.header = new Header({
      onNewGame,
      onLeaderboard,
      onToggleSound,
    });
    this.gameBoard = new GameBoard({
      cards,
      onCardClick,
    });
    this.victoryModal = new VictoryModal({
      onNewGame,
    });
    this.leaderboardModal = new LeaderboardModal();
    this.root.append(this.wrapper.getNode());
  }

  render() {
    this.wrapper
      .getNode()
      .append(this.header.getNode(), this.gameBoard.getNode());
    this.root.append(
      this.victoryModal.getNode(),
      this.leaderboardModal.getNode(),
    );
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

  showLeaderboard(results) {
    this.leaderboardModal.show(results);
  }

  updateSoundButton(enabled) {
    this.header.updateSoundButton(enabled);
  }

  setChecking(isChecking) {
    this.gameBoard.setChecking(isChecking);
  }
}
