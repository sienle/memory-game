import { Component } from "./Component.js";
import { Button } from "./Button.js";

const classes = (className) =>
  Array.isArray(className) ? className.join(" ") : className;

const create = (tag, className = "", text = "", ...children) =>
  new Component(
    {
      tag,
      className: classes(className),
      text,
    },
    ...children,
  );

export const div = (className = "", ...children) =>
  create("div", className, "", ...children);

export const section = (className = "", ...children) =>
  create("section", className, "", ...children);

export const header = (className = "", ...children) =>
  create("header", className, "", ...children);

export const main = (className = "", ...children) =>
  create("main", className, "", ...children);

export const footer = (className = "", ...children) =>
  create("footer", className, "", ...children);

export const nav = (className = "", ...children) =>
  create("nav", className, "", ...children);

export const ul = (className = "", ...children) =>
  create("ul", className, "", ...children);

export const ol = (className = "", ...children) =>
  create("ol", className, "", ...children);

export const li = (className = "", ...children) =>
  create("li", className, "", ...children);

export const article = (className = "", ...children) =>
  create("article", className, "", ...children);

export const p = (className = "", text = "") => create("p", className, text);

export const span = (className = "", text = "") =>
  create("span", className, text);

export const h1 = (className = "", text = "") => create("h1", className, text);

export const h2 = (className = "", text = "") => create("h2", className, text);

export const h3 = (className = "", text = "") => create("h3", className, text);

export const a = (className = "", text = "") => create("a", className, text);

export const label = (className = "", text = "", ...children) =>
  create("label", className, text, ...children);

export const form = (className = "", ...children) =>
  create("form", className, "", ...children);

export const input = (className = "") => create("input", className);

export const img = (className = "") => create("img", className);

export const button = (className, text, onClick) =>
  new Button({
    className: classes(className),
    text,
    onClick,
  });
