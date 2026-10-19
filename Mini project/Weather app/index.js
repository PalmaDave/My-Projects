const apiKey = "ECADDEEC9AC0998BF2941BD8EA8401CF";
// Gumawa ng constant variable na naglalaman ng OpenWeather API key.

const searchBtn = document.getElementById("search-btn");
// Kinukuha ang button na may id="search-btn" mula sa HTML.

const cityInput = document.getElementById("city");
// Kinukuha ang input field kung saan nagta-type ng city ang user.

const errorMessage = document.getElementById("error-message");
const weatherInfo = document.getElementById("weather-info");

searchBtn.addEventListener("click",() =>{
// kapag na click ang search button then yung arrow function na => para tumakbo ang code sa loob    
    const city = cityInput.value.trim();
// cityInput ito yung input value kinukuha ang laman yung trim() tinatanggal yung space sa unahan at dulo
    if(city){
// Kung may laman ang input, tatawagin ang checkWeather().      
        checkWeather(city);
        // tinatawag ang function
    }
});

cityInput.addEventListener("keypress",(e)=>{    
// ito namn pag may pinipindot na key (e) ito ang event object 
// e ang naglalaman ng impormasyon tungkol sa key na pinindot. 
    if(e.key == "Enter"){
        const city = cityInput.value.trim();
        if(city) checkWeather(city);
    }
});


 async function checkWeather(city){
// async pinapayagan gumamit ng await fetch()
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
// fetch() humihingi ng data sa internet. await hinihintay muna bago magpatuloy 

        if(!response.ok){
// Tinitingnan kung successful ang response ng API. // Halimbawa: 200 = OK, 404 = Not Found.    
            throw new Error("City not Found");
        // gumagawa ng sariling error   
        }
        const data = await response.json();
// Kino-convert ang JSON na galing sa API para maging JavaScript object.        
        displayWeather(data);
// Ipinapasa ang weather data sa displayWeather() para maipakita sa HTML. 
    }catch(error){
 // Kapag nagkaroon ng error, dito papasok ang program.
        showError(error.message);
    }
}
function displayWeather(data) {
    // Gumawa ng function na ang pangalan ay displayWeather.
    // Ang (data) ay parameter na naglalaman ng weather information mula sa API.

    errorMessage.classList.add("hidden");
    // Dinadagdagan ng class na "hidden" para maitago ang error message.

    weatherInfo.classList.remove("hidden");
    // Inaalis ang class na "hidden" para lumabas ang weather information.

    document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
    // Kinukuha ang city name at country mula sa API at ipinapakita sa HTML.

    const today = new Date();
   // Gumagawa ng object na naglalaman ng kasalukuyang petsa.

   document.getElementById("date").textContent = today.toDateString();
   // Ipinapakita ang kasalukuyang petsa.

    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    // Kinukuha ang temperature, niro-round off gamit ang Math.round(), at nilalagyan ng °C.

    document.getElementById("description").textContent = data.weather[0].description;
    // Kinukuha ang weather description (hal. Clouds, Rain, Clear) at ipinapakita.

    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    // Kinukuha ang humidity mula sa API at ipinapakita sa HTML.

    document.getElementById("wind-speed").textContent = `${data.wind.speed} m/s`;
    // Kinukuha ang wind speed mula sa API at ipinapakita sa HTML.

    const iconCode = data.weather[0].icon;
    // Kinukuha ang icon code ng weather (hal. 10d ibigsabehin ng 10d(rainday), 01n(ClearSky)).

    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    // Binubuo ang URL ng weather icon gamit ang icon code.

    document.getElementById("weather-icon").src = iconUrl;
    // Pinapalitan ang src ng <img> para lumabas ang tamang weather icon.
}

function showError(message) {
    // Gumawa ng function na tatawagin kapag nagkaroon ng error.

    weatherInfo.classList.add("hidden");
    // Itinatago ang weather information.

    errorMessage.classList.remove("hidden");
    // Ipinapakita ang error message.

    errorMessage.querySelector("p").textContent = message;
    // Hinahanap ang <p> sa loob ng error-message at pinapalitan ang text ng error.
}