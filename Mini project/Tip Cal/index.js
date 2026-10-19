const btnEl = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");
const button = document.getElementById("black")
const billInput = document.getElementById("bill-amount");
const tipInput = document.getElementById("tip-percent");
const tipAmountSpan = document.getElementById("tip-amount");
const errorMessage = document.getElementById("error-message");
const tipButtons = document.querySelectorAll(".tip-btn");
const totalSpan = document.getElementById("total");

button.addEventListener('click',() =>{
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        button.textContent = 'White';
    }else{
        button.textContent = 'Dark Mode';
    }
    
});

function calculateTotal() {
  const billValue = Number(billInput.value);
  const tipValue = Number(tipInput.value);

  // Validation
    if (billInput.value === "") {
        errorMessage.innerText = "Please enter your bill.";
        return;
    }

    if (billValue <= 0) {
        errorMessage.innerText = "Bill must be greater than 0.";
        return;
    }

    if (tipInput.value === "") {
        errorMessage.innerText = "Please enter the tip.";
        return;
    }

    if (tipValue < 0) {
        errorMessage.innerText = "Tip cannot be negative.";
        return;
    }
    errorMessage.innerText = "";
  
  const tipAmount = billValue * (tipValue / 100); // 1000 × (20 / 100) 20 / 100 = 0.2 x 1000 = 200 = tip amount 200
  const totalValue = billValue + tipAmount; // 1000 + 200 = 1200 kaya total = 1200

  tipAmountSpan.innerText = tipAmount.toFixed(2);
  totalSpan.innerText = totalValue.toFixed(2);
  }

// TIP BUTTONS
tipButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedTip = button.dataset.tip;

        tipInput.value = selectedTip;

    });

});


// RESET
resetBtn.addEventListener("click", function() {

    billInput.value = "";
    tipInput.value = "";

    tipAmountSpan.innerText = "0.00";
    totalSpan.innerText = "0.00";

    errorMessage.innerText = "";

});




btnEl.addEventListener("click", calculateTotal);
