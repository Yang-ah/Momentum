const todoForm = document.querySelector(".todolist-form");
const todoInput = document.querySelector(".todo-innput");
const TODO_KEY = "todo";
let todoList = [];

const saveTodo = (todo) => localStorage.setItem(TODO_KEY, JSON.stringify(todo));
const displayTodo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
};

const handleSubmit = (e) => {
  const newTodo = todoInput.value;
  e.preventDefault();
  saveTodo();
  todoList.push(newTodo);
  todoInput.value = "";
  displayTodo(newTodo);
};

todoForm.addEventListener("submit", handleSubmit);
