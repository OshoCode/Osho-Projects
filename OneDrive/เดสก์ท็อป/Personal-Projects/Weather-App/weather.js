const apiKey = "3895e260eff3f6c3ae8b5026b44281b8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";  

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    checkWeather();
});

// Removed unnecessary submit event listener

async function checkWeather(){
    const cityName = searchBox.value;
    const response = await fetch(apiUrl + '&q=' + cityName + '&appid=' + apiKey); // Fixed string concatenation
    const data = await response.json();

    if (data.cod === "404") { // Fixed response status check
        document.querySelector(".weather-box").style.display = "flex"; // Ensure the weather-box is displayed
        document.querySelector(".city").innerHTML = "City Not Found";
        document.querySelector(".temp").innerHTML = "---";
        document.querySelector(".humidity span").innerHTML = "---"; // Select span within humidity
        document.querySelector(".wind span").innerHTML = "---"; // Select span within wind
        weatherIcon.src = "error.png";
        searchBox.value = '';
    } else {
        document.querySelector(".weather-box").style.display = "flex"; // Ensure the weather-box is displayed
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity span").innerHTML = data.main.humidity + "%"; // Select span within humidity
        document.querySelector(".wind span").innerHTML = data.wind.speed + " km/h"; // Select span within wind
        searchBox.value = '';

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png"; // Fixed typo
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "snow.png";
        };
        console.log(data);
    }
};
