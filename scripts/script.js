let num = 266219;

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
