"use strict";

function game() {
  let tryCount = 0;
  let maxTryCount = 10;
  let hiddenNumber = parseInt(Math.random() * 100 + 1);
  console.log("hiddenNumber: ", hiddenNumber);

  let guess = function () {
    let userAnswer = prompt("Угадай число от 1 до 100");
    console.log("userAnswer: ", userAnswer);
    if (userAnswer == null) {
      alert("Игра окончена");
      return;
    }

    if (userAnswer > 100 || userAnswer < 1) {
      alert("Введи число от 1 до 100!");
      return guess();
    }

    tryCount++;
    console.log("tryCount: ", tryCount);

    if (userAnswer == hiddenNumber) {
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

    if (userAnswer > hiddenNumber) {
      alert(
        "Загаданное число меньше. Попробуй еще. Осталось " +
          (maxTryCount - tryCount) +
          " попытки(ок)"
      );
    } else if (userAnswer < hiddenNumber) {
      alert(
        "Загаданное число больше. Попробуй еще. Осталось " +
          (maxTryCount - tryCount) +
          " попытки(ок)"
      );
    }
    return guess();
  };
  guess();
}

game();
