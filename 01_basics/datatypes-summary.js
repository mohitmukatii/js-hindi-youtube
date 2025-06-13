// primitive

// 7 types : string, number, boolean, null, identifined, symbol, bigInt;

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 983650928470209384n 



// reference (non primitive)

// array, objects, functions

const heroes = ["salman", "shahrukh", "amir"]
let myObj = {
    name : "mohit mukati",
    age : 22,
}

const myFunction = function(){
     console.log("hello world");
}


// https://262.ecma-international.org/5.1/#sec-11.4.3