// squre korar jonno
 
const numbers = [3,5,4,6,2,9]
const output =[];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element
    output.push(result)
}
console.log(output);

// nwe vave kora jay
// map ar vitora 3ta paramiter nAYA jay Element ,index, array
 
// const numbers = [3,4,5,6,1]

function square(element) {
    return element * element
}
const square = x => x * x
console.log(squre);

// or
 const numbers = [3,5,4,6,2,9]
 const result= numbers.map(function(element){
    // console.log(element, index, array);
    return element * element
})
// console.log(result);

// or

const result = numbers.map(x => x * x)
console.log(result);

                    // filter
// filter kicu selet kora olpo kicu selet korar jonno

const bigger = numbers.filter(x => x > 5)
console.log(bigger);

const isThere = numbers.find(x => x > 5)
console.log(isThere);

