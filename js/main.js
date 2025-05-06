var searchInput = document.querySelector('.search-input input');
var btnFind = document.querySelector(".search-input button");
var forecast;
var locationError = document.querySelector('.search-input h4');

(async function(){ 
  
// default
forecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a8d77d9d4da34e22a1a175443250305&q=Cairo&days=3`);
forecast = await forecast.json()
                // console.log(forecast.forecast.forecastday);
                // forecast = forecast.forecast.forecastday;
weatherStart();


// search input
searchInput.addEventListener('keydown', async function(e){

if(e.key == "Enter"){

  
forecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a8d77d9d4da34e22a1a175443250305&q=${searchInput.value}&days=3`);
forecast = await forecast.json()
if(forecast.error){
  console.log(forecast.error.message);
  locationError.classList.remove('d-none')
}
else{
  weatherStart();

}

}


})

// btn
btnFind.addEventListener('click', async function(){
  forecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a8d77d9d4da34e22a1a175443250305&q=${searchInput.value}&days=3`);
  forecast = await forecast.json()
  if(forecast.error){
    console.log(forecast.error.message);
      locationError.classList.remove('d-none')

  }
  else{
    weatherStart();
  }

});



}
)();


function weatherStart(){
  forecastFirstDay();
  forecastSecondDay();
  forecastThirdDay();
  
}

function forecastFirstDay(){
var locationForecast;
var firstDayCelsius;
var firstConditionIcon;
var firstConditionText;
var firstavgHumidty;
var firstMaxWind;
var firstWindDir;
var firstDay;
var dayName;
var FirstDayNumber;
var firstMonth;


locationForecast = forecast.location.name;
firstDayCelsius = forecast.forecast.forecastday[0].day.avgtemp_c;
firstConditionIcon = forecast.forecast.forecastday[0].day.condition.icon;
firstConditionText = forecast.forecast.forecastday[0].day.condition.text;
firstavgHumidty = forecast.forecast.forecastday[0].day.avghumidity;


firstMaxWind = forecast.forecast.forecastday[0].day.maxwind_kph;
firstWindDir = forecast.forecast.forecastday[0].hour[6].wind_dir;
 
firstDay = forecast.forecast.forecastday[0].date;



//  date
dayName = new Date(firstDay).toLocaleDateString('en-US', { weekday: 'long' });
var obj = new Date(firstDay)
FirstDayNumber = obj.getDate();
firstMonth = obj.toLocaleString('en-US', { month: 'short' }); 
 
  

var firstCardCelsius = document.querySelector('.first-card');

firstCardCelsius.innerHTML = 
`
          <div class="card-header bg-1card-head d-flex justify-content-between ">
            <h5 class="text-city header-text">${dayName}</h5>
            <h5 class="text-city header-text  ">${FirstDayNumber} ${firstMonth}</h5>
          </div>    
          
          <div class="card-body bg-1card-body  ">
            <h4 class="card-text  text-city">${locationForecast}</h4>
            <h2 class="text-white text-celsius ">${firstDayCelsius}°C</h2>
            <img src="https:${firstConditionIcon}" class="py-3" alt="">
            <p class="text-primary">${firstConditionText}</p>

            <div class="lower-part">

              <ol class="fa-ul d-flex justify-content-between mx-2">
                <li class=" text-city"><span class="fa-lie">
                  <img src="./images/icon-umberella.png" class="w-15" alt="">
                </span>${firstavgHumidty}%</li>

                <li class=" text-city"><span class="fa-lie">
                  <img src="./images/icon-wind.png" class="w-15" alt="">
                </span>${firstMaxWind}km/h</li>


                <li class=" text-city"><span class="fa-lie">
                  <img src="./images/compass.png" class="w-15" alt="">
                </span>${firstWindDir}</li>

              </ol>
            </div>

          </div>
`

}




function forecastSecondDay(){
    var secondDayName;
    var  secondDay;
    var secondConditionIcon;
    var secondConditionText;
    var secondDayMaxCelsius;
    var secondDayMinCelsius;


secondConditionIcon = forecast.forecast.forecastday[1].day.condition.icon;
secondConditionText = forecast.forecast.forecastday[1].day.condition.text;
secondDayMaxCelsius = forecast.forecast.forecastday[1].day.maxtemp_c;
secondDayMinCelsius = forecast.forecast.forecastday[1].day.mintemp_c;
secondDay = forecast.forecast.forecastday[1].date;
secondDayName = new Date(secondDay).toLocaleDateString('en-US', { weekday: 'long' });



var secondCardCelsius = document.querySelector('.second-card');
secondCardCelsius.innerHTML = 
`
        <div class="card-header bg-2card-head d-flex justify-content-center ">
      <h5 class="text-city header-text">${secondDayName}</h5>

    </div>    
    
    <div class="card-body bg-2card-body d-flex flex-column align-items-center ">
      <img src="https:${secondConditionIcon}" class="w-20 py-3" alt="">

      <h2 class="text-white text-bigger ">${secondDayMaxCelsius}°C</h2>
      <h2 class=" text-small py-4">${secondDayMinCelsius}°</h2>
      <!-- <img src="./images/cloud.webp" class="py-4 w-25" alt=""> -->
      <p class="text-primary padd py-5">${secondConditionText}</p>

    </div>
`;
}



function forecastThirdDay(){

    var thirdDayName;
    var  thirdDay;
    var thirdConditionIcon;
    var thirdConditionText;
    var thirdDayMaxCelsius;
    var thirdDayMinCelsius;

thirdConditionIcon = forecast.forecast.forecastday[2].day.condition.icon;
thirdConditionText = forecast.forecast.forecastday[2].day.condition.text;
thirdDayMaxCelsius = forecast.forecast.forecastday[2].day.maxtemp_c;
thirdDayMinCelsius = forecast.forecast.forecastday[2].day.mintemp_c;
thirdDay = forecast.forecast.forecastday[2].date;
thirdDayName = new Date(thirdDay).toLocaleDateString('en-US', { weekday: 'long' });



var thirdCardCelsius = document.querySelector('.third-card');
thirdCardCelsius.innerHTML = 
`
        <div class="card-header bg-1card-head d-flex justify-content-center ">
      <h5 class="text-city header-text">${thirdDayName}</h5>

    </div>    
    
    <div class="card-body bg-1card-body d-flex flex-column align-items-center ">
      <img src="https:${thirdConditionIcon}" class="w-20 py-3" alt="">

      <h2 class="text-white text-bigger ">${thirdDayMaxCelsius}°C</h2>
      <h2 class=" text-small py-4">${thirdDayMinCelsius}°</h2>
      <!-- <img src="./images/cloud.webp" class="py-4 w-25" alt=""> -->
      <p class="text-primary padd py-5">${thirdConditionText}</p>

    </div>
`;
}







