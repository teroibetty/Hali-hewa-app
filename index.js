function showCityWeather(response) {
  let currentTemp = document.querySelector("#temp-value");
  let temp = response.data.temperature.current;
  currentTemp.innerHTML = Math.round(temp);
  let cityElement = document.querySelector("#input-city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "7e0d4oc64c0e7t1ff280ab9035a47b70";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCityWeather);
}

function submitValue(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-input-form");
  searchCity(searchElement.value);
}
let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", submitValue);

searchCity("Sydney");
