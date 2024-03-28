const apiKey = "06c970a79fa97220038e7592a6045834";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Maastricht";
const image = document.querySelector("#welcomeImage");


async function checkWeather(){

    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    if(data.weather[0].main == "Drizzle"){
        image.src = "images/rainyWeather.jpg";
    }else if(data.weather[0].main == "Clear"){
        image.src = "images/sunnyWeather.png";
        document.getElementById("city").style.color = "white";
        document.getElementById("welcomeTitle").style.color = "white";
    }else if(data.weather[0].main == "Clouds"){
        image.src = "images/cloudyWeather.png";
    }else if(data.weather[0].main == "Rainy"){
        image.src = "images/rainyWeather.jpg";
    }else if(data.weather[0].main == "Snow"){
        image.src = "images/snowyWeather.jpg";
    }else if(data.weather[0].main == "Mist"){
        image.src = "images/cloudyWeather.png";
    }

    document.querySelector("#city").innerHTML= data.name;
    

    console.log(data);
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clockContainer').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

checkWeather();
startTime();
