const startTime = document.getElementById("start");
const stopTime = document.getElementById("stop");
const resetTime = document.getElementById("reset");
const timerTime = document.getElementById("timer");

// Gumagawa tayo ng variable na pangalan ay interval.
// Ginagamit ito para makontrol ang countdown timer,
// tulad ng pag-start at pag-stop nito.
let interval = null;

// Gumagawa tayo ng variable na timeLeft 1500seconds 1500 / 60 = 25min
let timeLeft = 300;

// I-update ang ipinapakitang oras sa screen.
function updateTimer(){

    // Ito ang kumukuha ng minutes Dahil ang timeLeft ay seconds, kailangan natin siyang hatiin sa 60.
    let minutes = Math.floor(timeLeft / 60);

    // Ito naman ang kumukuha ng natitirang seconds. % remainder o modolus
    let seconds = timeLeft % 60;

    // Ang purpose nito ay gawing magandang format
    let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    //                  Ginagawa nitong string ang number.                          Ito ang nagsisigurado na at least 2 characters ang number.

    // Ito naman ang nagpapakita ng result sa HTML.
    timerTime.innerHTML = formattedTime;

}


// Simula ng Countdown timer
function startTimer(){
        // "Ang interval ba ay hindi null?
     if(interval !== null){
      // Tumigil dito. Huwag nang ituloy ang function.
        return;
     }

     // Ulit-ulitin ang code sa loob pagkatapos ng isang certain amount of time
    interval = setInterval(() =>{
        //Ito ang nagpapabawas ng 1 sa timeLeft pabilang na baliktad
        timeLeft--;
        // nagbago na yung time. I-display mo ulit yung unang display sample 5:00
        updateTimer();
        // Umabot na ba sa 0 ang timer sample 5 false pag 0 true Then papasok siya sa loob ng if
        if(timeLeft === 0){
          // Ito naman ang STOP ng setInterval() tigil mo na yung pag-uulit  
            clearInterval(interval);
         // Wala nang active interval.   
            interval = null;
            alert("Times Up!!")
            timeLeft = 300;
            updateTimer();
        }
    //Ito ang nagsasara sa setInterval()    
    },1000);
}
function stopTimer(){
    // Pinapatigil nito yung timer
    clearInterval(interval);
    // wlang ng active timer
    interval = null;
}
function resetTimer(){ // ito hihinto niya then ibabalik sa anong time sample 5:00
    clearInterval(interval);
    interval = null;
    timeLeft = 300;
    // dito pinapakita niya agad once na nireset mo sample 5:00
    updateTimer();
}

// Kapag na-click ang startTime, patakbuhin ang startTimer.
startTime.addEventListener("click",startTimer);

// Kapag na-click ang startTime, patakbuhin ang stopTimer.
stopTime.addEventListener("click",stopTimer);

//Kapag na-click ang startTime, patakbuhin ang resetTimer.
resetTime.addEventListener("click",resetTimer);