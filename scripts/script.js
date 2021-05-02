"use strict";

class Todo {
  constructor(form, input, todoList, todoCompleted, todoItem) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoItem = document.querySelectorAll(todoItem);
    this.todoData = new Map(
      localStorage.getItem("toDoList") === null
        ? []
        : JSON.parse(localStorage.getItem("toDoList"))
    );
  }

  addToStorage() {
    localStorage.setItem("toDoList", JSON.stringify([...this.todoData]));
  }
  render() {
    this.todoList.textContent = "";
    this.todoCompleted.textContent = "";
    this.todoData.forEach(this.createItem, this);
    this.todoItem = document.querySelectorAll(".todo-item");
    this.todoItem.forEach(this.handler, this);
    this.addToStorage();
  }

  createItem(todo) {
    const li = document.createElement("li");
    //console.log("li: ", li);
    li.classList.add("todo-item");
    li.key = todo.key;
    li.insertAdjacentHTML(
      "beforeend",
      `<span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>`
    );

    if (todo.completed) {
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    }
  }
  addTodo(e) {
    e.preventDefault();
    if (this.input.value.trim()) {
      const newTodo = {
        value: this.input.value,
        completed: false,
        key: this.generateKey(),
      };
      this.todoData.set(newTodo.key, newTodo);
      this.render();
    } else {
      alert("Пустое дело ввести нельзя!!!");
    }
    this.input.value = "";
    //console.log(this);
  }

  generateKey() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  deleteItem(item) {
    let elem = this.todoData.get(item.key);
    console.log("elem: ", elem);
    this.todoData.delete(elem.key);
    this.render();
  }

  completedItem(item) {
    let elem = this.todoData.get(item.key);
    console.log("elem: ", elem);
    elem.completed = !elem.completed;
    localStorage.setItem("toDoList", JSON.stringify([...this.todoData]));
    this.render();
  }

  handler(item) {
    item.addEventListener("click", (event) => {
      console.log("item: ", item);
      let target = event.target;

      if (!target.matches(".todo-remove, .todo-complete")) {
        console.log("target: ", item);
        return;
      }
      if (target.matches(".todo-remove")) {
        this.deleteItem(item);
      } else if (target.matches(".todo-complete")) {
        this.completedItem(item);

        //console.log("target: ", target);
      }
    });
    //event.preventDefault();
    //

    // });
  }

  init() {
    this.form.addEventListener("submit", this.addTodo.bind(this));
    this.render();
    //this.handler();
  }
}

const todo = new Todo(
  ".todo-control",
  ".header-input",
  ".todo-list",
  ".todo-completed",
  ".todo-item"
);

todo.init();
