export class Card {
  constructor(id, pairId, image) {
    this.id = id;
    this.pairId = pairId;
    this.image = image;
    this.isFlipped = false;
    this.isMatched = false;
  }

  flip() {
    this.isFlipped = true;
  }

  match() {
    this.isMatched = true;
  }

  reset() {
    this.isFlipped = false;
    this.isMatched = false;
  }
}