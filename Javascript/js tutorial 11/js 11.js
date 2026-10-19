// JSON Structure 

//let tao = {
//   fname:"Yato", // key: "fname", value: "Yato"
//   lname:"Palma", // last name
//   age:22, // edad
//   sex:"M", // gender
//   hobbies: ["ML","Wildrift","Coding"] // array ng hobbies
//}
//console.log(tao) // ipi-print buong object


// JSON NESTED

// let person = {
//    fname:"Dave", // first name
//    lname:"Palma", // last name
//    age:22, // edad
//    hobbies: ["Coding","Eating","Gaming"], // array
//    pet:{ // nested object
//        2:{ // key "2"
//            name:"Brownie", // pet name
//            type:"Dog" // pet type
//        },
//        3:{ // key "3"
//            name:"Tiger",
//            type:"Cat"
//        }
//    }
//};
//console.log(person) // print buong object


// JSON Read

//let person = {
//    fname:"Dave",
//    lname:"Garcia",
//    age:22,
//    hobbies:["Coding","Eating","Gaming"], // array
//    pet:{
//        2:{
//            name:"Brownie",
//            type:"Dog"
//        },
//        3:{
//            name:"Tiger",
//            type:"Cat"
//        }
//   }
//};
//person.hobbies[0] = "Playing"; // pinapalitan ang unang value sa hobbies array
//console.log(person.hobbies); // print hobbies array
//console.log(person["fname"]); // access gamit bracket notation
//console.log(person["lname"]); 
//console.log(`${person.fname} ${person.lname}`); // template literal
//console.log(person.hobbies[0]); // unang hobby

//console.log(person.pet[3].name); // access nested object
//console.log(person["pet"][3]["name"]); // same pero bracket style
//console.log(person["pet"][3]["type"]); 


// JSON Write

//let person = {
//    fname:"Yato",
//    lname:"Garcia",
//    age:22
//};
//console.log(person); // original object
//person["lname"] = "Palma", // update value
//console.log(person); // updated object
//person["middleinitials"] = "C", // add new property
//console.log(person); 


// JSON Stringify

//let person = {
//    fname:"Dave",
//    lname: "Garcia",
//    age:22
//};

//let strPerson = JSON.stringify(person); // convert object → string
//console.log(strPerson); // magiging JSON string


// JSON Parsing

//let strPerson = `{"fname":"Dave","lname":"Garcia","age":22}`; // string

//let person = JSON.parse(strPerson); // convert string → object
//console.log(person);


// JSON Array 

//let people = [ // array ng objects
//  {
//    fname:"Dave",
//    lname:"Garcia",
//    age:22
//  },
//  {
//    fname:"Yato",
//    lname:"Garcia",
//    age:21
//  },
//  {
//    fname:"Yuno",
//    lname:"Garcia",
//    age:18
//  },
//];

//console.log(`${people[2].fname} ${people[2].lname}`); // pangatlong tao


// Tutorial Challenge

let person = [ // array ng objects
    {
        fname:"Dave", // first object
        lname:"Cosino",
        hobbies:"Gaming",
        age:21
    },
    {
        fname:"Karen", // second object (index 1)
        lname:"Palma",
        hobbies:"Eating",
        age:22
    },
    {
        fname:"Yato", // third object
        lname:"Orlanda",
        hobbies:"Basketball",
        age:23
    },  
];

console.log(`${person[1].fname} ${person[1].lname} ${person[1].hobbies} ${person[1].age}`);
// person[1] → pangalawang object
// .fname → Karen
// .lname → Palma
// .hobbies → Eating
// .age → 22

// Output: Karen Palma Eating 22