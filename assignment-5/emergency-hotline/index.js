
     //  heart click part start

let count = 0;

  function incrementCounter() {
    count++; 
    document.getElementById("counter").innerText = count; 
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

  //  copy count

  let copy = 0;
  function counterCopy(){
    alert("নাম্বার কপি হয়েছে");
    copy++;
    document.getElementById("copy-counter").innerText = copy;
  }
  document.getElementById("click-copy").addEventListener("click", counterCopy)
  document.getElementById("click-copy1").addEventListener("click", counterCopy)
  document.getElementById("click-copy2").addEventListener("click", counterCopy)
  document.getElementById("click-copy3").addEventListener("click", counterCopy)
  document.getElementById("click-copy4").addEventListener("click", counterCopy)
  document.getElementById("click-copy5").addEventListener("click", counterCopy)
  document.getElementById("click-copy6").addEventListener("click", counterCopy)
  document.getElementById("click-copy7").addEventListener("click", counterCopy)
  document.getElementById("click-copy8").addEventListener("click", counterCopy)
 
//           call button   


  let balance = 100;
const balanceEl= document.getElementById("balance-button");
const historySection = document.getElementById("history-section");

   function getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString(); 
    }

   document.querySelectorAll(".call-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const number = btn.dataset.number;
        if (balance < 20) {
          alert("X পর্যাপ্ত কয়েন নেই! কমপক্ষে ২০ কয়েন দরকার।");
          return;
        }

        alert(`Calling ${name} ${number}...`);

        balance -= 20;
        balanceEl.textContent = balance;
      
 const entry = document.createElement("div");
  entry.className =
    "flex justify-between items-center p-6 bg-[#FFFFFF] shadow-sm rounded-md";

  entry.innerHTML = `
    <div class="">
      <h1 class="text-[18px] mb-2">${name}</h1>
      <h2>${number}</h2>
    </div>
    <div><h1 class="text-sm text-gray-500">${getCurrentTime()}</h1></div>
  `;

 historySection.appendChild(entry);

 document.getElementById("clear-button").addEventListener('click', function(){
 historySection.innerHTML = "";
 })

    
      });
    });












// const callButton = document.getElementById("call-button");
// const balanceButton = document.getElementById("balance-button");
// const historyBody = document.getElementById("history-body");

// let balance = 40; // শুরুর কয়েন
// balanceButton.textContent = balance;

// // কল বাটন ক্লিক ইভেন্ট
// callButton.addEventListener("click", function () {
//   const serviceName = "জাতীয় জরুরি সেবা";
//   const serviceNumber = "999";

//   if (balance < 20) {
//     alert("X আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
//     return;
//   }

//   // Alert দেখাবে
//   alert(`Calling ${serviceName} (${serviceNumber})...`);

//   // ২০ কয়েন কাটা হবে
//   balance -= 20;
//   balanceButton.textContent = balance;

//   // নতুন হিস্ট্রি এন্ট্রি তৈরি হবে
//   const entry = document.createElement("div");
//   entry.className =
//     "flex justify-between items-center p-6 bg-[#FFFFFF] shadow-sm rounded-md";

//   entry.innerHTML = `
//     <div>
//       <h1 class="text-[18px] mb-2">${serviceName}</h1>
//       <h2>${serviceNumber}</h2>
//     </div>
//     <div><h1 class="text-sm text-gray-500">${getCurrentTime()}</h1></div>
//   `;

//   // Call History section এ যোগ হবে
//   historyBody.appendChild(entry);
//   console.log(historyBody)
// });

// // লাইভ টাইম জেনারেটর
// function getCurrentTime() {
//   const now = new Date();
//   return now.toLocaleTimeString();
// }


