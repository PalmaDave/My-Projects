const startTime = document.getElementById("start");
const stopTime = document.getElementById("stop");
const resetTime = document.getElementById("reset");
const timerTime = document.getElementById("timer");

let interval = null;
let timeLeft = 100;

function updateTimer(){

let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;
let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

timerTime.innerHTML = formattedTime;
}
function startTimer(){
    if(interval !== null){
        return;
    }
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
        clearInterval(interval)
        document.body.style.backgroundColor = "red";
        alert("times up!!")
        timeLeft = 100;
        updateTimer();
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval)
    interval = null;
}

function resetTimer(){
    clearInterval(interval)
    interval = null;
    timeLeft = 100;
    updateTimer();
}

startTime.addEventListener("click",startTimer);
stopTime.addEventListener("click",stopTimer);
resetTime.addEventListener("click",resetTimer);
