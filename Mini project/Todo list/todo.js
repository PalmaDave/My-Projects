const myInput = document.getElementById('myinput'); // kinukuha yung input element
const listContainer = document.getElementById('list-container'); // kinukuha yung container list

function Task(){ // gumawa ako ng function name ay Task tatawagin siya pag pinindot mo yung button
    
    if(myInput.value.trim() === ""){ 
    // kinukuha yung laman ng input o yung nilagay kung task. trim() tinatanggal yung space
   
    alert("Maglagay ng Task"); // lumalabas pag wala kang nilagay ng task 
   
    return;
    }
    const li = document.createElement('li');
    // nagdeclare o gumawa ako ng li element 
    
    li.textContent = myInput.value;
    // dito ko nilalagay yung text sa loob ng li

    listContainer.appendChild(li);
    // nagdadagdag ako ng li tags

    myInput.value = "";
    // binubura ang laman ng nasa input field 
}  

