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
    weatherIcon.classList.add("fa", "fa-cloud", "my-auto", "weather-icon");
    // weatherIcon.classList.add("fa-cloud");
    // weatherIcon.classList.add("my-auto");
    // weatherIcon.classList.add("fs-1");
    // weatherIcon.classList.add("weather-icon");
  } else if (weatherCondition == "Sunny") {
    weatherIcon.removeAttribute("class");
    weatherIcon.classList.add("fa", "fa-sun", "my-auto", "weather-icon");
  } else if (weatherCondition == "Rainy") {
    weatherIcon.removeAttribute("class");
    weatherIcon.classList.add("fa", "fa-rain", "my-auto", "weather-icon");
  } else if (weatherCondition == "Partly cloudy") {
    weatherIcon.removeAttribute("class");
    weatherIcon.classList.add(
      "fa",
      "fa-cloud-sun",
      "my-auto",
      "weather-icon",
      "text-"
    );
  } else {
    console.log("called!");
    weatherIcon.removeAttribute("class");
    weatherIcon.classList.add(
      "fa",
      "fa-sun",
      "my-auto",
      "weather-icon",
      "text-warning"
    );
  }
  weatherDisplay.textContent = response.current.temp_f;
  feelsLike.textContent = "Feels Like " + response.current.feelslike_f;
});
