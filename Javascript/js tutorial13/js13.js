// =======================
// FUNCTION (BASIC)
// =======================

//function Hello(){                     // declare function named Hello
//  console.log("Hello Software Dave") // print message
//}
//Hello();                             // call the function



// =======================
// FUNCTION PARAMETERS
// =======================

//function multi(num1,num2){            // function with parameters num1 at num2
//   let prod = num1 * num2;            // multiply values, store sa prod
//   console.log(prod);                 // print result
//}
//multi(3,3);                          // call function with arguments 3 at 3



// =======================
// FUNCTION + ARRAY
// =======================

//let n = ["Dave","Yato","Yuno","Karen"]; // array of names
//let n1 = ["Joseph","Marin","Maxx","Lester"]; // another array (unused)
//let lastName = "SDPT";                     // global variable

//function printNames(names){                // function with array parameter
//    for(let i = 0; i < names.length; i++){ // loop through array
//        console.log(names[i] + " " + lastName); // print full name
//    }
//}

//printNames(n);                             // call function, pass array n



// =======================
// RETURN (NUMBER)
// =======================

//function multi(num1 , num2){      // function with parameters
//    return num1 * num2;           // return product
//}

//let prod = multi(5,5);            // call function, store result
//console.log(prod);                // print 25



// =======================
// RETURN (STRING)
// =======================

//let lastName = "Palma";           // global variable

//function appendLastName(name){    // function with parameter
//    return name + " " + lastName; // combine name + lastname
//}

//let fullName = appendLastName("Dave"); // call function
//console.log(fullName);            // output: Dave Palma



// =======================
// RETURN (AVERAGE)
// =======================

//function average(num1,num2,num3){     // function with 3 parameters
//    return (num1 + num2 + num3) / 3;  // compute average
//}

//let a = average(90,98,90);            // call function
//console.log(a);                       // print result



// =======================
// VARIABLE SCOPING
// =======================

// GLOBAL VARIABLES

//let x = 5;                    // global variable

//function X(){
//    console.log(x);           // access global x
//}

//function multiX(num){
//    console.log(x * num);     // use global x
//}

//X();                          // call function
//multiX(3);                    // multiply x * 3



// LOCAL VARIABLE

//function multiX(num){
//    let x = 10;               // local variable (inside function only)
//    console.log(x * num);     // multiply local x * num
//}
//multiX(10);                   // call function



// =======================
// TUTORIAL CHALLENGE
// =======================

function summation(arr){        // function na tatanggap ng array
    let sum = 0;               // initialize total to 0

    for(let i = 0; i < arr.length; i++){ // loop bawat element ng array
        sum += arr[i];        // idagdag current value sa sum
    }

    return sum;               // ibalik total sum
}

let total = summation([5,3,2,1]); // call function with array input
console.log(total);               // output: 11