/*.........................Primitive.................................*/

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue= 10.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 7668746535453265n


/*..........................Non Primitive...............................*/

// also called reference.

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Rohit",
    age: 22,
}

const myFunction = function () {
    console.log("Hello Rohit")
    
}

/*..............................................Return data...............................................*/
                                  //datatypes                   return


console.log(typeof score)          // number                   //number
console.log(typeof scoreValue)
console.log(typeof isLoggedIn)    //Boolean                    // boolean
console.log(typeof outsideTemp)   //null                       // object
console.log(typeof userEmail)     //undefined                  // undefined
console.log(typeof id)            // symbol                    // symbol
console.log(typeof bigNumber)     // bigint                    // bigint

console.log(typeof heros)        //array                       // object
console.log(typeof myObj)        //object                      // object
console.log(typeof myFunction)   //function                    // function



/*.....................................Memory.............................................*/

// Stack (Primitive), Heap (Non-Primitive)

let myEmail = "rohitkushwah@mail.com"
let email = myEmail
email = "kushwahrohit"

console.log(myEmail)
console.log(email)

let myObj2 = {
    name : "Rohit Kushwah",
    age : 23
}

let myObj3 = myObj2

myObj3.name = "Kushwah rohit"

console.log(myObj2.name)
console.log(myObj3.name);

