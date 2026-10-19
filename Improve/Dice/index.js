const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const HistoryEl = document.getElementById("roll-history");


let historyList = [];

function rollDice(){

    const rollResult = Math.floor(Math.random()*6 )+ 1;

    const diceFace = getDiceFace(rollResult);

    diceEl.innerHTML = diceFace;

    historyList.push(rollResult);

    updateRollHistory();

}

function updateRollHistory(){

    HistoryEl.innerHTML = "";

    for(let i = 0; i < historyList.length; i++){

      const listItem = document.createElement("li");

      listItem.innerHTML = `Roll ${i + 1}: <span> ${getDiceFace(historyList[i])}</span>`;

      HistoryEl.appendChild(listItem);
    }
}


function getDiceFace(rollResult){

    switch(rollResult){
        case 1:
        document.body.style.backgroundColor = "red";       
            return "&#9856;";
        case 2:    
        document.body.style.backgroundColor = "yellow";  
            return "&#9857;";
        case 3:
        document.body.style.backgroundColor = "orange";      
            return "&#9858;";
        case 4:
        document.body.style.backgroundColor = "green";      
            return "&#9859;";
        case 5: 
        document.body.style.backgroundColor = "skyblue";      
            return "&#9860;";
        case 6:  
        document.body.style.backgroundColor = "pink";      
            return "&#9861;";
        default:
            return "";

    }
}

buttonEl.addEventListener("click",()=>{

    diceEl.classList.add("roll-animation");

    setTimeout(() =>{

        diceEl.classList.remove("roll-animation");

        rollDice();

    },1000);
})