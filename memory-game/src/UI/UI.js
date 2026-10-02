import { div } from "./components/factory";
import { Header } from "./components/Header";

export class UI {
  constructor({onNewGame, onLeaderboard}) {
    this.root = document.body;
    this.wrapper = div("wrapper");

    this.header = new Header({
      onNewGame,
      onLeaderboard,
    });
    this.root.append(this.wrapper.getNode());
  }

  render() {
    this.wrapper.getNode().append(this.header.getNode());
  }
}
