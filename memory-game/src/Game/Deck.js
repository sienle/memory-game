import { Card } from './Card';

export class Deck {
  constructor(cardData, pairCount) {
    this.cardData = cardData;
    this.pairCount = pairCount;
    this.cards = [];
    this.generateCards();
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  getCard(id) {
    return this.cards.find((item) => item.id === id);
  }

  generateCards() {
    const copy = this.cardData.slice();
    this.shuffle(copy);
    for (let i = 0; i < this.pairCount; i += 1) {
      const data = copy[i];
      this.cards.push(new Card(this.cards.length + 1, data.id, data.image));
      this.cards.push(new Card(this.cards.length + 1, data.id, data.image));
    }
    this.shuffle(this.cards);
  }

  reset() {
    this.cards = [];
    this.generateCards();
  }
}
