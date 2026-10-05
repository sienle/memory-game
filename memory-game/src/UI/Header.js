import { Component } from "./components/Component";
import { button, h1 } from "./components/factory";
import { GameInfo } from "./GameInfo";

export class Header extends Component {
  constructor({ onNewGame, onLeaderboard }) {
    super(
      {
        tag: "header",
        className: "header",
      },
      h1("heading", "Memory game"),
    );
    this.gameInfo = new GameInfo();
    this.onNewGame = onNewGame;
    this.onLeaderboard = onLeaderboard;
    this.append(this.gameInfo);
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

  updateGameInfo(data) {
    this.gameInfo.update(data);
  }
}
