const college = {
    brand: 'ph',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college)
console.log(college.unique.color)
  /// change korar system
college.unique.result.merit = 'top top top most'
console.log(college.unique.result.merit)
// change korar system
college.events[1]= '16 december'
console.log(college.events[1])

//
// console.log(college)

