export class Leaderboard {
  constructor() {
    this.storageKey = "memory-game-leaderboard";
  }

  getResults() {
    const data = localStorage.getItem(this.storageKey);
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  }

  addResult(moves) {
    const results = this.getResults();
    results.push({
      moves,
      date: new Date().toISOString(),
    });

    results.sort((first, second) => {
      if (first.moves !== second.moves) {
        return first.moves - second.moves;
      }
      return new Date(first.date) - new Date(second.date);
    });

    const topResults = results.slice(0, 10);
    localStorage.setItem(this.storageKey, JSON.stringify(topResults));
  }
}
