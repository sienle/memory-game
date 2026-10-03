import { Component } from "./Component";
import { button, h1 } from "./factory";

export class Header extends Component {
  constructor({ onNewGame, onLeaderboard }) {
    super(
      {
        tag: "header",
        className: "header",
      },
      h1("heading", "Memory game"),
    );

    this.onNewGame = onNewGame;
    this.onLeaderboard = onLeaderboard;

    this.createButtons();
  }

  createButtons() {
    const newGameButton = button("header-button", "Новая игра", this.onNewGame);
    const leaderboardButton = button(
      "header-button",
      "Таблица лидеров",
      this.onLeaderboard,
    );

    this.getNode().append(newGameButton.getNode(), leaderboardButton.getNode());
  }
}
