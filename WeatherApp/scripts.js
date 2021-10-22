const inputval = document.querySelector('.search')
const btn = document.querySelector('.btn')
const place_details = document.querySelector('.place-details')
const time = document.querySelector('.time-container')
const date = document.querySelector('.date-container')
const otherInfo = document.querySelector('.other-info')
const future_forecast = document.querySelector('.future-forecast')
const today_forecast = document.querySelector('.today-forecast')
const analyse_btn = document.querySelector('.analyse')
const hide_btn = document.querySelector('.hide')
const lastblock = document.querySelector('.lastblock')
const toggleEle = document.querySelector('.toggle')
const chartContainer = document.querySelector('.container-chart')





const days = ['Sunday', 'Monday' , 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const API_KEY = 'bb748ac1753e2469136f61f60d882ff6'

const defaultCity = 'New Delhi'
let flag = true
let bool = true
var timeZoneEle  = ''
let humidityDetails = [] 
let windSpeedDetails = []
let pressureDetails = []
let maxTempDetails = []
let minTempDetails = []
let dayDetails = []


window.addEventListener('load', () => {
  
  if('geolocation' in navigator)
  {
    navigator.geolocation.getCurrentPosition(setPosition, showError)
  }
  
})

const setPosition = async (position) => {
  lat = position.coords.latitude
  long = position.coords.longitude
  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
    const data = await res.json()
    //console.log(data)
    if(bool == true){
    var timeId = setInterval(function()  {
      if(bool == false)clearInterval(timeId)
      time.innerHTML =new Date().toLocaleString("en-US", {timeZone:data.timezone , timeStyle:'medium',hourCycle:'h12'})
    },1000)
    addDataToElment(data);
    }
    
}

function showError(error){
  flag = false
  getWeather(defaultCity)
  
  
}



btn.addEventListener('click', (e)=> {
  timeZoneEle=''
  bool = false
  e.preventDefault()
  //console.log(inputval.value)
  getWeather(inputval.value)
  
})

const getWeather = async (city) => {
  
  try{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const resData = await response.json()
    //console.log(resData)
    getData(resData.coord.lon, resData.coord.lat) 
    

    
  }
  catch(error) {
    alert('Location not found')
  }
}

function getData(longitude,latitude) {
    //console.log(latitude,longitude)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
    .then(res => res.json()).then(data => {
      //console.log(data)
      timeZoneEle =data.timezone
      var timeID = setInterval(function() {
      time.innerHTML =new Date().toLocaleString("en-US", {timeZone:timeZoneEle , timeStyle:'medium',hourCycle:'h12'})
      
    },1000)
    
      addDataToElment(data);
    })
}


function addDataToElment (data) {

  
    const timeval = new Date();
    const month = timeval.getMonth();
    const dateval = timeval.getDate();
    const day = timeval.getDay();
    
    date.innerHTML = days[day] + ' , ' + dateval + ' ' + months[month]
    
  
  //console.log(flag == false)
  place_details.innerHTML = `
  <div class="place_name">${(flag == false) ? (inputval.value === '' ? defaultCity : inputval.value) : (inputval.value === '' ? 'Kolkata' : inputval.value)}</div>
  <div class="time-zone">${data.timezone}</div>
  <div class="latlong">${data.lat}N  ${data.lon}E</div>
  `
  inputval.value = ''

  otherInfo.innerHTML = 
  `<div class="info">
    <div>Humidity</div>
    <div>${data.daily[0].humidity}%</div>
  </div>
  <div class="info">
    <div>Wind Speed</div>
    <div>${data.daily[0].wind_speed} m/sec</div>
  </div>
  <div class="info">
    <div>Pressure</div>
    <div>${(data.daily[0].pressure / 29.92).toFixed(2)} atm</div>
  </div>`

  let currentDayForecast = ''
  currentDayForecast += `
      <img src="http://openweathermap.org./img/wn/${data.current.weather[0].icon}@2x.png" alt="icon" class="icon">
      <div class="temp">${data.current.weather[0].main}</div>
      <div class="temp">Temp - ${data.current.temp}&#176;C</div>
      
      `



  let nextfutureforcast = ''
  
  let everyday = ''
  data.daily.forEach((day ,id) => {
    humidityDetails.push(day.humidity)
    maxTempDetails.push(day.temp.max)
    minTempDetails.push(day.temp.min)
    windSpeedDetails.push(day.wind_speed)
    pressureDetails.push(day.pressure / 29.92)
    everyday = (window.moment(day.dt*1000).format('ddd'))
    //console.log(everyday)
    dayDetails.push(everyday)
    if(id === 0){
      
    }
    else{
      nextfutureforcast += `
      <div class="next-forecast-items">
        <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
        <img src="http://openweathermap.org./img/wn/${day.weather[0].icon}@2x.png" alt="icon" class="icon">
        <div class="temp">${day.weather[0].main}</div>
        <div class="temp">Max - ${day.temp.max}&#176;C</div>
        <div class="temp">Min - ${day.temp.min}&#176;C</div>
        <div class="temp">Humidity - ${day.humidity}&#37;</div>
        <div class="temp">Wind Speed - ${day.wind_speed} m/s</div>
        <div class="temp">Pressure - ${(day.pressure / 29.92).toFixed(2)} atm</div>
      </div>`
    }
  })
  today_forecast.innerHTML = currentDayForecast
  future_forecast.innerHTML = nextfutureforcast
  //console.log(dayDetails)
  addchart()
  //console.log(humidityDetails, maxTempDetails, minTempDetails, windSpeedDetails, pressureDetails)
  humidityDetails =[] ,maxTempDetails = [], minTempDetails = [], windSpeedDetails = [], pressureDetails = [], dayDetails = []
}

analyse_btn.addEventListener('click', () => {
  toggleEle.classList.add('hidden')
  lastblock.classList.remove('hidden')
})

hide_btn.addEventListener('click', () => {
  lastblock.classList.add('hidden')
  toggleEle.classList.remove('hidden')
})

var addchart = function(){
  
    //console.log(pressureDetails)
    document.querySelector(".container-chart").innerHTML = '&nbsp;';
    document.querySelector(".container-chart").innerHTML += '<canvas class="mychart" "height: 100px"></canvas>';
    var myChart = document.querySelector(".mychart").getContext("2d");
    myChart.height = 500
    
    var humidityChart= new Chart(myChart, {
    type : 'bar',// bar, horizontalBar, pie, line, doughtnut, radar, polarArea
    data : {
        labels: dayDetails,
        showLine: true,
        datasets: [ {
          label : 'Max Temp',
          data: maxTempDetails,
          backgroundColor: '#c42626',
          fill: false
        },
        {
          label : 'Min Temp',
          data: minTempDetails,
          backgroundColor: '#e3fc00',
          fill: false
        },
        {
          label : 'Humidity',
          data: humidityDetails,
          backgroundColor: '#025317',
          fill: false
        },
        {
          label : 'Wind Speed',
          data: windSpeedDetails,
          backgroundColor: '#3090C7',
          fill: false
        },
        {
          label : 'Pressure',
          data: pressureDetails,
          backgroundColor: '#e0dddd',
          fill: false
        }  
      ]
      },
      
      options:{
        plugins: {
          legend: {
              labels: {
                  // This more specific font property overrides the global property
                  font: {
                      size: 18,
                      
                  }
                }
              }
            },
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      min: 0,
                      max: 500    
                  }
                }]
             }
          }
        })

}