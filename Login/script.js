// Get the form element
var form = document.getElementById("signup-form");

// Add an event listener for form submission
form.addEventListener("submit", function(event) {

// Prevent the default form submission behavior
event.preventDefault();

// Get the values of the input fields
var name = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var password = document.getElementById("password").value.trim();
var confirmPassword = document.getElementById("confirm-password").value.trim();

// Get the error message element
var errorMessage = document.getElementById("error-message");

// Validate the input values
if (name == "" || email == "" || password == "" || confirmPassword == "") {
  
// Display an error message if any field is empty
errorMessage.innerHTML = "Please fill all the fields.";
  
} else if (password != confirmPassword) {

// Display an error message if passwords do not match
errorMessage.innerHTML = "Passwords do not match.";

} else {

// Clear any previous error message
errorMessage.innerHTML = "";

// Perform any other actions for successful sign up here
window.location.href = "../index.html";
}

});