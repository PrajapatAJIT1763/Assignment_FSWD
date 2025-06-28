const apiKey = "706fd7d6a346a14b65f847fad1ab4232"; // Replace with your actual API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const error = document.getElementById("error");
  const weatherCard = document.getElementById("weatherData");

  if (!city) {
    error.textContent = "Please enter a city name.";
    weatherCard.classList.add("hidden");
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("temperature").textContent = data.main.temp;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("windSpeed").textContent = data.wind.speed;

    const iconCode = data.weather[0].icon;
    document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherCard.classList.remove("hidden");
    error.textContent = "";
  } catch (err) {
    weatherCard.classList.add("hidden");
    error.textContent = `Error: ${err.message}`;
  }
}
