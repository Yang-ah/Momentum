const loginForm = document.querySelector(".login-form");
const name = document.querySelector(".name");
const loginBtn = document.querySelector(".login-btn");

const LOGIN_KEY = "username";

function login(e) {
  let username = name.value;
  e.preventDefault();
  localStorage.setItem(LOGIN_KEY, username);
}

loginForm.addEventListener("submit", login);
