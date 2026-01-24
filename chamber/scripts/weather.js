const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecastList = document.querySelector("#forecast-list");

// 👉 Cambia las coordenadas por tu ciudad del chamber
const lat = 49.75;   // ejemplo: Santo Domingo
const lon = 6.64;
const apiKey = "4ab97668e1eea2234429d83d6d12c51a";

// URLs
const currentWeatherURL =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

const forecastURL =
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

// FETCH WEATHER
async function apiFetch() {
  try {
    const weatherResponse = await fetch(currentWeatherURL);
    const forecastResponse = await fetch(forecastURL);

    if (weatherResponse.ok && forecastResponse.ok) {
      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();

      displayCurrentWeather(weatherData);
      displayForecast(forecastData);
    } else {
      throw Error("Weather data not available");
    }
  } catch (error) {
    console.error(error);
  }
}

// CURRENT WEATHER
function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

// 3-DAY FORECAST
function displayForecast(data) {
  forecastList.innerHTML = "";

  // Filtramos solo el pronóstico de las 12:00 PM
  const forecastDays = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  ).slice(0, 3);

  forecastDays.forEach(day => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const temp = day.main.temp.toFixed(1);

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${dayName}:</strong> ${temp}&deg;C`;

    forecastList.appendChild(listItem);
  });
}

apiFetch();
