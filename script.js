/*## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city*/

var apiKey = "d1e2d0763204896fd894698f5c6e27ee";
var today = moment().format('L');
var searchHistoryList = [];

// function for current condition
function currentCondition(city) {

    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function(cityWeatherResponse) {
        console.log(cityWeatherResponse);
    

        $("#weatherContent").css("display", "block");
        $("#cityDetail").empty();

        var iconCode = cityWeatherResponse.weather[0].icon;
        var iconUrl = 'https://openweathermap.org/img/w/${iconCode}.png';
    })


        /* WHEN I view current weather conditions for that city
        THEN I am presented with the city name
        the date
        an icon representation of weather conditions
        the temperature
        the humidity
        the wind speed*/
    
    var currentCity = $(`
        <h2 id="currentCity">
            ${cityWeatherResponse.name} ${today} <img src="${iconURL}" alt="${cityWeatherResponse.weather[0].description}" />
        </h2>
        <p>Temperature:${cityWeatherResponse.main.temp} °F</p>
        <p>Humidity: ${cityWeatherResponse.main.humidity}\%</p>
        <p>Wind Speed: ${cityWeatherResponse.wind.speed} MPH</p>
    `);   

    $("#cityDetail").append(currentCity);
    




































/* WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
0-2 green#3EA72D, 3-5 yellow#FFF300, 6-7 orange#F18B00, 8-10 red#E53210, 11+violet#B567A4*/













// function for future condition





// THEN I am presented with a 5-day forecast

















/*displays the date
an icon representation of weather conditions
the temperature
the humidity*/




































// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city





// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
