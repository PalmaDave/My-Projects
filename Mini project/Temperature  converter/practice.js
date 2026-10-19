const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function convertTemp(){
  if(celsiusEl.value !== ""){

    const currentVAlue = Number(celsiusEl.value);

    fahrenheitEl.value = (currentVAlue * 1.8 + 32).toFixed(2)

    kelvinEl.value = (currentVAlue + 273.5).toFixed(2)
  }
  else if(fahrenheitEl.value !== ""){
    
    const currentVAlue = Number(fahrenheitEl.value);

    celsiusEl.value = ((currentVAlue - 32) / 1.8 ).tofixed(2)

    kelvinEl.value = ((currentVAlue - 32)/ 1.8 + 273.5).toFixed(2)
  }
  else if(kelvinEl.value !== ""){

    const currentVAlue = Number(fahrenheitEl.value);

    celsiusEl.value = ((currentVAlue - 273.15)).toFixed(2)

    kelvinEl.value = ((currentVAlue - 273.15) * 1.8 + 32).toFixed(2);
  }

  changeBackground();
}
function changeBackground(){

  const temperature = Number(celsiusEl.value);

  if(temperature < 20){
    document.body.style.backgroundColor = "blue";
    alert("Temperature is Cold!");
  }else if(temperature <= 30){
    document.body.style.backgroundColor = "green";
    alert("Temperature is Normal!")
  }else{
    document.body.style.backgroundColor = "red";
    alert("Temperature is Hot!")
  }

}

function resetTemp(){
    celsiusEl.value = "";
    fahrenheitEl.value = "";
    kelvinEl.value = "";
}
