import { Component } from "./components/Component";
import { button, h1, img } from "./components/factory";
import { GameInfo } from "./GameInfo";

export class Header extends Component {
  constructor({ onNewGame, onLeaderboard, onToggleSound }) {
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
    this.onToggleSound = onToggleSound;
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

    this.soundIcon = img("sound-icon");
    this.updateSoundButton(true);
    this.soundButton = button("header-button sound-button", "", this.onToggleSound);
    this.soundButton.getNode().append(this.soundIcon.getNode());

    this.getNode().append(
      newGameButton.getNode(),
      leaderboardButton.getNode(),
      this.soundButton.getNode(),
    );
  }

  updateGameInfo(data) {
    this.gameInfo.update(data);
  }

  updateSoundButton(enabled) {
    this.soundIcon.setAttribute(
      "src",
      enabled ? "/icons/volume.svg" : "/icons/volume-off.svg",
    );

    this.soundIcon.setAttribute(
      "alt",
      enabled ? "Звук включён" : "Звук выключен",
    );
  }
}
