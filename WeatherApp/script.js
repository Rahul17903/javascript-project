let city = document.querySelector('input')
async function fetchApi(city){
    let respose = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=4330d982e481526bae65e99c8ad2b5bf`);
    let data = await respose.json();
    document.getElementById('temp').innerHTML =Math.round( data.main.temp) + "°c";
    document.getElementById('city').innerHTML =data.name;
    document.getElementById('humidity').innerHTML =data.main.humidity + "%";
    document.getElementById('wind').innerHTML =data.wind.speed+ "Km/hr";
    let img = document.getElementById('image')
    let weather = data.weather[0].main
    if(weather == "Clear"){
        img.src = "./images/clear.png";
    }
    else if(weather == "clouds"){
        img.src = "./images/clouds.png";

    }
    else if(weather == "drizzle"){
        img.src = "./images/drizzle.png";

    }
    else if(weather == "rain"){
        img.src = "./images/rain.png";

    }
    else if(weather == "snow"){
        img.src = "./images/snow.png";

    }
    else if(weather == "mist"){
        img.src = "./images/mist.png";
    }
}
let btn = document.querySelector('.search')
btn.addEventListener("click",(e)=>{
    fetchApi(city.value)
})
