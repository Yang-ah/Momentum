const focusForm = document.querySelector(".focus-form");
const focusInput = document.querySelector(".focus-input");
const focusDiv = document.querySelector(".focus-div");
const focusShow = document.querySelector(".focus-show");
const focusChk = document.querySelector("#focus-check");
const focusX = document.querySelector(".focus-X");
const FOCUS_KEY = "focus";
const savedFocus = localStorage.getItem(FOCUS_KEY);

const doneFocus = () => {
  focusChk.className = "fa-regular fa-square-check";
  focusShow.classList.add("strike-text");
  focusX.classList.remove("hidden");
};

const showInput = () => {
  focusInput.classList.remove("hidden");
  focusDiv.classList.add("hidden");
  localStorage.removeItem(FOCUS_KEY);
  focusShow.classList.remove("strike-text");
  focusChk.className = "fa-regular fa-square";
};

const saveFocus = (focus) => localStorage.setItem(FOCUS_KEY, focus);

const displayFocus = (focus) => {
  focusShow.textContent = focus;
  focusInput.className = "hidden";
  focusDiv.classList.remove("hidden");
  focusDiv.classList.add("hello");
};

const submitFocus = (e) => {
  const focus = focusInput.value;
  e.preventDefault();
  saveFocus(focus);
  focusInput.value = "";
  displayFocus(focus);
};

if (savedFocus === null) {
  showInput();
} else displayFocus(savedFocus);

focusForm.addEventListener("submit", submitFocus);
focusChk.addEventListener("click", doneFocus);
focusX.addEventListener("click", showInput);
