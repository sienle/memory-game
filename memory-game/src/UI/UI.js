import { Component } from './components/component';

export class UI {
  constructor() {

  }

  render() {
    document.body.append(new Component({
      className: "wrapper",
      text: "Memory game"
    }).getNode());
  }
}