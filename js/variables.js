// single - line comment
/*
multi-line comments
*/
// a container to hold the information in the memory
// var let const
// js interpretor ==> 
// HOMEWORK FOR today = 11th April 
// 1. compiler vs interpretor
// 2. var and let
// create a variable called first name that holds a value of Narayan
// var identifier = (assignment operator) = Narayan (value)
var myFamilyNameIs = "Daniel";
console.log(myFamilyNameIs); // printing the value of James

// Rules for creating JS variables
// 1. cannot start with numbers
//2. can start with an alphabet, underscrore or $
// 3. variable names are case-sensitive

var myFamilyNameIS = "Daniel";

var myFAMILYNameIS = "Daniel";

var car = "Honda"; // declaration and assignemt in the same line
// declaration and assignemt can be done separatelyin the same line
var myCar = "Ferrari";
myCar = "Skoda"; // re-assignment of the value
// myCar = "Nissan";
var CAr = "BMW";
var cAR = "Audi";

console.log(myCar);  // error 

let lastName = "Smith"; // declared and assigned a value
lastName = "Jackson"; // re-assigned another value
console.log(lastName);

//var vs let
// 1. var can be updated and redeclared. let can be updated but not redeclared
//2. const can neither be updated nor re-declared.
// 3. const must be intialised during the declaration unlike let

// const = constant = values will not change
const rateOfInterest = 10; // // declared and assigned a value
// rateOfInterest = 8; // re-assigning a value - ERROR = assignment to constant variable is not allowed

//const age = 90; // declaration and assignment at the same line, no option of writing them separately (like let or var)
//age = 19;


let string = "I dont know";

let letter = prompt("Enter a chracter to search");

for (let p = 0; p < string.length; p++) {
    if (string.includes(letter)) {
        console.log("Hurray, we found what you searched for...");
    }
    else {
        console.log("Sorry, the character you are looking after, could not be found.");
    }
}
