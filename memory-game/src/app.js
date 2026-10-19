import { UI } from "./UI/UI";
import { Game } from "./Game/Game";
import { Leaderboard } from "./Leaderboard/Leaderboard";
import { SoundManager } from "./SoundManager/SoundManager";

export class App {
  constructor() {
    this.leaderboard = new Leaderboard();
    this.soundManager = new SoundManager();
  }

  async start() {
    const cardData = await this.loadCardData();
    this.game = new Game(
      cardData,
      8,
      (cards) => this.ui.updateCards(cards),
      (state) => this.ui.updateGameInfo(state),
      (result) => {
        this.leaderboard.addResult(result.moves);
        this.ui.showVictory(result);
      },
      (isChecking) => this.ui.setChecking(isChecking),
    );
    this.ui = new UI({
      onNewGame: () => {
        const cards = this.game.newGame();
        this.ui.resetGame(cards);
      },
      onLeaderboard: () => {
        const results = this.leaderboard.getResults();
        this.ui.showLeaderboard(results);
      },
      onToggleSound: () => {
        const enabled = this.soundManager.toggle();
        this.ui.updateSoundButton(enabled);
      },
      cards: this.game.getCards(),
      onCardClick: (card) => {
        const flipped = this.game.flipCard(card);
        if (flipped) {
          this.soundManager.playCardSound();
          this.soundManager.playMusic();
        }
      },
    });
    this.game.startGame();
    this.ui.render();
    this.ui.updateSoundButton(this.soundManager.enabled);
  }

  async loadCardData() {
    const response = await fetch(`${import.meta.env.BASE_URL}/json/cardsData.json`);
    if (!response.ok) {
      throw new Error("Failed to load card data");
    }
    return response.json();
  }

  showVictory({ moves }) {
    this.victoryModal.show(moves);
  }
}
