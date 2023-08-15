const depositField = document.getElementById('dep-field');




document.getElementById('btn-dep').addEventListener('click', function() {
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // clear the input field
    depositField.value = '';
    if(isNaN(newDepositAmount)) {
        alert('Please provide a valid number')
        return;
      }
    
    // for non-input(element other than input, textarea) use innerText to get the text
    const totalDepositAmount = document.getElementById('total-deposit');

    // when you take a number in the input field you have to parseFloat that input (String) to number & same goes for text.

    const previousDepositTotalString = totalDepositAmount.innerText;
    const previousDepositTotal = parseFloat (previousDepositTotalString);

    // set deposit total balance 
    const currentDepositTotal = previousDepositTotal + newDepositAmount; 
    totalDepositAmount.innerText = currentDepositTotal ;

    // get balance current total
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat (previousBalanceTotalString);

    // calculate current total balance 
    const currentBalance = previousBalanceTotal + newDepositAmount;

    // set total balance 
    balanceTotalElement.innerText = currentBalance;
    

})



