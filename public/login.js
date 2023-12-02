//login.js

//Sal's code
/*let params = (new URL(document.location)).searchParams;

window.onload = function(){
    //if there is a log in error that means there was an invalid email/paswword input
    if (params.has('loginErr')) {
        //after window loads, get the value form key 'loginError' and dis[lay it in errorMessage
        document.getElementById('errMsg').innerHTML = params.get('loginErr')
    }
    //this pastes the error into the div and it will keep your email so you don't have to keep typing it: It's sticky!
    document.getElementById('email').value = params.get('email');
}*/

//my code
let params = new URLSearchParams(window.location.search);

window.onload = function () {
    // Check if there is a login error
    if (params.has('loginErr')) {
        // Display the login error message
        document.getElementById('errMsg').innerHTML = params.get('loginErr');
    }

    // Check if there is a valid parameter indicating a successful login
    if (params.has('valid')) {
        // Get user information from URL parameters
        let userEmail = params.get('email');
        let userName = params.get('name');

        // Display a welcome message
        document.getElementById('welcomeMsg').innerHTML = `Welcome, ${userName}!`;

        // Perform additional actions for a successful login
        

        // Optional: Redirect to another page or perform other actions
        // window.location.href = '/dashboard.html'; // Example redirect
    }

    // Populate the email field if available
    document.getElementById('email').value = params.get('email');
};

//-----function to show password while typing. Referenced from w3 schools
function showPassword () {
    let x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
