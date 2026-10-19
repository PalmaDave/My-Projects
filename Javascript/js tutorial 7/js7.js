// && AND operator pagmay isang false sa condition false na ang output pagpasok lahat sa condition ang output is True
//let age = 18; // tska dapat pareho
//let experience = 3;
//let language = "C#"
// same dapat true pag may false false na ang output
//if(age >= 18 && experience > 1 && language === "C#"){
// alert("You are Qualified for the Job")
//}else{
//    alert("You are Not Qualified the job");
//}

// || OR operator kahit isa lng magtrue sa condition true na ang output
//let experience = 2; // kahit isa lng true true na lahat yun
//let language = "C++";

//if(experience > 1 || language === "C#"){
//    alert("Qualified");
//}else{
//  alert("Not Qualified");
//}

// ! NOT operator binabalitad yung sagot sample true nagiging false pag falase nagiging true
// kabaliktaran ng totoong sagot
//let isTall = true;
//if(!isTall){
//    alert("Tall");
//}else{
//    alert("Small");
//}

// Nested Conditonal statements
//let age = 19;
//let experience = 0;

//if(age >=18){
  
//   if(experience > 1){
//        alert("Hired")
//   }else{
//          alert("Not Hired");
//   }

//}else{
//    alert("Minor");
//}


let age = 13; // Mag-declare ng variable na 'age' at itakda ang value na 13
let isRegistered = false; // Mag-declare ng variable na 'isRegistered' at itakda ang false (boolean)

if(isRegistered){ // Suriin kung ang isRegistered ay TOTOO (true)
   
  if(age >= 18){ // Kung registered: suriin kung ang age ay 18 pataas
    alert("Valid voter"); // Kung age >= 18 → ipakita ang "Valid voter"
  }else{
    alert("Invalid voter"); // Kung age ay MABABA SA 18 (hal. 13, 15, 17) → ipakita ang "Invalid voter"
  }

}else{ // Kung ang isRegistered ay HINDI TOTOO (false)
    if(age >= 18){ // Kung hindi registered: suriin kung ang age ay 18 pataas
       alert("Register First"); // Kung age >= 18 pero hindi registered → ipakita ang "Register First"
    }else{
        alert("Non Voter") // Kung age ay MABABA SA 18 at hindi registered → ipakita ang "Non Voter"
    }
}