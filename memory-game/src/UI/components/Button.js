export class Button extends Component {
  constructor({ className, text, onClick }) {
    super({ tag: "button", className, text });
    if (onClick) {
      this.onClick = onClick;
      this.addListener("click", this.onClick);
    }
  }

  destroy() {
    this.removeListener("click", this.onClick);
    super.destroy();
  }
}