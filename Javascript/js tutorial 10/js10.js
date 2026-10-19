// for(variabel;condition;operation){
//code natin
//}

// ITERATE

//for(let x = 0; x < 10; x++){ 
    // x = 0 → dito nagsisimula (start sa 0)
    // x < 10 → hangga’t mas mababa sa 10, tuloy ang loop
    // x++ → dagdag ng 1 bawat ikot (0,1,2,3,...)

 //   console.log(x); 
    // ipi-print ang value ng x bawat ikot
//}

// For loop

//let people = ["David","Alenere","Karen","Yato"];
// Gumagawa ng array na may laman na 4 na pangalan

//for(let x = 0; x < people.length; x++){
// x = 0 → simula sa unang index
// x < people.length → habang hindi pa lampas sa haba ng array (4)
// x++ → dagdag ng 1 bawat ikot (0,1,2,3)

//    console.log(people[x]);
// kinukuha ang laman ng array base sa index
//}

//let people = ["David","Alenere","Karen","Yato"];

//for(let x = people.length - 1; x >= 0; x--){ 
    // Start sa last index (3)
    // Habang x >= 0 (hanggang first index)
    // x-- → pababa ang bilang (3, 2, 1, 0)

//    console.log(people[x]); 
//}

//let people = ["David","Alenere","Yato","Dave"];

//FOR LOOP

//for(let x = 0; x < people.length; x++){
//    console.log(people[x]); 
    // ipi-print ang pangalan base sa index

//    if(x == 2) // stop pag nakaabot na sa index 2
//        break;   
    // break → titigil agad ang loop
//}
// FOR IN

// FOR IN

//let people = ["David","Alenere","Dave","Yato"];
// Gumagawa ng array na may 4 na pangalan

//for(let x in people){
// x → index ng array (0,1,2,3)
// NOTE: string ang x ("0","1","2","3")

//    console.log(people[x]);

//}

// let people =["David","Alenere","Dave","Yato"];
// for(let x in people){
// console.log(`${parseInt(x)+1}.${people[x]}`)};

// parseInt(x) → ginagawang number ang index
// +1 → para maging 1,2,3,4 instead of 0,1,2,3
// `${}` → template string (pang combine ng text at variable)



// FOR OF loop

//let people = ["David","Alenere","Dave","Kupal"];
// Gumagawa ng array na may mga pangalan

//for(let x of people){ 
    // x → bawat VALUE ng array (hindi index)
    // automatic na iikot sa lahat ng laman

//    console.log(x); 
    // ipi-print mismo ang value
//}

let people = ["David","Alenere","Dave","Yato"];
let search = "dave";
let isFound = false;

for(let x = 0; x < people.length;x++){
    if(people[x].toLowerCase() === search.toLowerCase()){
     isFound = true;
     console.log(`Found ${people[x]}`);
     break;
    }
}
if(!isFound) console.log("Not Found");