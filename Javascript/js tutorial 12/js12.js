// JSON FOR IN LOOP

//let person = {
//    fname:"Dave", // property
//    lname:"Garcia",
//    age:22
//}

//for (let x in person){ // loop sa bawat key ng object
// console.log(`${x}: ${person[x]}`);  // x = key, person[x] = value
// console.log(person[x]); // value lang
//}



// =======================
// Object.keys() Method
// =======================

//let person = {
//    fname: "Dave",
//    lname:"Garcia",
//    age:22
//}

//let keys = Object.keys(person); // kukunin lahat ng keys → ["fname","lname","age"]
//console.log(keys); // print array ng keys

//for(let x = 0; x < keys.length; x++){ // loop gamit index
//    console.log(person[keys[x]]); // access value gamit key
//}

//console.log(keys.length); // bilang ng properties



// =======================
// TUTORIAL CHALLENGE
// =======================

let grades = {
    math:90,       // subject : score
    filipino:89,
    science:88,
    computer:97,
    english:91,
    AP:75
};

let average = 0; // lalagyan ng total

for(let x in grades){ // loop sa bawat subject
    console.log(`${x}: ${grades[x]}`); // print subject at score
    average += grades[x]; // i-add lahat ng scores
}

// hatiin sa bilang ng subjects para makuha average
average /= Object.keys(grades).length // Object.keys → kuha lahat ng keys, .length → bilang

console.log(''); // blank line
console.log(`Average: ${average}`); // final average