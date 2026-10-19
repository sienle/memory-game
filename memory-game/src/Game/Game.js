import { Deck } from "./Deck";
import { GameState } from "./GameState";

export class Game {
  constructor(
    cardData,
    pairCount,
    onCardsUpdate,
    onStateUpdate,
    onGameFinished,
    onCheckingChange,
  ) {
    this.deck = new Deck(cardData, pairCount);
    this.state = new GameState();
    this.onCardsUpdate = onCardsUpdate;
    this.onStateUpdate = onStateUpdate;
    this.onGameFinished = onGameFinished;
    this.onCheckingChange = onCheckingChange;
    this.pairTimeout = null;
  }

  flipCard(card) {
    if (this.state.status !== "playing") return;
    if (card.isFlipped) return;
    if (this.state.flippedCards.length === 2) return;
    card.flip();
    this.onCardsUpdate([card]);
    this.state.addFlippedCard(card);
    if (this.state.flippedCards.length === 2) {
      this.onCheckingChange(true);
      this.state.addMove();
      this.onStateUpdate({
        moves: this.state.moves,
        matchedPairs: this.state.matchedPairs,
      });
      this.checkCardPair();
    }
    return true;
  }

  checkCardPair() {
    const [firstCard, secondCard] = this.state.flippedCards;

    if (firstCard.pairId === secondCard.pairId) {
      firstCard.match();
      secondCard.match();

      this.state.addMatchedPair();
      this.onStateUpdate({
        moves: this.state.moves,
        matchedPairs: this.state.matchedPairs,
      });
      if (this.state.matchedPairs === this.deck.pairCount) {
        this.state.status = "finished";
        this.onGameFinished({
          moves: this.state.moves,
        });
      }
      this.state.clearFlippedCards();
      this.onCardsUpdate([firstCard, secondCard]);
      this.onCheckingChange(false);
    } else {
      this.pairTimeout = setTimeout(() => {
        firstCard.reset();
        secondCard.reset();
        this.state.clearFlippedCards();
        this.onCardsUpdate([firstCard, secondCard]);
        this.onCheckingChange(false);
      }, 1000);
    }
  }

  startGame() {
    this.state.status = "playing";
  }

  newGame() {
    if (this.pairTimeout) {
      clearTimeout(this.pairTimeout);
      this.pairTimeout = null;
    }
    this.onCheckingChange(false);
    this.state.reset();
    this.deck.reset();
    this.state.status = "playing";
    this.onStateUpdate({
      moves: this.state.moves,
      matchedPairs: this.state.matchedPairs,
    });
    return this.getCards();
  }

  getCards() {
    return this.deck.cards;
  }
}
