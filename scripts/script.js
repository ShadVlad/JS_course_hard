"use strict";
const color = document.getElementById("color");
const btnNewColor = document.getElementById("change");

const changeColor = function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let colorValue = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  console.log("colorValue: ", colorValue);
  color.innerHTML = colorValue;
  document.body.style.backgroundColor = colorValue;
  //console.log("body: ", body);
};

btnNewColor.addEventListener("click", changeColor);

//const dayOfWeek = document.getElementById("dayOfWeek"); // Получаем div куда всё будем вставлять
