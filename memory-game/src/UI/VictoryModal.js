import { Modal } from "./components/Modal";
import { div, h2, p, button } from "./components/factory";

export class VictoryModal extends Modal {
  constructor({ onNewGame }) {
    const content = div("modal__content victory__content");

    super({
      content,
    });

    this.moves = p("modal__moves");
    const newGameButton = button("modal__button", "Новая игра", () => {
      this.close();
      onNewGame();
    });
    const closeButton = button("modal__button", "Закрыть", () => this.close());

    content.appendChildren([
      h2("modal__title", "Победа!"),
      this.moves,
      newGameButton,
      closeButton,
    ]);
  }

  show(moves) {
    this.moves.setTextContent(`Количество ходов: ${moves}`);
    this.open();
  }
}
