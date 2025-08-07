const numbers = [1, 2, 43, 56, 5];
const players = [{}, {}, {}];
const employees = [
    {name: 'ashik', designation: 'content writer',salary: 25000},
    {name: 'atik', designation: 'developer',salary: 29000},
    {name: 'ami', designation: 'marketer',salary: 22000},
]


// console.log(employees[1].name)


for (const employee of employees){
    // console.log(employee.salary, employee.designation)
}

for (const emp of employees){
    const person = emp;
    const personInfo = person.name +':'+ person.salary;
    console.log(personInfo)
}
