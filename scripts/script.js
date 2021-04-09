"use strict";
const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const dayOfWeek = document.getElementById("dayOfWeek"); // Получаем div куда всё будем вставлять
const todayDay = new Date();

week.forEach((item, i) => {
  // Для каждого дня недели создаем блок
  let newDay = document.createElement("p");
  // если текущий день для привязки стилей
  if (i == todayDay.getDay() - 1) {
    newDay.classList.add("today");
  }
  // Если выходные то
  if (item == "Суббота" || item == "Воскресенье") {
    newDay.classList.add("weekend");
  }
  newDay.textContent = week[i];

  dayOfWeek.appendChild(newDay);
});
