let weatherDisplay = document.querySelector(".main-temp");
let feelsLike = document.querySelector(".feels-like");
let weatherIcon = document.querySelector(".weather-icon");
let userInputLocation = document.querySelector(".user-input-location");
let getLocationBtn = document.querySelector(".get-locatiion-btn");
let weatherDetailsContainer = document.querySelector(".weather-details");
let currentLocation = document.querySelector(".location-current");
let inputContainer = document.querySelector(".location-input-area");
let currentWeatherIcon = document.querySelector(".current-weather-icon");

const getWeather = async () => {
  let location =
    "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=" +
    userInputLocation.value +
    "&aqi=no";
  console.log(location);

  // "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=Kolkata&aqi=no";
  const response = await fetch(location).then((response) => {
    return response.json();
  });
  console.log(response);
  return response;
};

const getWeatherinfo = () => {
  userInputLocation.value = userInputLocation.value;
  getWeather().then((response) => {
    console.log(response);

    let weatherCondition = response.current.condition.text;
    console.log(weatherCondition);

    if (weatherCondition == "Overcast") {
      weatherIcon = document.querySelector(".overcast-icon");
      console.log(weatherIcon);
      weatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon = weatherIcon;
    } else if (weatherCondition == "Sunny") {
      weatherIcon = document.querySelector(".sunny-icon");
      console.log(weatherIcon);
      weatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon = weatherIcon;
    } else if (weatherCondition == "Rainy") {
      weatherIcon = document.querySelector(".cloudy");
      console.log(weatherIcon);
      weatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon = weatherIcon;
    } else if (weatherCondition == "Partly cloudy") {
      weatherIcon = document.querySelector(".cloudy-icon");
      console.log(weatherIcon);
      weatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon = weatherIcon;
    } else if (weatherCondition == "Clear") {
      weatherIcon = document.querySelector(".clear-icon");
      console.log(weatherIcon);
      weatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon = weatherIcon;
    } else {
      console.log("called!");
      weatherIcon = document.querySelector(".clear-icon");
      console.log(weatherIcon);
      weatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon.classList.toggle("weather-icon-hidden");
      currentWeatherIcon = weatherIcon;
    }
    weatherDisplay.textContent = response.current.temp_f;
    feelsLike.textContent = "Feels " + response.current.feelslike_f;
  });
};
