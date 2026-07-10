const AccountId = 1242
let AccountEmail = "rohit@mail.com"
var AccountPassword = "543216"
AccountCity = "Jaipur"

// AccountId = 3 // Not allowed
AccountEmail = "rohit1@mail.com"
AccountPassword = "73547"
AccountCity = "bengaluru"


/*
prefer not to use var
because of issue in block scope and functional scope */

console.log("hello")
console.table([ AccountId,AccountEmail,AccountPassword,AccountCity])
