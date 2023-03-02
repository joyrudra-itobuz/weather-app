let weatherDisplay = document.querySelector(".display-weather");
let feelsLike = document.querySelector(".feels-like");
let weatherIcon = document.querySelector(".weather-icon");
let userLocation = document.querySelector(".user-location");
let getLocationBtn = document.querySelector(".get-locatiion-btn");
let weatherDetailsContainer = document.querySelector(".weather-details");
let currentLocation = document.querySelector(".location-current");
let inputContainer = document.querySelector(".location-input-area");

const getWeather = async () => {
  let location =
    "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=" +
    userLocation.value +
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
  inputContainer.classList.remove("location-input-area");
  weatherDetailsContainer.classList.remove("visually-hidden");
  currentLocation.innerHTML = userLocation.value;
  getWeather().then((response) => {
    console.log(response);

    let weatherCondition = response.current.condition.text;
    console.log(weatherCondition);

    if (weatherCondition == "Overcast") {
      weatherIcon.removeAttribute("class");
      weatherIcon.classList.add("fa", "fa-cloud", "my-auto", "weather-icon");
    } else if (weatherCondition == "Sunny") {
      weatherIcon.removeAttribute("class");
      weatherIcon.classList.add("fa", "fa-sun", "my-auto", "weather-icon");
    } else if (weatherCondition == "Rainy") {
      weatherIcon.removeAttribute("class");
      weatherIcon.classList.add(
        "fa",
        "fa-cloud-rain",
        "my-auto",
        "weather-icon"
      );
    } else if (weatherCondition == "Partly cloudy") {
      weatherIcon.removeAttribute("class");
      weatherIcon.classList.add(
        "fa",
        "fa-cloud-sun",
        "my-auto",
        "weather-icon"
      );
    } else if (weatherCondition == "Clear") {
      console.log("called!");
      weatherIcon.removeAttribute("class");
      weatherIcon.classList.add(
        "fa",
        "fa-sun",
        "my-auto",
        "weather-icon",
        "text-warning"
      );
    } else {
      console.log("called!");
      weatherIcon.removeAttribute("class");
      weatherIcon.classList.add(
        "fa",
        "fa-spinner",
        "fa-spin",
        "my-auto",
        "weather-icon"
      );
    }
    userLocation.value = "";
    weatherDisplay.textContent = response.current.temp_f;
    feelsLike.textContent = "Feels Like " + response.current.feelslike_f;
  });
};
