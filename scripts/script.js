"use strict";

function DomElement(selector, styles) {
  this.selector = selector;
  styles = styles || {};
  this.height = styles.height;
  this.width = styles.width;
  this.bg = styles.bg;
  this.position = styles.position;
}

DomElement.prototype.createEl = function () {
  let newElement;
  if (this.selector[0] === ".") {
    newElement = document.createElement("div");
    newElement.classList.add(this.selector.slice(1));
  } else {
    newElement = document.createElement("p");
    newElement.setAttribute("id", this.selector.slice(1));
  }
  console.log("newElement: ", newElement);
  const divNew = document.getElementsByTagName("body")[0];
  console.log("divNew: ", divNew);
  //newElement.innerHTML = "bgiuypmhpiohniphm,      puiohpjn        ouhnpuiohn";
  newElement.style.cssText =
    "height: " +
    this.height +
    "; width: " +
    this.width +
    "; background-color: " +
    this.bg +
    "; position: " +
    this.position;
  //console.log("this.styles: ", newElement.style.cssText);
  divNew.appendChild(newElement);
  return newElement;
};
let styles = {
  height: "100px",
  width: "100px",
  bg: "green",
  position: "absolute",
};
DomElement.prototype.keyEvent = function (event) {
  //console.log("==========>>>>>");
  let left = square.style.left;
  left = +left.substring(0, left.length - 2);
  let top = square.style.top;
  top = +top.substring(0, top.length - 2);

  switch (event.key) {
    case "ArrowLeft":
      if (left >= 10) square.style.left = left - 10 + "px";
      break;
    case "ArrowRight":
      if (left <= 1000) square.style.left = left + 10 + "px";
      break;
    case "ArrowUp":
      if (top >= 10) square.style.top = top - 10 + "px";
      break;
    case "ArrowDown":
      if (top <= 590) square.style.top = top + 10 + "px";
      break;
  }
};
let square;
let domElem = new DomElement(".block", styles);
//console.log("domElem: ", domElem);
document.addEventListener("DOMContentLoaded", function () {
  square = domElem.createEl();
});

//console.log("newElem: ", square);

document.addEventListener("keydown", domElem.keyEvent);
console.log("domElem.keyEvent: ", domElem.keyEvent);
