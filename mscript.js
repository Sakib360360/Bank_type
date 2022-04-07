    // ----------------------------------------get the input amount and put it in deposit section



    // ---------------------------------common function for input field

    function getTheInputValue(getInputId){
        const inputField = document.getElementById(getInputId)
        const inputFieldText = inputField.value
        const inputFieldAmount = parseFloat(inputFieldText)
        //  clear the input field
        inputField.value = ''
        return inputFieldAmount
    }

    // ---------------------------------Function for update the deposit and withdraw field

    function updateTotalField(fieldId){
        const total = document.getElementById(fieldId)
        const totalText = total.innerText
        const totalValue = parseFloat(totalText)

        const newTotal = totalValue + newDepositAmount
        total.innerText = newTotal
        return newTotal
    }

document.getElementById('deposite-btn').addEventListener('click',function(){

    
    const newDepositAmount = getTheInputValue('deposite-amount')
    
    // set in deposit field
    
                // const depositTotal = document.getElementById('total-deposit')
                // const preDepositText = depositTotal.innerText
                // const preDepositAmount = parseFloat(preDepositText)

                // const newDepositTotal = preDepositAmount + newDepositAmount
                // depositTotal.innerText = newDepositTotal
    const updateTheField = updateTotalField('total-deposit')
    
    //----------------------------------------------------- Balance update

    const preBalance = document.getElementById('balance')
    const preBalanceText = preBalance.innerText
    const preBalanceAmount = parseFloat(preBalanceText)

    const totalBalance = preBalanceAmount + newDepositAmount

    preBalance.innerText = totalBalance
     

    
    



})


//---------------------------------------- Handle the withdraw

document.getElementById('withdraw-btn').addEventListener('click',function(){
    // Get the withdraw amount

    const withdrawAmount = getTheInputValue('withdraw-amount')
    
    // calc the withdraw amount
    const preWithdraw = document.getElementById('total-withdraw')
    const preWithdrawText = preWithdraw.innerText
    const preWithdrawAmount = parseFloat(preWithdrawText)

    const totalWithdrawAmount = preWithdrawAmount + withdrawAmount
    

    // set in the withdraw section
    preWithdraw.innerText = totalWithdrawAmount


    // ------Balance update
    const preBalance = document.getElementById('balance')
    const preBalanceText = preBalance.innerText
    const preBalanceAmount = parseFloat(preBalanceText)

    const totalBalance = preBalanceAmount - withdrawAmount

    preBalance.innerText = totalBalance

    

})

