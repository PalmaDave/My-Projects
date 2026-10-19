let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

setInterval(()=>{

    let currentTime = new Date ();

    let currentHours = currentTime.getHours();

    let period = currentHours >= 12 ? "PM" : "AM";

    currentHours = currentHours % 12;

    currentHours = currentHours ? currentHours : 12;

    hrs.innerHTML = (currentHours < 10 ? "0" : "") + currentHours;

    min.innerHTML = (currentTime.getMinutes()< 10 ? "0" : " ") + currentTime.getMinutes();

    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : " ") + currentTime.getSeconds();

    ampm.innerHTML = period;


 },1000);





















