import { Component } from "./components/Component";
import { div, span } from "./components/factory";

export class GameInfo extends Component {
  constructor() {
    super({
      tag: "section",
      className: "game-info",
    });
    this.moves = span("game-info__moves");
    this.pairs = span("game-info__pairs");
    this.append(
      div("game-info__item", this.moves),
      div("game-info__item", this.pairs),
    );
    this.update({
      moves: 0,
      matchedPairs: 0
    });
  }

  update({ moves, matchedPairs }) {
    this.moves.setTextContent(`Moves: ${moves}`);
    this.pairs.setTextContent(`Pairs: ${matchedPairs} / 8`);
  }
}
