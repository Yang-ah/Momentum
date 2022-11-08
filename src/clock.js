const clock = document.querySelector(".clock");

function displayTime() {
  const newTime = new Date();
  const hour = String(newTime.getHours()).padStart(2, "0");
  const minute = String(newTime.getMinutes()).padStart(2, "0");

  clock.textContent = `${hour}:${minute}`;
}

displayTime();
setInterval(displayTime, 1000);
