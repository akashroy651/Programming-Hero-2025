const sentence = 'I am learning web dev';

let reverse = ''
for(let letter of sentence){
    // console.log(letter)
    reverse = letter + reverse;
   
}

//  console.log(reverse)




 let rev = ''
for( let i=0; i<sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i]
    // console.log(letter)
    rev = letter + rev
    
}
// console.log(rev)


// shortcut

const reversed = sentence.split('').reverse().join('')
console.log(reversed)

