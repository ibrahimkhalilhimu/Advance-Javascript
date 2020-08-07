function sum(first, second) {
    let result = first + second
    return result
}
const output = sum(4,5)
console.log(output);

// function ar vitora variable na thakla bole global

let bonous = 20
function sum(first, second) {
    let result = first + second + bonous
    console.log(bonous);
    return result
}
const output = sum(4,5)
console.log(bonous);
console.log(output);

// jodi if thaka tahole

let bonous = 20
function sum(first, second) {
    let result = first + second + bonous
    if (result > 9) {
        const mood = "happy"
        // ata hocca blok if ta
    }
    return result
}
const output = sum(3,7)
console.log(output);


                        // Hoyasting
// kono scope ar vitora jodi var likha jodi kono
//  variable decleare kora hoy tahole oi variable ar 
// decleration k oi scope ta k bahira niya 
// tar paraent ja scope aca ta niya niba oita hocca hoyasting 
