const todoForm = document.querySelector(".todolist-form");
const todoInput = document.querySelector(".todo-input");
const todoUl = document.querySelector(".todolist-ul");
const todoLi = document.querySelector(".todolist-li");
const todoBtn = document.querySelector(".todolist-btn");
const addBtn = document.querySelector(".todolist-add-btn");

let todoList = [];
const TODO_KEY = "todo";
const savedList = localStorage.getItem(TODO_KEY);

function activeUl(e) {
  e.preventDefault();
  todoUl.classList.toggle("hidden");
}

const saveToDos = () =>
  localStorage.setItem(TODO_KEY, JSON.stringify(todoList));

function deleteToDo(e) {
  e.preventDefault();
  const li = e.target.parentElement;
  li.remove();
  todoList = todoList.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

const chkTodo = (e) => {
  e.preventDefault();
  console.log(e);
};

const displayTodo = (todoOBJ) => {
  const createLi = document.createElement("li");
  createLi.id = todoOBJ.id;
  createLi.className = "todolist-li";
  const text = document.createElement("span");
  text.textContent = todoOBJ.text;

  const createXBtn = document.createElement("button");
  createXBtn.textContent = "❌";
  createXBtn.className = "todolist-xbtn";

  const createChkBtn = document.createElement("button");
  createChkBtn.className = "todo_sqaure";
  createChkBtn.innerHTML = `<i class="fa-regular fa-square"></i>`;

  todoUl.appendChild(createLi);
  createLi.appendChild(createChkBtn);
  createLi.appendChild(text);
  createLi.appendChild(createXBtn);

  createXBtn.addEventListener("click", deleteToDo);
  createChkBtn.addEventListener("click", chkTodo);
};

function sendTodo(e) {
  e.preventDefault();
  const todo = todoInput.value;
  if (todoInput.value === "") {
    alert("please write to do😢");
  } else {
    const todoOBJ = {
      text: todo,
      id: Date.now(),
    };

    todoList.push(todoOBJ);
    saveToDos();
    displayTodo(todoOBJ);
    todoInput.value = "";
  }
}

const deleteLi = () => {
  chkBox.classList.add("fa-square-check");
};

/* event listener */

todoBtn.addEventListener("click", activeUl);
todoForm.addEventListener("submit", sendTodo);

if (savedList !== null) {
  const parsedList = JSON.parse(savedList);
  todoList = parsedList;
  todoList.forEach(displayTodo);
}
