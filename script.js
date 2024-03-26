const apiKey = "06c970a79fa97220038e7592a6045834";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Bari";
const image = document.querySelector("welcomeImage");

async function checkWeather(){
    const image = document.querySelector("#welcomeImage");

    
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    if(data.weather[0].main == "Drizzle"){
        image.src = "images/rainyWeather.jpg";
    }else if(data.weather[0].main == "Clear"){
        image.src = "images/sunnyWeather.png";
    }else if(data.weather[0].main == "Clouds"){
        image.src = "images/cloudyWeather.png";
    }else if(data.weather[0].main == "Rainy"){
        image.src = "images/rainyWeather.jpg";
    }else if(data.weather[0].main == "Snow"){
        image.src = "images/snowyWeather.jpg";
    }

    console.log(data);
}

checkWeather();
