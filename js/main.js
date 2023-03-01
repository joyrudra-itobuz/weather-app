let weatherDisplay = document.querySelector(".display-weather");
let feelsLike = document.querySelector(".feels-like");
let weatherIcon = document.querySelector(".weather-icon");

const getWeather = async () => {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=London&aqi=no"
  ).then((response) => {
    return response.json();
  });
  console.log(response);
  return response;
};

let weatherData = getWeather().then((response) => {
  console.log(response);
  console.log("Response : " + response);
  let weatherCondition = response.current.condition.text;
  console.log(weatherCondition);

  if (weatherCondition == "Overcast") {
    weatherIcon.removeAttribute("class");
    weatherIcon.classList.add("fa");
    weatherIcon.classList.add("fa-cloud");
    weatherIcon.classList.add("my-auto");
    weatherIcon.classList.add("fs-1");
    weatherIcon.classList.add("weather-icon");
  }
  if (weatherCondition == "Sunny") {
    weatherIcon.removeAttribute("class");
    weatherIcon.classList.add("fa");
    weatherIcon.classList.add("fa-sunny");
    weatherIcon.classList.add("my-auto");
    weatherIcon.classList.add("fs-1");
    weatherIcon.classList.add("weather-icon");
  }
  if (weatherCondition == "Rainy") {
    weatherIcon.removeAttribute("class");
    weatherIcon.classList.add("fa");
    weatherIcon.classList.add("fa-rain");
    weatherIcon.classList.add("my-auto");
    weatherIcon.classList.add("fs-1");
    weatherIcon.classList.add("weather-icon");
  }
  weatherDisplay.textContent = response.current.temp_f;
  feelsLike.textContent = "Feels Like " + response.current.feelslike_f;
});
