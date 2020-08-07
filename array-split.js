// array k vag kora

const nums =[1,2,3,4,5,7,8,9]
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);

// 
const nums =[1,2,3,4,5,7,8,9]
const removed = nums.splice(3,5);
console.log(removed);
console.log(nums);

// 

const nums =[1,2,3,4,5,7,8,9]
const removed = nums.splice(3,5,44,77,79);
console.log(removed);
console.log(nums);

// 

const nums =[1,2,3,4,5,7,8,9]
const together = nums.join(",")
console.log(together);