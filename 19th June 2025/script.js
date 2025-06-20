const apiKey = "706fd7d6a346a14b65f847fad1ab4232";  // Replace this according to api key that's generated
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      displayWeather(data);
      document.getElementById("error").textContent = "";
    })
    .catch(error => {
      document.getElementById("weather").classList.add("hidden");
      document.getElementById("error").textContent = error.message;
    });
}

function displayWeather(data) {
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temp").textContent = data.main.temp;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("wind").textContent = (data.wind.speed * 3.6).toFixed(1); // m/s to km/h
  document.getElementById("description").textContent = data.weather[0].main;
  document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  document.getElementById("weather").classList.remove("hidden");
}
