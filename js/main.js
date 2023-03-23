const mainTemp = document.querySelector(".main-temp");
const tempFeelsLike = document.querySelector(".feels-like");
let weatherIcon = document.querySelector(".weather-icon");
const userInputLocation = document.querySelector(".user-input-location");
const getLocationBtn = document.querySelector(".get-locatiion-btn");
const weatherDetailsContainer = document.querySelector(".weather-details");
const currentLocation = document.querySelector(".location-current");
const inputContainer = document.querySelector(".location-input-area");
let currentWeatherIcon = document.querySelector(".current-weather-icon");
const dropdownList = document.querySelector(".dropdown-list");
const inputDropdown = document.querySelector(".input-dropdown");

console.log(inputDropdown);

const getWeather = async () => {
  let location = "http://127.0.0.1:8080/";

  const userLocation = userInputLocation.value;

  const response = await fetch(location)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const inputLocation = data.find(
        (findLocation) => findLocation.location === userLocation
      );
      return inputLocation;
    });

  return response;
};

const getWeatherinfo = () => {
  userInputLocation.value = userInputLocation.value;
  getWeather()
    .then((response) => {
      let weatherCondition = response.condition.text;

      if (weatherCondition === "Overcast") {
        weatherIcon = document.querySelector(".overcast-icon");
        weatherIcon.classList.toggle("weather-icon-hidden");
        currentWeatherIcon.classList.toggle("weather-icon-hidden");
        currentWeatherIcon = weatherIcon;
      } else if (weatherCondition === "Sunny") {
        weatherIcon = document.querySelector(".sunny-icon");
        weatherIcon.classList.toggle("weather-icon-hidden");
        currentWeatherIcon.classList.toggle("weather-icon-hidden");
        currentWeatherIcon = weatherIcon;
      } else if (weatherCondition === "Rainy") {
        weatherIcon = document.querySelector(".cloudy");
        weatherIcon.classList.toggle("weather-icon-hidden");
        currentWeatherIcon.classList.toggle("weather-icon-hidden");
        currentWeatherIcon = weatherIcon;
      } else if (weatherCondition === "Partly cloudy") {
        weatherIcon = document.querySelector(".cloudy-icon");
        weatherIcon.classList.toggle("weather-icon-hidden");
        currentWeatherIcon.classList.toggle("weather-icon-hidden");
        currentWeatherIcon = weatherIcon;
      } else if (weatherCondition === "Clear") {
        weatherIcon = document.querySelector(".clear-icon");
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
      mainTemp.textContent = response.tempC;
      tempFeelsLike.textContent = "Feels " + response.feelslikeC;
    })
    .catch((err) => {
      console.log(err);
    });
};

(async () => {
  let location = "http://127.0.0.1:8080/";

  const response = await fetch(location)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

  for (let i = 1; i < response.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerHTML = response[i].location;
    dropdownList.appendChild(newLi);
  }
})();

userInputLocation.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    getWeatherinfo();
  }
});

inputDropdown.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown-list-toggle");
});
inputDropdown.addEventListener("blur", () => {
  dropdownList.classList.toggle("dropdown-list-toggle");
});

function dropdownListData() {
  const items = document.querySelectorAll("#ulList li");
  for (let i = 0; i < items.length; i++) {
    items[i].onclick = function () {
      console.log(this.textContent);
      userInputLocation.value = this.innerHTML;
    };
  }
}

userInputLocation.onclick = function () {
  dropdownListData();
  getWeatherinfo();
};
