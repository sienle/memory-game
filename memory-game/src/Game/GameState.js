export class GameState {
  constructor() {
    this.moves = 0;
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.status = 'ready';
  }

  addMove() {
    this.moves += 1;
  }

  reset() {
    this.moves = 0;
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.status = 'ready';
  }

  addFlippedCard(card) {
    this.flippedCards.push(card);
  }

  clearFlippedCards() {
    this.flippedCards = [];
  }

  addMatchedPair() {
  this.matchedPairs += 1;
}
}