const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
    const cityName = cityInput.value;
    if (cityName) {
        fetchWeather(cityName);
    }
});

function fetchWeather(city) {
    const apiKey = `8b1d9a6688a497f7a0f8c6e8cb9bb014`
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const weatherHtml = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
            weatherInfo.innerHTML = weatherHtml;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            weatherInfo.innerHTML = 'An error occurred while fetching weather data.';
        });
}
