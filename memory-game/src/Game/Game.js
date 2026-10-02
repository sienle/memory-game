import { Deck } from "./Deck";
import { GameState } from "./GameState";

export class Game {
  constructor(cardData, pairCount, onCardsUpdate) {
    this.deck = new Deck(cardData, pairCount);
    this.state = new GameState();
    this.onCardsUpdate = onCardsUpdate;
  }

  flipCard(card) {
    if (card.isFlipped) return;
    if (this.state.flippedCards.length === 2) return;
    card.flip();
    this.onCardsUpdate([card]);
    this.state.addFlippedCard(card);
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
      this.onCardsUpdate([firstCard, secondCard]);

      this.state.addMatchedPair();
      this.state.clearFlippedCards();
    } else {
      setTimeout(() => {
        firstCard.reset();
        secondCard.reset();
        this.state.clearFlippedCards();
        this.onCardsUpdate([firstCard, secondCard]);
      }, 1000);
    }
  }

  startGame() {
    this.state.status = "playing";
  }

  newGame() {
    this.state.reset();
    this.deck.reset();
    this.state.status = "playing";
  }

  getCards() {
    return this.deck.cards;
  }
}
