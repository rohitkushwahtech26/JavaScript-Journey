/*................................Dates.................................*/

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString())

// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 23)
// let myCreatedDate = new Date(2026, 0, 23, 3, 2)
let myCreatedDate = new Date("2026-01-20")
// console.log(myCreatedDate.toLocaleTimeString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

// console.log( Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getFullYear());
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
 

console.log(newDate.toLocaleString('default', {
    weekday : "narrow",
})




