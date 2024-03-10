//Fecha actual

const date = new Date();

const currentDate = document.querySelector(".date p");
currentDate.textContent =
date.toString().split(" ").slice(0, 4).join(" ");

//Seleccionar elementos del DOM

const searchButton = 
document.querySelector(".location button");
const weatherDetails =
document.querySelector(".weather-details");
const weather = 
document.querySelector(".weather");
const image =
document.querySelector(".weather img");

//Crear un Event Listener para el botón search

searchButton.addEventListener("click", function () {
    const cityInput = document.querySelector(".location input");
    
    const city = cityInput.value;
    const APIKEY = "ac0ff3dd3f60c9147c122bf187d3b869";
    const BASE_URL = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
  
    fetch(BASE_URL)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.cod === 200) {
          const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
          image.src = iconUrl;
  
          const description = document.querySelector(".description");
          const temp = document.querySelector(".temp");
          const cityName = document.querySelector(".cityName");
          const windSpeed = document.querySelector(".speed");
          const humidity = document.getElementById("humidity");
          const feeeling = document.getElementById("feeeling");
  
          cityName.textContent = data.name;
          description.textContent = data.weather[0].description;
          const roundedCelsius = Math.round(data.main.temp / 18.14);
          temp.textContent = `${roundedCelsius}°C `;
  
          windSpeed.textContent = `${data.wind.speed} m/s`;
          humidity.textContent = `${data.main["humidity"]} %`;
          feeeling.textContent = `${Math.round(
            data.main["feels_like"] / 18.14
          )} °C`;
  
          weatherDetails.style.visibility = "visible";
          weather.style.visibility = "visible";
          cityInput.value = " ";
        } else {
          weather.innerHTML = "Ciudad No encontrada";
          weather.style.visibility = "visible";
          weatherDetails.style.visibility = "hidden";
  
        
           cityInput.value = " ";
        }
      });
  });
  

  // Validación de input

function validarCity(city){
  if (city.length >= 50){
    return 'debes ingresar un nombre más corto'
  }else if (city.length ===0){
    return 'Este campo debe tener al menos 1 caracter'
  }else if(!/^[a-z]+$/i.test(city)){
    return "El campo nombre solo acepta letras"
}
  else {
    return ""
  }};
   