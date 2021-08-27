
// api.openweathermap.org/data/2.5/weather?q={city}&appid=750ea5847bbdbf22dec14f20d97e9f2e

async function getWeatherData() {
    const tempBox = document.querySelector(".temp");
    const skyBox = document.querySelector(".sky")
    const inputField = document.querySelector(".input-field");
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=imperial&appid=750ea5847bbdbf22dec14f20d97e9f2e`)
    const jsonWeatherData = await weatherData.json();
    const temp = jsonWeatherData.main.temp;
    const skyDescription = jsonWeatherData.weather[0].main;
    tempBox.innerHTML = (`The temperature outside is ${temp}\u00B0F`)
    skyBox.innerHTML = (`The sky is currently ${skyDescription}`)
    




    

}

searchButton = document.querySelector(".search-button")
searchButton.addEventListener("click", () => getWeatherData())