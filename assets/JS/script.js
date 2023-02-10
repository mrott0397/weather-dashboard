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

const weatherApiKey = "2ed8061ff6ce1e9f57a40e972c605655";
const searchBtn = document.querySelector(".btn");
const citySelection = document.querySelector('#city');
const currentCity = document.querySelector('.card-title');
const currentTemp = document.querySelector('.temp');
const currentWind = document.querySelector('.wind');
const currentHumid = document.querySelector('.humid');


 // FOR THE DATE
var todaysDate = dayjs();
document.querySelector('#currentDay').textContent=todaysDate.format('MMM D, YYYY');
console.log(todaysDate); 
     

searchBtn.addEventListener ("click", function(){
    let histBtn = document.createElement('button')
    let listItem = document.createElement('li')
    histBtn.textContent = citySelection.value
    document.querySelector('.history').appendChild(listItem)
    listItem.appendChild(histBtn)
    histBtn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+histBtn.innerHTML+'&appid=2ed8061ff6ce1e9f57a40e972c605655&units=imperial')
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
            for (let i = 1; i < 6; i++) {
                let followingDay = data.list[i * 8];
                console.log(followingDay);
                document.querySelector('.card-title-'+i).textContent=dayjs().add(i, 'days').format('MMM D, YYYY');
                document.querySelector('.icon-'+i).src= "http://openweathermap.org/img/w/" + data.list[i * 8].weather[0].icon + ".png"
                document.querySelector('.temp-'+i).textContent=`Temp: ${data.list[i * 8].main.temp} °F`
                document.querySelector('.wind-'+i).textContent=`Wind: ${data.list[i * 8].wind.speed} MPH`
                
              }
       
    })
}) 
    })
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
            for (let i = 1; i < 6; i++) {
                let followingDay = data.list[i * 8];
                console.log(followingDay);
                document.querySelector('.card-title-'+i).textContent=dayjs().add(i, 'days').format('MMM D, YYYY');
                document.querySelector('.icon-'+i).src= "http://openweathermap.org/img/w/" + data.list[i * 8].weather[0].icon + ".png"
                document.querySelector('.temp-'+i).textContent = `Temp: ${data.list[i * 8].main.temp} °F`
                document.querySelector('.wind-'+i).textContent = `Wind: ${data.list[i * 8].wind.speed} MPH`
                document.querySelector('.humid-'+i).textContent = `Humidity: ${data.list[i * 8].main.humidity}%`
                
              }
           
       
    })
}) 
})