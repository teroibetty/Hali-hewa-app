function submitValue(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-input-form");
  let cityElement = document.querySelector("#input-city");
  cityElement.innerHTML = searchElement.value;
}
let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", submitValue);
