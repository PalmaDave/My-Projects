let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm");

setInterval(()=>{ // pinapaulit ulit yung code
  let currentTime = new Date(); // gumagawa ako ng bagong Date object
  // kinukuha niya ang kasalukuyang oras sa computer ko

  let currentHours = currentTime.getHours(); // getHours kinukuha nito ang oras

  // Ternary Operator
  let period = currentHours >= 12 ? "PM" : "AM"; //prang shorcut ng if else 
  // sample 15 >= 12 result nito PM 8 >=12 result nito AM

  currentHours = currentHours % 12;
  // kinukuha ang remainder para ma-convert, sample 15 % 12 = 3PM
  // ang 24-hour format sa 12-hour format,  sample 23 % 12 = 11PM
  

  // Ternary case para sa 12
  currentHours = currentHours ? currentHours : 12; // bkt siya kailangan kase pag 12 % 12 = 0
// pag hindi zero ang current hours mo ayun ang magiging result sample 8 pag zero namn 
// ang currents hours mo kukunin mo ang nasa kanan na si 12 

// if(currentHours){   
//  currentHours = currentHours;
//   }else{
//  currentHours = 12;
//}
  
// kaya pag nagzero dito pupumunta papalitan niya ang laman ng HTML magiging 8,
// 8 < 10 = "0" tapos "0"+8 magiging "08" 08 kapag 12 <10 false na agad ""+12 kaya 12 
  hours.innerHTML = (currentHours < 10 ? "0" : "") + currentHours;

  minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
// Kapag less than 10 ang minutes,
// maglagay ng "0" sa unahan.
// Example:

// 5  -> 05  (5 < 10 ? "0" : "") + 5   "0" + 5 = "05"  pagmababa magdagdag ng zero 

// 25 -> 25 (25 <10 ? "0" : "")+25  "0" + 25 = 25 pagmataas no need na dagdagan ng zero

  second.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
// Kinukuha ang kasalukuyang seconds.
// Kapag less than 10 ang seconds,
// maglalagay ng "0" sa unahan.

// Examples:

// 7  -> 07
// (7 < 10 ? "0" : "") + 7
// "0" + 7
// Result: "07"

// 45 -> 45
// (45 < 10 ? "0" : "") + 45
// "" + 45
// Result: "45"

  ampm.innerHTML = period;
  // kung period = "AM" or "PM"
  

  
},1000); // 1000 miliseconds uulitin kada 1 segundo 
// paulit paulit habang open ang page 