var inputVal = document.querySelector(".inputV");
var subBtn = document.querySelector(".button");
var nameDisp = document.querySelector(".name");
var descDisp = document.querySelector(".desc");
var tempDisp = document.querySelector(".temp");
var Kelvin = 273;

subBtn.addEventListener("click",function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid=e8c1f2093d51e0246349b3de6a731552')
    .then(response => response.json())
    .then(data => {
        nameDisp.innerHTML = data['name'];
        descDisp.innerHTML = data['weather'][0]['description'];
        tempDisp.innerHTML = Math.floor(data['main']['temp'] - Kelvin);
        tempDisp.innerHTML += "°C";
    })
    .catch(err => alert("Wrong City Name!"))
})