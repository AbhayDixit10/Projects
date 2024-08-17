const apiKey = "6c449ad278bc7f5838bd57a81e95e315";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#searchImg img");
const weatherIcon = document.querySelector("#weatherIcon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    // console.log(data);

    if (response.status == 404) {
        alert("Invalid City Name");
    } else {
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + `°C`;
        document.querySelector("#wind").innerHTML = data.wind.speed + `Km/h`;
        document.querySelector("#humidity").innerHTML = data.main.humidity + `%`;
        console.log(data.weather[0].main);


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

    }


}

searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
});
