// ## Acceptance Criteria

// ```
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// ```

// When I open the webpage and I will see a search bar for cities, current weather of location displayed, and 5 day forcast for current location
// I am able to input a city name and see the weather in that city

// const 5DayWeatherUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=0e972c605655";
// const currentWeatherApi = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=0e972c605655";
// const https://api.openweathermap.org/data/2.5/weather?q=denver&appid=2ed8061ff6ce1e9f57a40e972c605655
const weatherApiKey = "2ed8061ff6ce1e9f57a40e972c605655";
const searchBtn = document.querySelector(".btn");
const citySelection = document.querySelector('#city');
const currentCity = document.querySelector('.card-title');
const currentTemp = document.querySelector('.temp');
const currentWind = document.querySelector('.wind');
const currentHumid = document.querySelector('.humid');
const fiveDay1 = document.querySelector('.temp-1');
const windDay1 = document.querySelector('.wind-1');
// eventListener for search button
    // function that pulls weather API for city that was entered
    // fetch?
// displays info from API to page
    // current date and time weather above 5 day forcast weather

searchBtn.addEventListener ("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citySelection.value+'&appid=2ed8061ff6ce1e9f57a40e972c605655&units=imperial')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        currentCity.textContent=data.name
        currentTemp.textContent=`Temp: ${data.main.temp} °F`
        currentWind.textContent=`Wind: ${data.wind.speed} MPH`
        currentHumid.textContent=`Humidity: ${data.main.humidity}%`





        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${weatherApiKey}&units=imperial`)
        .then(res=>res.json())
        .then(data=>{
            for (let i = 0; i < 5; i++) {
                let followingDay = data.list[i * 8];
                console.log(followingDay);
                // fiveDay1.textContent=`Temp: ${data[1].main.temp} °F`
                // currentWind.textContent=`Wind: ${data.wind.speed} MPH`
                // currentHumid.textContent=`Humidity: ${data.main.humidity}%`
              }
            // const fiveDayForcast = data.list.slice(1, 5);
            // fiveDayForcast.forEach((day, index) => {
            //     console.log(`Day ${index + 1}: ${day.data.list[0]}`);
            // })
        // console.log(data);

        // fiveDay1.textContent=`Temp: ${data.list[0].main.temp}°F`
       
    })
}) 
})
// fetch within current fetch 