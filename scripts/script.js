"use strict";

const todoControl = document.querySelector(".todo-control"),
  headerInput = document.querySelector(".header-input"),
  todoList = document.querySelector(".todo-list"),
  todoCompleted = document.querySelector(".todo-completed");
const todoData =
  localStorage.getItem("todoData") === null
    ? []
    : JSON.parse(localStorage.getItem("todoData"));

const render = function () {
  todoList.textContent = "";

  todoCompleted.textContent = "";

  todoData.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML =
      '<span class="text-todo">' +
      item.value +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button >' +
      '<button class="todo-complete"></button>' +
      "</div>";
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    const btnTodoRemove = li.querySelector(".todo-remove");
    btnTodoRemove.addEventListener("click", function () {
      console.log("item: ", todoData.indexOf(item));
      todoData.splice(todoData.indexOf(item), 1);
      localStorage.setItem("todoData", JSON.stringify(todoData));
      render();
    });
    const btnTodoComplete = li.querySelector(".todo-complete");
    btnTodoComplete.addEventListener("click", function () {
      item.completed = !item.completed;
      localStorage.setItem("todoData", JSON.stringify(todoData));
      render();
    });
  });
};
todoControl.addEventListener("submit", function (event) {
  event.preventDefault();
  if (headerInput.value === "") return;
  const newTodo = {
    value: headerInput.value,
    completed: false,
  };
  todoData.push(newTodo);
  headerInput.value = "";
  localStorage.setItem("todoData", JSON.stringify(todoData));
  //console.log("localStorage: ", localStorage);
  //console.log("todoData: ", todoData);
  render();
});

// console.log(
//   'localStorage.getItem("todoData"): ',
//   localStorage.getItem("todoData")
// );

// if (localStorage.getItem("todoData") !== null)
//   todoData = JSON.parse(localStorage.getItem("todoData"));
render();
