"use strict";
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let getHiddenNumber = function () {
  return parseInt(Math.random() * 100 + 1);
};
let getUserNumber = function () {
  let userAnswer = prompt("Угадай число от 1 до 100");
  if (userAnswer == null) return userAnswer;
  if (
    !isNumber(userAnswer) ||
    parseFloat(userAnswer) > 100 ||
    parseFloat(userAnswer) < 1
  ) {
    confirm("Введи число от 1 до 100!");
    getUserNumber();
  }
  return userAnswer;
};

function game() {
  let tryCount = 0;
  let maxTryCount = 10;
  let hiddenNumber = getHiddenNumber();
  //console.log("hiddenNumber: ", hiddenNumber);
  let guess = function () {
    tryCount++;
    let userNumber = getUserNumber();
    //console.log("userNumber: ", userNumber);
    if (userNumber === null) {
      alert("Игра окончена");
      return;
    }

    if (userNumber == hiddenNumber) {
      alert("Поздравляю, Вы угадали!!!");
      if (confirm("Хотели бы сыграть еще?")) {
        tryCount = 0;
        guess();
      }
      return;
    }

    if (tryCount >= maxTryCount) {
      alert("Вы проиграли. Правильный ответ: " + hiddenNumber);
      if (confirm("Хотели бы сыграть еще?")) {
        tryCount = 0;
        guess();
      }
      return;
    }

    if (userNumber > hiddenNumber) {
      alert(
        "Загаданное число меньше. Попробуй еще. Осталось " +
          (maxTryCount - tryCount) +
          " попытки(ок)"
      );
    } else if (userNumber < hiddenNumber) {
      alert(
        "Загаданное число больше. Попробуй еще. Осталось " +
          (maxTryCount - tryCount) +
          " попытки(ок)"
      );
    }
    guess();
  };
  guess();
}

game();
