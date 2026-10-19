// let x = 10;
//let x = 12;
// let y = "12";
//let y = "13";
//let x = 12;
//let y = 5;
//let y = 12;
//let y ="12";

//alert(x == y); pagsame value true pag magkaiba false ang output
// alert(x === y); same dapat ng value sample Hello world Hello world
// alert(x != y);  yung 5 ba not equal sa 12 yes kaya true ang output
// alert(x !== y);

// let x = 10;
// let x = 12;
// let y = "12";
// let y = "13";

//let x = 12;        // number
// let y = 5;
// let y = 12;
//let y = "12";      // string (kahit 12, text siya)

// == (LOOSE EQUAL)
// ✔ value lang ang tinitignan
// ✔ kino-convert muna kung magkaiba type
// ✔ same value → true, magkaiba → false
// alert(x == y);

// === (STRICT EQUAL)
// ✔ value + type dapat parehong pareho
// ✔ kahit same value pero magkaiba type → false
// alert(x === y);

// != (LOOSE NOT EQUAL)
// ✔ opposite ng ==
// ✔ false kung same value after convert
// ✔ true kung magkaiba value
// alert(x != y);

// !== (STRICT NOT EQUAL)
// ✔ true kung may kahit isang magkaiba (value or type)
// ✔ false lang kung parehong pareho
//alert(x !== y);   // true → number vs string (magkaiba type)


// let x = 12;
// let x = 15;
// let y = 15;

// < (LESS THAN)
// ✔ true kung mas maliit si x kay y
// ✔ false kung mas malaki o equal
// example: 12 < 15 → true
// alert(x < y);

// > (GREATER THAN)
// ✔ true kung mas malaki si x kay y
// ✔ false kung mas maliit o equal
// example: 15 > 12 → true
// alert(x > y);

// <= (LESS THAN OR EQUAL)
// ✔ true kung mas maliit OR equal
// ✔ false kung mas malaki
// example: 15 <= 15 → true
// alert(x <= y);

// >= (GREATER THAN OR EQUAL)
// ✔ true kung mas malaki OR equal
// ✔ false kung mas maliit
// example: 15 >= 15 → true
// alert(x >= y);


//let age = 24;
//if (age >= 18){
//    console.log("Adult");
//    console.log("You can vote");
//}
//console.log("Thank you");

//let age = 17;
//if (age >= 18){
//    console.log("Legal Age");
//}else{
//    console.log("Minor Age");
//}
//console.log("Thank you");

//let age = 1;

//if (age >= 18){
//   console.log("Legal Age");   
//}else if(age >= 16){
//    console.log("Invalid age");
//}else if(age >= 12){
//   console.log("Minor age");
//}else
//console.log("Thank you");

let grade = 73;

if(grade >= 101){
   console.log("Invalid Grade");
}else if(grade >= 98){
   console.log("Highest Honor");
}else if(grade >= 95){
   console.log("High Honor");
}else if(grade >= 90){
    console.log("Honor");
}else if(grade >=75){
    console.log("Passed"); 
}else
    console.log("Faild");

    