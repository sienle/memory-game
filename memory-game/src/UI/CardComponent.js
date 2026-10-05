import { Component } from "./components/Component";
import { div, img } from "./components/factory";

export class CardComponent extends Component {
  constructor({ card, onClick }) {
    super({
      tag: "div",
      className: "card",
    });

    this.card = card;
    this.inner = div("card__inner");
    this.front = div("card__front");
    this.back = div("card__back");
    this.frontImage = img("card__image");
    this.backImage = img("card__image");
    this.frontImage.setAttribute("src", `/${this.card.image}`);
    this.frontImage.setAttribute("alt", "Memory card");
    this.backImage.setAttribute("src", "/card-back.jpg");
    this.backImage.setAttribute("alt", "Card back");
    this.front.append(this.frontImage);
    this.back.append(this.backImage);
    this.inner.appendChildren([this.front, this.back]);
    this.append(this.inner);
    this.addListener("click", () => onClick(this.card));
    this.update();
  }

  update() {
    this.getNode().classList.toggle("card--flipped", this.card.isFlipped);
  }
}
