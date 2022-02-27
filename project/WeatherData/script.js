
let timeEl = document.getElementById('time');
let dateEl = document.getElementById('date');
let current_weather_items = document.getElementById('current-weather-items')
let locations = document.getElementById('location')


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


setInterval(()=>{
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ '' +`<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

},1000)




    let container = document.getElementById('current-weather-items')
    let API_KEY = "f0c9028e7c3e8f6e8a48994673470066";

    async function getData() {
    try {
        let city = document.getElementById("city").value;
        document.getElementById('time-zone').innerHTML= city
        let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
       let data = await res.json()
       console.log(data)
       displayData(data)     
   } catch (error) {
       
   }
}


let leftDiv = document.createElement('div');

    function displayData(data){
       leftDiv.innerHTML=""

        var item = innerHTML=` <div>
        <p> City : ${data.name}</p>
        <p>Temperature :  ${data.main.temp} °C</p>
        <p>Humidity : ${data.main.humidity}</p>
        <p>Pressure :  ${data.main.pressure}</p>
        </div>`;

        leftDiv.innerHTML += item;

        let iframe = document.createElement("iframe");
        iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        iframe.width = 600;
        iframe.height = 250;

        current_weather_items.append(leftDiv)
        locations.append(iframe)


    }

