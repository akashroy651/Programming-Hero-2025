// continue  ---> skip rest of the code for this iteration
// break  --> i am done with this loop . loop end

// for(let i=1; i<10; i++){
//     if(i%2===1){
//         // vag ses 1 mne oi vag ses gulo skip korbe
//         continue
//     }
//     console.log(i)
// }


let n=0;
while(n<50){
      n++;
    if(n % 5 !== 0){
        continue
    }
    console.log(n)
  
}