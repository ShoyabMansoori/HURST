// sign section js *************

// Get the input fields and button elements
const email = document.getElementById('exampleInputEmail1');
const password = document.getElementById('exampleInputPassword1');
const submit = document.getElementById('exampleSubmit');
const forget = document.getElementById('exampleforget');

// Add event listener for submit button click
submit.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    const emaila = email.value;
    const passworda = password.value;

    if (emaila === '' || passworda === '') {
        alert('Please enter both email and password.');
        return; // Stop further execution
    }

    // Perform login functionality
    // Replace this with your actual login logic
    // For example, you can make an AJAX request to a server-side endpoint

    // Clear the input fields
    email.value = '';
    password.value = '';

    // Display a success message
    alert('Login successful!');
    window.location.href = "index.html";
});

// Add event listener for forget password button click
forget.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Perform forget password functionality
    // Replace this with your actual forget password logic
    // For example, you can show a modal or redirect to a password reset page

    // Display a message
    alert('Forgot password? Please follow the instructions to reset your password.');
});


// SignUp section js ****************

// Get references to the form and input fields
const usernameInput = document.getElementById('exampleInputusername2');
const emailInput = document.getElementById('exampleInputEmail2');
const passwordInput = document.getElementById('exampleInputPassword2');
const buttonCreateAccount = document.getElementById('createAccount');

// Add event listener for forget password button click
buttonCreateAccount.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting

     // Perform input validation
     const username = usernameInput.value.trim();
     const email = emailInput.value.trim();
     const password = passwordInput.value.trim();
 
     if (username === '') {
         alert('Please enter a username.');
         usernameInput.focus();
         return;
     }
 
     if (email === '') {
         alert('Please enter an email address.');
         emailInput.focus();
         return;
     }
 
     // Simple email format validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
         alert('Please enter a valid email address.');
         emailInput.focus();
         return;
     }
 
     if (password === '') {
         alert('Please enter a password.');
         passwordInput.focus();
         return;
     }

    // Display a message
    alert('Successful!...');
    window.location.href="index.html";
});

