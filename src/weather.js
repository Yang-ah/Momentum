const city = document.querySelector(".weather-loca");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".weather-temp");

function onLoad(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const API_KEY = "f9d838bbe7cf2148fef4b5b40318c0b2";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      if (data.weather[0].main == "Clear") {
        weatherIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
      } else if (data.weather[0].main == "Clouds") {
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
      } else {
        weatherIcon.innerHTML = `${data.weather[0].main}`;
      }
      temperature.innerText = ` ${Math.floor(data.main.temp)}°`;
    });
}

function failLoad() {
  console.log("Loation loaded failed😢");
}

navigator.geolocation.getCurrentPosition(onLoad, failLoad);
