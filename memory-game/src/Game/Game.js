import { Deck } from "./Deck";
import { GameState } from "./GameState";

export class Game {
  constructor() {
    this.deck = new Deck();
    this.state = new GameState();
  }

  flipCard(card) {
    card.flip();
    this.state.addFlippedCard(card);
    if (this.state.flippedCards.length === 2) {
      this.state.addMove();
      this.checkCardPair();
    }
  }

  checkCardPair() {
  const [firstCard, secondCard] = this.state.flippedCards;

  if (firstCard.pairId === secondCard.pairId) {
    firstCard.match();
    secondCard.match();

    this.state.addMatchedPair();
    this.state.clearFlippedCards();
  } else {
    firstCard.reset();
    secondCard.reset();

    this.state.clearFlippedCards();
  }
}
  startGame() {
    console.log("start");
  }
  newGame() {
    console.log("new game");
  }
}
