import { Component } from "./Component";

export class Modal extends Component {
  constructor({ content }) {
    super({
      tag: "div",
      className: "modal",
    });

    this.content = content;
    this.append(content);

    this.addListener("click", (event) => {
      if (event.target === this.getNode()) {
        this.close();
      }
    });

    this.handleEscape = (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    };
  }

  open() {
    this.getNode().classList.add("modal--open");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", this.handleEscape);
  }

  close() {
    this.getNode().classList.remove("modal--open");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", this.handleEscape);
  }
}
