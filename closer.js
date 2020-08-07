function stopWatch() {
    let count = 0
    return function() {
        count++;
        return count
    }
}
const clock1 = stopWatch()
console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch()
console.log(clock2());
console.log(clock2());



// kono ekta function theke onno arakta function call kori tahoje close envirnment kora fala 
// tar vitorar function k call kora ja jodi tar bahirar kono variabe k access kora tokhn 
// taka close bola.