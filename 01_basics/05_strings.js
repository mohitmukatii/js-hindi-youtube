const name = "mohit";
const repoCount = 50;

//  console.log(name + repoCount + "value");
 
console.log(`hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('mohit-mm')


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "    mohit   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https:/mohit.com/mohit%20mukati"
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));





