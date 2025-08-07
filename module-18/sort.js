// ascending
const numbers = [3, 2, 5, 6, 4, 7, 1, 9];
// console.log(numbers);
numbers.sort();
// console.log(numbers)


const friends = ['limon', 'tanim', 'sakib', 'akash', 'nokib'];
// console.log(friends);
friends.sort();
// console.log(friends)



const ages = [3, 2, 100, 6, 150, 7, 22, 99, 1];
console.log(ages);
ages.sort();
console.log(ages)
const sorted_ages = ages.sort(function (a, b){ return a - b })
console.log(sorted_ages)
//        descending
const sorted_ages_desc = ages.sort(function (a, b){ return b - a })
console.log(sorted_ages_desc)

