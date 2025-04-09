// Get the buttons by their ID
const signInButton = document.getElementById('signInBtn');
const signUpButton = document.getElementById('signUpBtn');

// Function to open a new page for Sign In
signInButton.addEventListener('click', function() {
  window.location.href = 'signin.html'; // Replace 'signin.html' with the URL or path to your Sign In page
});

// Function to open a new page for Sign Up
signUpButton.addEventListener('click', function() {
  window.location.href = 'signup.html'; // Replace 'signup.html' with the URL or path to your Sign Up page
});
