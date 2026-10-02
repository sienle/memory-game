import { Component } from './UI/components/component';
import { UI } from './UI/UI';

export class App {
  constructor() {
    //this.Game = new Game();
    this.UI = new UI();
    //this.LeaderBoard = new LeaderBoard();
  }

  start() {
    //this.Game.startGame();
    this.UI.render();
    //this.LeaderBoard.load();
  }
}
