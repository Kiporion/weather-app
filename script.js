const container = document.querySelector("#container");
const btn = document.querySelector("#btn")
const search = document.querySelector("#searchbar");
const form = document.querySelector("#search");

const h2 = document.createElement("h2");
const datePara = document.createElement('p');
const tempPara = document.createElement('p');
const forecastPara = document.createElement('p');
tempPara.classList.add("temperature")
const detailsPara = document.createElement('p');
const image=document.createElement("img");

async function getWeather(location){
    // Fetch API Data
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=de31e8145a00417a9b4120345231204&q=${location}`);
    const weather= await response.json();
    const city = weather.location.name;
    const country = weather.location.country;
    
    // Fill HTML
    h2.textContent=`${city}, ${country}`;
    datePara.textContent=weather.location.localtime;
    tempPara.textContent=`${weather.current.temp_c} °C`;
    image.src=weather.current.condition.icon;
    forecastPara.textContent=weather.current.condition.text;
    detailsPara.textContent=`Feels like: ${weather.current.feelslike_c} | Humidity levels: ${weather.current.humidity} | Wind: ${weather.current.wind_kph}km/h`
}
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    getWeather(search.value).then(()=>{
        container.appendChild(h2);
        container.appendChild(datePara);
        container.appendChild(tempPara);
        tempPara.appendChild(image);
        container.appendChild(forecastPara);
        container.appendChild(detailsPara);
    });
})


getWeather("London").then(()=>{
    container.appendChild(h2);
    container.appendChild(datePara);
    container.appendChild(tempPara);
    tempPara.appendChild(image);
    container.appendChild(forecastPara);
    container.appendChild(detailsPara);
});