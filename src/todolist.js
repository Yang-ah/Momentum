const todoForm = document.querySelector(".todolist-form");
const todoInput = document.querySelector(".todo-input");
const todoUl = document.querySelector(".todolist-ul");
const todoBtn = document.querySelector(".todolist-btn");
const addBtn = document.querySelector(".todolist-add-btn");

const TODO_KEY = "todo";

let todoList = [];

function activeUl(e) {
  e.preventDefault();
  todoUl.classList.toggle("hidden");
}

const saveToDos = () =>
  localStorage.setItem(TODO_KEY, JSON.stringify(todoList));

const displayTodo = (todoOBJ) => {
  const li = document.createElement("li");
  li.id = todoOBJ.id;

  const text = document.createElement("span");
  text.textContent = todoOBJ.text;

  const Xbtn = document.createElement("span");
  Xbtn.textContent = "❌";

  const chkBox = document.createElement("i");
  chkBox.className = "fa-regular fa-square";

  todoUl.appendChild(li);
  li.appendChild(chkBox);
  li.appendChild(text);
  li.appendChild(Xbtn);
};

function sendTodo(e) {
  e.preventDefault();
  const todo = todoInput.value;
  const todoOBJ = {
    text: todo,
    id: Date.now(),
  };
  todoList.push(todoOBJ);
  saveToDos();
  displayTodo(todoOBJ);
  todoInput.value = "";
}

/* event listener */

todoBtn.addEventListener("click", activeUl);

addBtn.addEventListener("click", sendTodo);
