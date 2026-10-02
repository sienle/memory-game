import { Component } from "./components/Component";
import { CardComponent } from "./CardComponent";

export class GameBoard extends Component {
  constructor({ cards, onCardClick }) {
    super({
      tag: "main",
      className: "game-board",
    });

    this.cards = cards;
    this.onCardClick = onCardClick;

    this.createCards();
  }

  createCards() {
    this.cards.forEach((card) => {
      const cardComponent = new CardComponent({
        card,
        onClick: this.onCardClick,
      });

      this.append(cardComponent);
    });
  }
}
