document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Make the 'Sign up with DOST email' button clickable
    const dostButton = document.querySelector('.dost-signup-btn');
    const emailInput = document.getElementById('email');

    if (dostButton && emailInput) {
        dostButton.addEventListener('click', function() {
            const email = emailInput.value;
            
            // Basic check to see if the field is empty
            if (email.trim() === '') {
                alert('Please enter your email address to sign up.');
                return;
            }

            // Simulate DOST Email Validation (check for a specific domain)
            // NOTE: Replace '@dost.gov.ph' with the actual required domain
            if (email.endsWith('@dost.gov.ph')) {
                console.log('Initiating DOST sign-up for:', email);
                alert(`Redirecting for DOST verification for email: ${email}`);
                // In a real app, this is where you'd call: 
                // fetch('/api/signup/dost', { method: 'POST', body: JSON.stringify({ email: email }) });
            } else {
                alert('Sign-up is restricted. Please use a valid @dost.gov.ph email.');
            }
        });
    }

    // 2. Make the 'Google' button clickable
    const googleButton = document.querySelector('.google-signup-btn');

    if (googleButton) {
        googleButton.addEventListener('click', function() {
            console.log('Initiating Google sign-up/login flow.');
            alert('Starting Google OAuth process...');
            // In a real app, this is where you'd redirect the user to Google's sign-in page.
        });
    }

    // 3. Email Input Clickable (Focusable)
    // The email input is already "clickable" in the sense that clicking it focuses the cursor.
    // However, we can add a simple console log to confirm interaction if needed.
    if (emailInput) {
        emailInput.addEventListener('focus', function() {
            console.log('Email input field is focused (clicked/tabbed into).');
        });
    }
});