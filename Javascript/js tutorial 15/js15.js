// DOM Event Listeners
// Ito ay mga event na nangyayari sa webpage
// tulad ng click, hover, input, load, at iba pa.



// =====================
// ONLOAD LISTENER
// =====================

// function initialize(){  
//    alert("PAGE LOADED!!"); 
// }
// Kapag fully loaded na ang page,
// lalabas ang alert message na "PAGE LOADED!!"



// =====================
// ONCLICK LISTENER
// =====================

// function sayHello(){ 
//    alert("Hello Dave");
// }
// Kapag may na-click na element
// (ex: button), lalabas ang alert


// function sayHello(){
//    let title = document.querySelector(".title");
//    // Hinahanap ang element na may class="title"

//    title.innerHTML = "Hello Dave";
//    // Pinapalitan ang laman ng element
//    // magiging "Hello Dave"
// }



// =====================
// ONMOUSEOVER LISTENER
// =====================

// function hoverText(){
//    let button = document.querySelector("button");
//    // Hinahanap ang unang button sa HTML

//    button.innerHTML = "YOU HOVER ME!!!";
//    // Kapag tinapat ang mouse,
//    // mapapalitan ang text ng button
// }


// function hoverText(){
//    let p = document.querySelector("p");
//    // Hinahanap ang unang <p> element

//    p.innerHTML = "YOU HOVER ME !!!";
//    // Kapag hover ang mouse,
//    // magbabago ang laman ng paragraph
// }



// =====================
// ONMOUSEOUT LISTENER
// =====================

// function unhoverText(){
//    let p = document.querySelector("p");
//    // Hinahanap ang unang <p>

//    p.innerHTML = "DON'T LEAVE ME!!";
//    // Kapag inalis ang mouse sa element,
//    // magbabago ang text
// }


// function hoverText(){
//    let p = document.querySelector("p");
//    // Hinahanap ang <p>

//    p.innerHTML = "YAY YOU'RE HERE !!";
//    // Kapag hover ang mouse,
//    // magpapakita ng bagong text
// }


// function clickText(){
//    let p = document.querySelector("p");
//    // Hinahanap ang <p>

//    p.style.color = "blue";
//    // Pinapalitan ang kulay ng text
//    // magiging blue kapag na-click
// }



// =====================
// ONFOCUS LISTENER
// =====================

// function triggerFocus(){
//   let inp = document.querySelector("input");
//   // Hinahanap ang unang input element

//   inp.style.color = "blue";
//   // Pinapalitan ang kulay ng text sa input

//   inp.style.background = "red";
//   // Pinapalitan ang background ng input
// }
// Gumagana kapag na-click o napunta
// ang cursor sa input field



// =====================
// ONBLUR LISTENER
// =====================

// function triggerBlur(){
//    let inp = document.querySelector("input");
//    // Hinahanap ang input

//    inp.style.color = "pink";
//    // Ginagawang pink ang text color

//    inp.style.background = "grey";
//    // Ginagawang grey ang background
// }
// Gumagana kapag umalis ang cursor
// o nawalan ng focus ang input



// =====================
// ONINPUT LISTENER
// =====================

// function triggerInput(){
//    let inp = document.querySelector("input");
//    // Hinahanap ang input field

//    let p = document.querySelector("p");
//    // Hinahanap ang paragraph

//    p.innerHTML = inp.value;
//    // Kinukuha ang value ng input
//    // at nilalagay agad sa paragraph
// }
// Real-time ito habang nagta-type ka



// =====================
// ONCHANGE LISTENER
// =====================

//function triggerChange(){ 
    // Gumagawa ng function na triggerChange

//   let inp = document.querySelector("input");
    // Hinahanap ang unang input element
    // at sine-save sa variable na inp

//    let p = document.querySelector("p");
    // Hinahanap ang unang paragraph
    // at sine-save sa variable na p

//    p.innerHTML = inp.value;
    // Kinukuha ang value ng input
    // at nilalagay sa paragraph
//}
// Hindi real-time
// Tatakbo lang kapag natapos ka mag-edit
// tapos nag-click ka sa labas ng input




// DOM Forms 

// Handle input fields

//function signIn(){
//    let email = document.querySelector("#Email").value;
//    let password = document.querySelector("#Password").value;
//    alert(email + "\n" + password)
//}


// Handle Dropdown fields

//function submit(){
//    let country = document.querySelector("#slcCountry").value;
//    alert(country);
//}

// Handle Checkbox

//function Decision(){
//    let decision = document.querySelector("#chkAgree").checked;
//    if(decision){
//        alert("Accepted privacy policy");
//    }else{
//        alert("You must accept the policy to proceed!");
//    }
//}


// Handle Radio buttons

//function submit(){
//    let sex = document.querySelector("input[name=sex]:checked").value;
//    alert(sex);
//}

// Tutorial Challenge
function signIn(){ // Gumagawa ng function na tatawagin pag pinindot ang Sign In button

  let hasAgree = document.querySelector("#chkAgree").checked;
  // Hinahanap ang checkbox gamit ang id="#chkAgree"
  // .checked = true kung naka-check, false kung hindi

    if(hasAgree){ 
        // Kapag naka-check ang privacy policy, papasok dito

        let firstname = document.querySelector("#firstname").value;
        // Kinukuha ang value ng input na may id="firstname"

        let lastname = document.querySelector("#lastname").value;
        // Kinukuha ang value ng input na may id="lastname"

        let birthday = document.querySelector("#birthday").value;
        // Kinukuha ang selected date sa birthday input

        let country = document.querySelector("#slcCountry").value;
        // Kinukuha ang selected value ng dropdown/select

        let sex = document.querySelector("input[name=sex]:checked").value
        // Hinahanap kung alin sa radio buttons (Male/Female)
        // ang naka-select gamit ang :checked
        // tapos kukunin ang value niya

        document.querySelector("#lblFullName").innerHTML = firstname + " " + lastname;
        // Hinahanap ang element na may id="lblFullName"
        // pinapalitan ang laman nito gamit ang first name + last name

        document.querySelector("#lblBirthday").innerHTML = birthday;
        // Nilalagay ang birthday sa element na may id="lblBirthday"

        document.querySelector("#lblCountry").innerHTML = country;
        // Nilalagay ang country sa element na may id="lblCountry"

        document.querySelector("#Sex").innerHTML = sex;
        // Nilalagay ang selected sex (Male/Female)
        // sa element na may id="Sex"

    }else{
        // Kapag hindi naka-check ang checkbox

        alert("YOUT MUST AGREE TO PRIVACY POLICY FIRST!!")
        // Magpapakita ng alert message
    }
}
