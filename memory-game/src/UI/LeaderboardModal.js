import { Modal } from "./components/Modal";
import { div, h2, p, button, span } from "./components/factory";

export class LeaderboardModal extends Modal {
  constructor() {
    const content = div("modal__content");
    super({
      content,
    });

    this.content = content;
    this.title = h2("modal__title", "Таблица лидеров");
    this.results = div("leaderboard");
    this.closeButton = button("modal__button", "Закрыть", () => this.close());
    this.content.appendChildren([this.title, this.results, this.closeButton]);
  }

  show(results) {
    this.renderResults(results);
    this.open();
  }

  renderResults(results) {
    this.results.destroyChildren();
    if (results.length === 0) {
      this.results.append(p("leaderboard__empty", "Пока нет результатов"));
      return;
    }
    results.forEach((result, index) => {
      const row = div(
        "leaderboard__row",
        span("leaderboard__place", `${index + 1})`),
        span("leaderboard__moves", `Количество ходов: ${result.moves}`),
        span("leaderboard__date", `Дата: ${this.formatDate(result.date)}`),
      );
      this.results.append(row);
    });
  }

  formatDate(date) {
    const resultDate = new Date(date);
    return resultDate.toLocaleDateString("ru-RU");
  }
}
