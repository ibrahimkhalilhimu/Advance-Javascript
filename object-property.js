const students = [
    {id : 21, name : "omar sunny"},
    {id : 32, name : "manna"},
    {id : 54, name : "depjol"}
]
const output = []
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    output.push(element.name)
    
}
console.log(output);

// ai vave o kora jay

const students =  [
    {id : 21, name : "omar sunny"},
    {id : 32, name : "manna"},
    {id : 54, name : "depjol"}
    
]
const names = students.map(s => s.name);
const id = students.map(s => s.id)
console.log(names);
console.log(id); 

// 40 uporar jara aca tadrer bar korar jonno filter

const bigger = students.filter(s=>s.id>40);
console.log(bigger);

// jodi ekta pata cai tahole 

const biggerOne = students.find( s=> s.id > 40)
console.log(biggerOne);