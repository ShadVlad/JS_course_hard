/* let num = 266219;

let numberOfString = num.toString();
let lenght = numberOfString.length;
let product = 1;
for (var i = 0; i < lenght; i++) product *= numberOfString.charAt(i);

console.log("Произведение цифр числа " + num + " равно " + product);
let power3OfProduct = product ** 3;
let power3OfProductStr = power3OfProduct.toString();
console.log(product + " в степени 3  равно " + power3OfProduct);

console.log(
  "Первые цифры " +
    power3OfProduct +
    " равны " +
    power3OfProductStr.toString().charAt(0) +
    " и " +
    power3OfProductStr.toString().charAt(1)
);

let lang = "ru";
let daysOfWeek = [];
let daysOfWeekRu = ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"];
let daysOfWeekEn = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

if ((lang = "ru")) {
  daysOfWeek = daysOfWeekRu;
} else {
  daysOfWeek = daysOfWeekEn;
}
console.log("~ daysOfWeek if: ", daysOfWeek);

switch (lang) {
  case "ru":
    daysOfWeek = daysOfWeekRu;

    break;
  case "en":
    daysOfWeek = daysOfWeekEn;
    break;
}
console.log("~ daysOfWeek switch: ", daysOfWeek);

daysOfWeek["ru"] = daysOfWeekRu;
daysOfWeek["en"] = daysOfWeekEn;
console.log("~ daysOfWeek arrays : ", daysOfWeek[lang]);

let namePerson = "Сергей";

console.log(
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Максим"
    ? "Преподаватель"
    : "Студент"
);
 */

//let stringIn = "    vvjlbli  kbibob;u   ";
// function stringCut(str) {
//   if (typeof str !== "string") {
//     return "Аргумент не строка";
//   } else {
//     str = str.trim();
//     return str.length > 30 ? str.slice(0, 30) + "..." : str;
//   }
// }

// console.log(stringCut("    vvjlbli  kbibob;u   "));
// console.log(stringCut(1754));
// console.log(
//   stringCut(
//     "    vvjlbli  kbibobu ubibibb rfd6yft yg8g87y9898u98un 87y8878y887   "
//   )
// );

let arr = [
  "23456",
  "1233333",
  "466666789",
  "5617890",
  "2567890",
  "5678765890",
  "4561237890",
];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) == 2 || arr[i].charAt(0) == 4) {
    console.log(arr[i]);
  }
}

let prime = [1, 2];
console.log(" : " + prime);
for (let i = 3; i <= 100; i++) {
  let div = true;
  for (let j = 1; j < prime.length; j++) {
    if (i % prime[j] == 0) div = false;
  }
  if (div) {
    prime.push(i);
    console.log(i + " - простое,  делители этого числа: " + 1 + " и " + i);
  }
}
