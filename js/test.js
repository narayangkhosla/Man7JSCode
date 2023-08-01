// console.log("please log this message as it is....");

// console.warn("This is a warning");

// console.error("This is an error");

const fruits = ["apple", "mango", "grapes", "strawberries", "guava"];
const num = [2, 56, 89, 23, 99, 102, 670]
// for of - values
// for (let p = 0; p < fruits.length; p++) {
//     console.log(fruits[p])
// }

for (let fruit of fruits) {
    if (fruit % 2 == 0) {
        console.log(fruit);
    }
}

for (let n of num) {
    if (n % 2 != 0) {
        console.log(n);
    }
}

console.log(fruits[0]);
console.log(fruits[2]);