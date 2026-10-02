import { UI } from "./UI/UI";
import { Game } from './Game/Game';
import { Leaderboard } from './Leaderboard/Leaderboard';

export class App {
  constructor() {
    this.game = new Game();
    this.leaderboard = new Leaderboard();

    this.ui = new UI({
      onNewGame: () => this.game.newGame(),
      onLeaderboard: () => this.leaderboard.load(),
    });
  }

  start() {
    this.game.newGame();
    this.ui.render();
  }
}
