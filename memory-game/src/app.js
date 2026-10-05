import { UI } from "./UI/UI";
import { Game } from "./Game/Game";
import { Leaderboard } from "./Leaderboard/Leaderboard";

export class App {
  constructor() {
    this.leaderboard = new Leaderboard();
  }

  async start() {
    const cardData = await this.loadCardData();
    this.game = new Game(
      cardData,
      8,
      (cards) => this.ui.updateCards(cards),
      (state) => this.ui.updateGameInfo(state),
      (result) => this.ui.showVictory(result),
    );
    this.ui = new UI({
      onNewGame: () => {
        const cards = this.game.newGame();
        this.ui.resetGame(cards);
      },
      onLeaderboard: () => this.leaderboard.load(),
      cards: this.game.getCards(),
      onCardClick: (card) => this.game.flipCard(card),
    });
    this.game.startGame();
    this.ui.render();
  }

  async loadCardData() {
    const response = await fetch("/json/cardsData.json");
    if (!response.ok) {
      throw new Error("Failed to load card data");
    }
    return response.json();
  }

  showVictory({ moves }) {
    this.victoryModal.show(moves);
  }
}
