// Example in app.js
document.querySelector('.dost-signup-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    // 1. Basic Email Validation (e.g., must contain "@dost.gov.ph" or similar)
    if (email.includes('@dost.gov.ph')) {
        // 2. Call the backend API to initiate sign-up
        console.log('Initiating DOST sign-up for:', email);
        // fetch('/api/signup/dost', { method: 'POST', body: JSON.stringify({ email: email }) });
    } else {
        alert('Please enter a valid DOST email.');
    }
});

document.querySelector('.google-signup-btn').addEventListener('click', function() {
    // Initiate Google OAuth Flow
    console.log('Initiating Google sign-up/login.');
    // This typically involves redirecting the user to Google's sign-in page.
});x