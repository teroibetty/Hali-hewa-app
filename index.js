let apiKey = "7e0d4oc64c0e7t1ff280ab9035a47b70";
let url =
  "https://api.shecodes.io/weather/v1/current?query={query}&key={key}&units=metric"

function submitValue(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-input-form");
  let cityElement = document.querySelector("#input-city");
  cityElement.innerHTML = searchElement.value;
}
let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", submitValue);
