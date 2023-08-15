const withdrawField = document.getElementById('with-field');

document.getElementById('btn-with').addEventListener('click', function() {
  // step-2
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat (newWithdrawAmountString);

  // step - 7  (if er kaaj pore kora hoyeche and if eta jehetu return hocche tai eta 1ste deoae best)  
  withdrawField.value = '';

  if(isNaN(newWithdrawAmount)) {
    alert('Please provide a valid number');
    return;
  }

  // step - 3
  const withdrawTotalElement = document.getElementById('total-withdraw');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  
  // step - 5
  const balanceTotalElement = document.getElementById('total-balance');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat (previousBalanceTotalString);


  
  if (newWithdrawAmount > previousBalanceTotal) {
    alert ('Shortage of money');
    return;
 }
  // step - 4 
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;



  // calculate current total balance 
  const currentBalance = previousBalanceTotal - newWithdrawAmount;

  // set total balance 
  balanceTotalElement.innerText = currentBalance;
})