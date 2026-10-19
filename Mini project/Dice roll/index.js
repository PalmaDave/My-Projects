const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const HistoryEl = document.getElementById("roll-history");

// Gumagawa ng empty array na paglalagyan ng lahat ng naging dice roll results.
let historyList = [];

// Function na tatawagin kapag pinindot ang Roll Dice button.
function rollDice() {

    // Math.random() ay nagbibigay ng random decimal mula 0 hanggang mas mababa sa 1.
    // Minumultiply sa 6 para makakuha ng value mula 0 hanggang mas mababa sa 6.
    // Math.floor() ay nagtatanggal ng decimal para maging whole number.
    // +1 para ang possible result ay mula 1 hanggang 6, gaya ng totoong dice.
    const rollResult = Math.floor(Math.random() * 6) + 1;

    // Tinatawag ang getDiceFace() function at ipinapasa ang rollResult.
    // Ibabalik nito ang dice symbol na katumbas ng number na nakuha.
    const diceFace = getDiceFace(rollResult);

    // Binabago ang laman ng diceEl gamit ang dice symbol na nakuha.
    diceEl.innerHTML = diceFace;

    // Idinadagdag ang bagong dice result sa dulo ng historyList array.
    historyList.push(rollResult);

    // Tinatawag ang function na magpapakita ng lahat ng dice roll sa history.
    updateRollHistory();
}

// Function na nag-a-update at nagpapakita ng dice roll history.
function updateRollHistory() {

    // Nililinis muna ang laman ng HistoryEl para maiwasan ang pag-uulit
    // ng mga dating history item sa tuwing tatawagin ang function.
    HistoryEl.innerHTML = "";

    // Loop na nagsisimula sa index 0 at nagpapatuloy hangga't
    // mas mababa ang i sa bilang ng items sa historyList.
    // i++ ay nagdadagdag ng 1 sa i pagkatapos ng bawat ikot.
    for (let i = 0; i < historyList.length; i++) {

        // Gumagawa ng bagong <li> element sa HTML.
        const listItem = document.createElement("li");

        // Nilalagyan ng text ang bagong <li>.
        // i + 1 ang ginagamit para magsimula sa Roll 1 sa halip na Roll 0.
        // historyList[i] ang kumukuha ng dice result sa kasalukuyang index.
        // getDiceFace() ang nagko-convert ng number sa dice symbol.
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;

        // Idinadagdag ang bagong <li> sa loob ng HistoryEl sa HTML.
        HistoryEl.appendChild(listItem);
    }
}


// Gumagawa ng function na may parameter na rollResult.
// Dito matatanggap ang random number na nakuha sa dice roll.
function getDiceFace(rollResult) {

    // Sinusuri ng switch kung anong value ang laman ng rollResult.
    // Pipili ito ng case na kapareho ng value.
    switch (rollResult) {

        // Kapag ang rollResult ay 1, ibabalik ang dice symbol para sa 1.
        case 1:
            return "&#9856;";

        // Kapag ang rollResult ay 2, ibabalik ang dice symbol para sa 2.
        case 2:
            return "&#9857;";

        // Kapag ang rollResult ay 3, ibabalik ang dice symbol para sa 3.
        case 3:
            return "&#9858;";

        // Kapag ang rollResult ay 4, ibabalik ang dice symbol para sa 4.
        case 4:
            return "&#9859;";

        // Kapag ang rollResult ay 5, ibabalik ang dice symbol para sa 5.
        case 5:
            return "&#9860;";

        // Kapag ang rollResult ay 6, ibabalik ang dice symbol para sa 6.
        case 6:
            return "&#9861;";

        // Kapag walang case na tumugma sa rollResult,
        // empty string ang ibabalik.
        default:
            return "";
    }
}

// Nakikinig ang buttonEl kung may click event na mangyayari.
// Kapag na-click ang button, tatakbo ang arrow function sa loob nito.
buttonEl.addEventListener("click", () => {

    // Idinadagdag ang CSS class na "roll-animation" sa diceEl.
    // Magagamit ang class na ito para patakbuhin ang animation sa CSS.
    diceEl.classList.add("roll-animation");

    // Nagtatakda ng delay na 1000 milliseconds (1 segundo)
    // bago patakbuhin ang code sa loob ng arrow function.
    setTimeout(() => {

        // Inaalis ang "roll-animation" class sa diceEl
        // pagkatapos ng 1 segundo.
        diceEl.classList.remove("roll-animation");

        // Tinatawag ang rollDice() function.
        // Dito bubuo ng bagong random result at ia-update ang history.
        rollDice();

    }, 1000); // 1000 milliseconds = 1 segundo
});