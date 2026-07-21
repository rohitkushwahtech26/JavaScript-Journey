const super_power = ["jai shree ram", "jai hanuman", "jai shree krishna"]
const power = ["radhe", "shree radhe", "radhe radhe"]
const power2 = ["jay"]
// super_power.push(power)



// console.log(super_power[3][0]);

// const all = super_power.concat(power)

// console.log(super_power.concat((power),(power2)))

const all = [...super_power, ...power]

// console.log(all);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)


console.log(real_another_array);


console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name: "Bharti"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
