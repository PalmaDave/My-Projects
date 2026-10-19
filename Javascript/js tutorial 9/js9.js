// let x = 0;         simula si x sa 0
//while(x < 5){      mag-loop HABANG si x ay mas mababa sa 5 < lessthan mas mababa sa 5
//    console.log(x);  i-print ang current value ni x
//    x++;             dagdagan si x ng 1, para hindi infinite loop
//}

//let names = ["David","Alenere","James","Mike"]; // mag-loop habang may value (truthy)
//let x = names.length -1;   // pag undefined na (index 4), falsy = stop

//while(names[x]){   // magsisimula sa 0 to 3 index ipriprint niya pag nag 4 na undefined na sstop na siya 
//    console.log(names[x]);
  //   x++; increment → nagdadagdag ng 1  para hindi infinite loop, +1 bawat ikot 
//     x-- // decrement → nagbabawas ng 1   bababa ang index: 3 → 2 → 1 → 0 
//}

// let names = ["David","Alenere","James","Dave"];
// let x = 0;
// let search = "Dave"; // yung hinahanap na value

//while(names[x]){ // mag-loop habang may value (truthy)
//   if(names[x] === search){ // kung ang current element ay "Dave"
//    console.log(names[x]); // i-print si "Dave"
//    break; // tigilan na ang loop, nahanap na
//   }
//    x++; // kung hindi pa "Dave", pumunta sa susunod na index
//}

// Do while nauuna mag print bago icheck ang condition:

//let x = 0;

//do{
//    console.log("Hello World");
//    x++;
//}while( i < 5);

let arr = [3,3,3,3,3] // array na may 5 elements, lahat ay 3
let sum = 0;           // dito itatago ang total, simula sa 0
let x = 0;             // index counter, simula sa 0

while(arr[x]){         // mag-loop HABANG may value si arr[x] (truthy)
    sum += arr[x];     // shortcut ng sum = sum + arr[x], idagdag sa total
    x++;               // pumunta sa susunod na index
}
alert(sum);            // i-display ang final total

// x=0 → arr[0]=3 → sum = 0+3  = 3  → x++
// x=1 → arr[1]=3 → sum = 3+3  = 6  → x++
// x=2 → arr[2]=3 → sum = 6+3  = 9  → x++
// x=3 → arr[3]=3 → sum = 9+3  = 12 → x++
// x=4 → arr[4]=3 → sum = 12+3 = 15 → x++
// x=5 → arr[5]=undefined ❌ STOP → alert(15)