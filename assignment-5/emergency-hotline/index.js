
     //  heart click part start
// let count = 0;
// const clickMe = document.getElementById("click-me");
// const counter = document.getElementById("counter");


//   clickMe.addEventListener("click", function() {
//       count++;                 // এক এক করে বাড়বে
//       counter.textContent = count; // span এ দেখাবে
//     });

let count = 0;

  function incrementCounter() {
    count++; 
    document.getElementById("counter").textContent = count; // span এ দেখাবে
  }

  document.getElementById("click-me").addEventListener("click", incrementCounter);
  document.getElementById("click-me1").addEventListener("click", incrementCounter);
  document.getElementById("click-me2").addEventListener("click", incrementCounter);
  document.getElementById("click-me3").addEventListener("click", incrementCounter);
  document.getElementById("click-me4").addEventListener("click", incrementCounter);
  document.getElementById("click-me5").addEventListener("click", incrementCounter);
  document.getElementById("click-me6").addEventListener("click", incrementCounter);
  document.getElementById("click-me7").addEventListener("click", incrementCounter);
  document.getElementById("click-me8").addEventListener("click", incrementCounter);
 

const callButton = document.getElementById("call-button");
  const balanceButton = document.getElementById("balance-button");

  let balance = 40; 
  balanceButton.textContent = balance; 

  callButton.addEventListener("click", function () {
    if (balance < 20) {
      
      alert("X আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    }
    
    alert("Calling National Emergency Service 999....");

   
    balance -= 20;
    balanceButton.textContent = balance;
  
  });











