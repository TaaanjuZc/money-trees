// step-1 : get the email address inside the email input field 
// always remember to use .value to get text from an input field

const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById ('use-pass'); 

// step-2 : add click even handler with the submit btn
document.getElementById('btn-submit').addEventListener('click', function() {
    const email = userEmail.value;
    const password = userPassword.value;

    // DANGER : DO NOT VERIFY email password on the client side (as we are now at the preliminary stage, just to learn we can do it but in the future we'll learn the proper way to do it.)
    // step-4 verify email and pass 
    if(email === 'tanjubank@money.io' && password === 'NepakewChk') {
        window.location.href = 'money.html'
    }
    else {
      return alert ('Calling 911')
    }
})
