const loginForm = document.querySelector(".login-form");
const name = document.querySelector(".name");
const loginBtn = document.querySelector(".login-btn");
const greetDiv = document.querySelector(".greet");

const LOGIN_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const savedUsername = localStorage.getItem(LOGIN_KEY);

function login(e) {
  let username = name.value;
  localStorage.setItem(LOGIN_KEY, username);
  greeting(username);
}

function greeting(username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetDiv.classList.remove(HIDDEN_CLASSNAME);
  greetDiv.textContent = `Have a good day, ${username}`;
}

// main
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greetDiv.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", login);
} else {
  greeting(savedUsername);
}

loginForm.addEventListener("submit", login);
