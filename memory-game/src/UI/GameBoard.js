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
    this.cardComponents = [];
    this.createCards();
  }

  createCards() {
    this.cards.forEach((card) => {
      const cardComponent = new CardComponent({
        card,
        onClick: this.onCardClick,
      });

      this.cardComponents.push(cardComponent);
      this.append(cardComponent);
    });
  }

  updateCard(card) {
    const cardComponent = this.cardComponents.find(
      (component) => component.card === card,
    );

    cardComponent.update();
  }

  reset(cards) {
    this.destroyChildren();
    this.cards = cards;
    this.cardComponents = [];
    this.createCards();
  }
}
