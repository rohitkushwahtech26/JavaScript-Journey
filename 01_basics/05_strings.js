// const name = "Rohit Kushwah"
// const repoCount = 10

// // console.log(name + repoCount + "hello");

// console.log(`my name is ${name} and my repo is ${repoCount}.`);


const gameName = new String('rohit kushwah')

const newString = gameName.substring(0,5)
const anotherString = gameName.slice(-4,10)
console.log(newString);
console.log(anotherString);


let name2 = "    rohit   "
console.log(name2.trim());

const url ="https://rohit.com/rohit%20kushwah"
console.log(url.replace('%20','-'));
console.log(url.includes("my"));

console.log(gameName.split(3));

