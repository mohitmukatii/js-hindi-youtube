// there are two ways to declear objects 1st one is "literals" and 2nd one is "constructor"
// when object declear by constructor it gives us singleton

// object.create
// singleton

const mySym = Symbol("key1")


const jsUser = {
    name : "mohit",
    "full name" : "mohit Mukati",
    [mySym] : "myKey1",
    age : 22,
    location : "Indore",
    email : "mohit@google.com",
    isLoggedIn : false,
    lastLogginDays : ["monday", "saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(mySym);

jsUser.email = "mohit@chatgpt.com";
// Object.freeze(jsUser);
jsUser.email = "mohit@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log ("Hello JS user");
}

jsUser.greetingTwo = function(){
    console. log(`Hello JS user, ${this.name}`);
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
