// the type of data that we are going to be storing in the variable
// Primitive Types
// string, numbers, boolean, undefined, bigint
// Reference Types ==> arrays, object literals, functions, dates
// JS is a dynamicaly typed language

let onlyStoreName = "Vincent";
let myFirstName1 = 'Jack';

//console.log(onlyStoreNameOnly);
//console.log(myFirstName1);

let myMarks = 70008;
//console.log(myMarks);

// boolean = yes/no ==> true/false (1 or 0)
let isDriver = false;

// typeof operator => will tell us the data type of the variable
// console.log(typeof onlyStoreName); // string
// console.log(typeof myFirstName1); // string
// console.log(typeof myMarks); // number
// console.log(typeof isDriver); // boolean

console.log(Number.MAX_SAFE_INTEGER);
// If you want to store a number greater that what an int can handle/store, use BigInt

let number = BigInt(567385634753457973485934758);
let smallNumber = BigInt(123);
let anotherBigNum = 12n;

console.log(smallNumber + anotherBigNum); // 123 + 12 = 135n
// when you add a bigint with an int - ERROR - cannot mix bigint and other types
console.log(smallNumber + anotherBigNum); // 123 + 12 = 135n