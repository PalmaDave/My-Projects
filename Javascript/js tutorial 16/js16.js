// Variable Declaration
// use let, const,

// let = variable na pwedeng baguhin
// const = fixed value, hindi pwede palitan

// Example:
// let age = 20;
// age = 25; // pwede

// const pi = 3.14;
// pi = 5; // error



// strict equality
// let x = 5;
// let y = "5";

// if(x === y)

// === = strict equality
// chine-check BOTH value at data type

// Example:
// 5 === "5"  -> false
// kasi number si 5
// pero string si "5"

// == = loose equality
// automatic conversion

// Example:
// 5 == "5" -> true



// DOM selector use as querySelector & querySelectorAll

// querySelector()
// kumukuha ng FIRST matching element

// Example:
// document.querySelector("#title")

// querySelectorAll()
// kumukuha ng maraming element
// parang array/list

// Example:
// document.querySelectorAll(".box")



// Passing Event Object

// function readInput(e){
//     let v = e.target.value;
//     alert(v);
// }

// e = event object
// automatic info kapag may nangyaring event

// e.target = element na tinamaan ng event

// .value = value ng input

// Example:
// habang nagta-type ka,
// kukunin niya bawat letter



// Arrow Functions

// let add = (x,y) => x + y ;

// arrow function version ng normal function

// katumbas nito:

// function add(x,y){
//     return x + y;
// }

// let sum = add(5,3);
// alert(sum);

// add(5,3)
// x = 5
// y = 3
// result = 8

// alert(8)



// Timing Events

// function change(){
//     let body = document.querySelector("body");
//     body.style.transition = "1s";
//     body.style.background = "red";
// }

// setTimeout(change,3000);

// setTimeout()
// maghihintay muna bago tumakbo

// 3000 milliseconds = 3 seconds

// after 3 seconds:
// tatawagin si change()
// magiging red ang background



// setTimeout(()=>{
//     let body = document.querySelector("body");
//     body.style.transition = "1s";
//     body.style.background = "red";

// },5000);

// arrow function version

// after 5 seconds
// magiging red ang body



// setInterval(()=>{
//     let body = document.querySelector("body");
//     body.style.transition = "1s";

//     if(body.style.background === 'red'){
//         body.style.background = "white";
//     }else{
//         body.style.background = "red";
//     }

// },2000);

// setInterval()
// paulit-ulit tumatakbo

// every 2000 milliseconds = 2 seconds

// if red -> white
// else -> red

// parang blinking effect



// Spread Operator

// let fruits1 = ["Apple","Banana"];
// let fruits2 = ["Strawberry","Orange"];

// let allFruits = [
//     "Hotdog",
//     ...fruits2,
//     "Mango",
//     ...fruits1
// ]

// ... = spread operator
// binubuksan laman ng array

// Result:
// [
// "Hotdog",
// "Strawberry",
// "Orange",
// "Mango",
// "Apple",
// "Banana"
// ]

// alert(allFruits)



// Rest Operator

// function summation(...numbers){

// ...numbers
// lahat ng arguments ilalagay sa array

// Example:
// summation(5,4,3,2,2)

// magiging:

// numbers = [5,4,3,2,2]

//    let total = 0;

//    for(let n of numbers){
//       total += n;
//    }

// for of loop
// umiikot sa bawat number

// total = 16

// return total;
// }

// let sum = summation(5,4,3,2,2);
// alert(sum);



// function appendLastName(lastName,...firstNames){

// first parameter = lastname
// remaining = firstNames array

// Example:
// appendLastName("Palma","Dave","Karen","Yato")

// magiging:

// lastName = "Palma"
// firstNames = ["Dave","Karen","Yato"]

//     for(let fName of firstNames){
//         alert(fName + " " + lastName);
//     }

// Output:
// Dave Palma
// Karen Palma
// Yato Palma

// }



// Destructuring JSON

const user = {
    "id":147,
    "name":"Dave Palma",
    "username":"Palma Dave",
    "email":"dave@yahoo.com"
}
// object/JSON data

// parang container ng information

// user.id = 147
// user.name = Dave Palma



// let {id,name} = user;

// destructuring
// shortcut para kunin values

// katumbas nito:

// let id = user.id;
// let name = user.name;



let {id,name,username,email} = user;
// kinukuha lahat ng properties
// from user object

alert(
   id + "\n" +
    email + "\n" +
    name + "\n" +
    username
);

// \n = new line

// Output:
//
// 147
// dave@yahoo.com
// Dave Palma
// Palma Dave
