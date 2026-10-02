import { Component } from "./Component";
import { img } from "./factory";

export class CardComponent extends Component {
  constructor({ card, onClick }) {
    super({
      tag: "article",
      className: "card",
    });

    this.card = card;

    this.image = img("card__image");
    this.image.setAttribute("src", `/${card.image}`);
    this.image.setAttribute("alt", "Memory card");

    this.append(this.image);

    this.addListener("click", () => onClick(this.card));
  }
}
