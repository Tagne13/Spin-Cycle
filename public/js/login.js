const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            // If successful, redirect the browser to the homepage
            document.location.replace('/');
        } else {
            alert('This email address is already in use');
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);