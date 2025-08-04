//const API_KEY = "3265874a2c77ae4a04bb96236a642d2f"   invalid API key
const API_KEY = "f9aa21c03f4ef5571dd866ae582ae723"   //shows only pakistan cities temp
//selectors
const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")

// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather=async(city)=>{
     weather.innerHTML = `<h2> Loading... <h2>`
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response=await fetch(URL)
    //console.log(response)
    const data=await response.json()
    // console.log(data)
    return showWeather(data)
}

const showWeather=(data)=>{   //for html purposes to show fetch data on screen
console.log(data)
if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML=`
       <div>
           <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
       </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
       </div>`
}


form.addEventListener(
    "submit",
    function (event) {
        //console.log(search.value)
        getWeather(search.value)
        event.preventDefault()    //avoid the reload on submit
    }
)