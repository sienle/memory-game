import { Component } from "./components/Component";
import { img } from "./components/factory";

export class CardComponent extends Component {
  constructor({ card, onClick }) {
    super({
      tag: "article",
      className: "card",
    });

    this.card = card;
    this.image = img("card__image");
    this.append(this.image);
    this.addListener("click", () => onClick(this.card));
    this.update();
  }

  update() {
    if (this.card.isFlipped) {
      this.showFront();
    } else {
      this.showBack();
    }
  }

  showFront() {
    this.image.setAttribute("src", `/${this.card.image}`);
    this.image.setAttribute("alt", "Memory card");
  }

  showBack() {
    this.image.setAttribute("src", "/card-back.jpg");
    this.image.setAttribute("alt", "Card back");
  }
}
