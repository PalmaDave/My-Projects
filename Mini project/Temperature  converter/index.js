const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");


function convertTemp() {
    // Check kung may value ang Celsius input
    if (celsiusEl.value !== "") {

        // Kunin ang Celsius value at gawing number currentVAlue is 30
        const currentValue = Number(celsiusEl.value);

        // Convert Celsius to Fahrenheit sample 30 x 1.8 = 54 + 32 = 86 then tofixed to decimal 86.00
        fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);

        // Convert Celsius to Kelvin
        kelvinEl.value = (currentValue + 273.15).toFixed(2);
    }

    // Kung Fahrenheit naman ang may value
    else if (fahrenheitEl.value !== "") {
        // “Kunin yung Fahrenheit value, gawing number, at ilagay sa currentValue.”
        const currentVAlue = Number(fahrenheitEl.value);
        // formula °C = (°F - 32) / 1.8 currentvalue = 86 86-32 = 54 / 1.8 = 30 toFixed 00 kaya magiging 30.00 
       // Ilagay ang resultang 30.00 sa Celsius input
        celsiusEl.value = ((currentVAlue -32) / 1.8).toFixed(2);
      // lagay ang result sa Kelvin input 86°F  86 - 32 = 54  54 / 1.8 = 30°  30 + 273.15 = 303.15K
        kelvinEl.value - ((currentVAlue -32) / 1.8 + 273.15).toFixed(2);
    }
    else if(kelvinEl.value !== ""){ // “Kung walang laman ang Celsius at Fahrenheit, pero may laman ang Kelvin

        const currentVAlue = Number(kelvinEl.value);

        celsiusEl.value = (currentVAlue - 273.15).toFixed(2);

        fahrenheitEl.value = ((currentVAlue - 273.15) * 1.8 + 32).toFixed(2);
    }

    changeBackground();
}    
function changeBackground(){
    
    const temperature = Number(celsiusEl.value);

    if(temperature < 20){
        document.body.style.backgroundColor = "blue";
        alert("temperature is cold")
    }else if(temperature <=30){
        document.body.style.backgroundColor = "green";
        alert("temperature is normal")
    }
    else{
        document.body.style.backgroundColor = "red";
        alert("temperature is hot")
    }

}



function resetTemp(){
    celsiusEl.value = "";
    fahrenheitEl.value = "";
    kelvinEl.value = "";
}

