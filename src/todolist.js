const todoForm = document.querySelector(".todolist-form");
const todoInput = document.querySelector(".todo-innput");
const todoUl = document.querySelector(".todolist-ul");
const TODO_KEY = "todo";
const todoBtn = document.querySelector(".todolist-btn");

let todoList = [];

const saveTodo = (todo) => localStorage.setItem(TODO_KEY, JSON.stringify(todo));
const displayTodo = (newTodoObj) => {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const div = document.createElement("div");
  div.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";

  todoUl.appendChild(li);
  li.appendChild(div);
  li.appendChild(button);
};

const handleSubmit = (e) => {
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  e.preventDefault();
  saveTodo();
  todoList.push(newTodo);
  todoInput.value = "";
  displayTodo(newTodoObj);
};

if (localStorage.getItem("username") === null) {
  todoForm.classList.add("hidden");
} else {
  todoForm.classList.remove("hidden");
  todoForm.classList.add("flex");
  todoForm.addEventListener("submit", handleSubmit);
}

todoBtn.addEventListener("click", activeUl);

function activeUl(e) {
  e.preventDefault();
  todoUl.classList.toggle("hidden");
}
