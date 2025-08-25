const validPin = 1234;

  // add money feature

document.getElementById('add-money')
.addEventListener('click', function(e){
    e.preventDefault()
    console.log("add bkbcbxudbvfb")
    const bank= document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const amount =parseInt(document.getElementById('add-amount').value)
    const pin =parseInt(document.getElementById('add-pin').value)
    // console.log(bank,accountNumber,amount,pin)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    // console.log(availableBalance)

    if(accountNumber.length <11){
        alert("please provide valid account number")
        return;
    }

    if(pin !== validPin){
        alert("please valid pin number")
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance
    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})


// cash out money feature

document.getElementById('withdraw-btn')
.addEventListener('click', function(e){
    e.preventDefault()
    // console.log('withdraw btn check')
    const amount = parseInt(document.getElementById('withdraw-amount').value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    // console.log(amount, availableBalance)

    const totalNeAvailableBalance =  availableBalance - amount
    document.getElementById('available-balance').innerText = totalNeAvailableBalance
})



// toggling feature
document.getElementById('add-button')
.addEventListener('click', function(){
document.getElementById('cash-out-parent').style.display = 'none'
document.getElementById('add-money-parent').style.display = 'block'
})
document.getElementById('cash-out-button')
.addEventListener('click', function(){
document.getElementById('add-money-parent').style.display = 'none'
document.getElementById('cash-out-parent').style.display = 'block'

})




