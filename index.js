"use strict";
//lowerCase function
let personName = "Muhammad ahmed";
let lowerCase = personName.toLowerCase();
console.log(lowerCase);
//upperCase function
let upperCase = personName.toUpperCase();
console.log(upperCase);
//tittleCase function
let words = personName.split(" ");
let tittleCaseName = "";
for (let i = 0; i < words.length; i++) {
    tittleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
};

console.log(tittleCaseName);
