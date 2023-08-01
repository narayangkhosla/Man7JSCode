// console.log("Document Object Model");
//let elm = document.getElementById("sec");
// if the id is wrong or does not exist, it will return NULL
//console.log(elm);

// inner HTML => it can fetch (and change) the "content" of an element
// console.log(elm.innerHTML); // fetched

// elm.innerHTML = "Grocery List"; // set the value

// let elm2 = document.getElementsByClassName("cl");
//elm2.innerHTML = "Hello";
// write a loop to itrerate through all the elements and change the text to "Hello"
// for (let p = 0; p < elm2.length; p++) {
//     elm2[p].innerHTML = "Hello";
// }

// case 1 - select all the paragraphs and do something....
// let elm3 = document.getElementsByTagName("p");
// for (let a = 0; a < elm3.length; a++) {
//     elm3[a].innerHTML = "NEW new paragraph";
// }

// case 2 - apart from the first <h2> heading, you want to select the other h2 elements, how would go about it?
// case 2 - select all the two H2 and do something...
// let divElm = document.getElementById("div1");




//let h2Elms = divElm.getElementsByTagName("h2");
// ctrl /
// for (let p = 0; p < h2Elms.length; p++) {
//     h2Elms[p].innerHTML = "NEW and better heading";
// }


// case 3 =select all the p who have the class = intro
// let pElm = document.querySelectorAll("p.intro");
// for (let i = 0; i < pElm.length; i++) {
//     pElm[i].innerHTML = "Narayan";
// }

// the query selector only returns the first element that satisfies the condition
// create and append element

// let body = document.body;
// let divElement = document.getElementById("div11");
// let h1Elm = document.createElement("h1");
// h1Elm.id = "newID";
// h1Elm.className = "head";
// // let text = document.createTextNode("Heading created through JavaScript");
// // h1Elm.appendChild(text);

// h1Elm.textContent = "Content added using Text Content property";

// body.appendChild(h1Elm);
// let list = document.getElementById("ulList");
// let item = document.createElement("li");
// item.textContent = "New List 5";
// list.appendChild(item);

// set / change attributes
// let btn = document.getElementById("btn");
// btn.setAttribute("name", "button1");
// btn.setAttribute("class", "cl1");

// btn.removeAttribute("class");
// console.log(btn.getAttribute("class"));

// console.log(btn.hasAttribute("name"));

// inline styling
// inline - internal = external ==> inline
// internal or external ==> neither of these ==> the CSS which is written at last, will take the priority
//let btn = document.getElementById("btn");
// first way
//btn.style.cssText = "background-color:lightgrey; color: red;"
// second way
//btn.setAttribute("style", "background-color: black;");

// third way
// btn.style.backgroundColor = "cyan";
// btn.style.color = "black";

// btn.style.color = "red";
//btn.style.cssText += "color: red;"

// with css text and setAttribute(), it overrides the previously written CSS.
//
// classes
let box = document.getElementById("box");
//console.log(box.className);

console.log(box.classList);
for (let css of box.classList) {
    console.log(css);
}
// remove the dimension class from the div
box.classList.remove("dimension");
box.classList.add("dimension");

// replace 
box.classList.remove("dimension");
//box.classList.replace("color", "dimension");

// contains
console.log(box.classList.contains("dimension"));

// toggle
// will add the class if it is not already there
// will remove the class if it is already there.
box.classList.toggle("dimension");