/*...................................Array.....................................*/


const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr.length)

const myHero = ["hanuman", "shree ram", "Krishna"]
// console.log(myHero);


const newArray = new Array(9, 8, 7, 6, 5)
// console.log(newArray);
// console.log(newArray[0]);


/*.....................................Array Methods.................................*/


// myArr.push(6)
// myArr.push(7)

// console.log(myArr);
// myArr.pop()
// myArr.unshift(7)
// myArr.pop()

// myArr.shift()
// console.log(myArr);

// console.log(newArray.includes(9));
// console.log(newArray.indexOf(5));

const newarr = myArr.join()

// console.log(myArr);
// console.log(typeof newarr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(0,2)

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(2,2)

console.log(myn2);


console.log("C ",myArr);