const person = {
    name: 'akash roy',
    age: '20',
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav place': ['nandorbon', 'sundorbon', 'kuakata']
}
// console.log(person)

const propName = 'profession';
person[propName] = 'devops';
console.log(person)

// dot notation
// dot symbol diye object er property er value access kora
console.log(person.name)
const income = person.salary;
console.log(income)


// bracket notation
// third bracket diye access kora
const boyos = person['age'];
console.log(boyos)

console.log(person['fav place'])