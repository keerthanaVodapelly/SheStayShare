// JavaScript for autocomplete feature
const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Columbus', 'Fort Worth', 'Indianapolis', 'Charlotte', 'Seattle', 'Denver', 'Washington'];
const locationInput = document.getElementById('locationInput');

if (locationInput) {
    locationInput.addEventListener('input', function() {
        const userInput = this.value.toLowerCase();
        const filteredLocations = locations.filter(location => location.toLowerCase().startsWith(userInput));
        // Display filtered locations in autocomplete dropdown
        // (You can implement this part according to your UI requirements)
    });
}

// JavaScript for login form
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Add login authentication logic here
        console.log('Username/Phone:', username);
        console.log('Password:', password);
        
        // Redirect to dashboard or perform further actions upon successful login
        // window.location.href = 'dashboard.html';
    });
}

// JavaScript for signup form
const signupForm = document.getElementById('signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const idNumber = document.getElementById('idNumber').value;
        const email = document.getElementById('email').value;
        const country = document.getElementById('country').value;
        
        // Basic validation (you can add more validation as needed)
        if (name.trim() === '' || phone.trim() === '' || age.trim() === '' || idNumber.trim() === '' || email.trim() === '' || country.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Example: Perform AJAX request for signup
        // Here, you would typically send the form data to a server for signup processing
        // Upon successful signup, you might redirect the user to another page (e.g., dashboard)
        // For simplicity, let's just log the form data
        console.log('Name:', name);
        console.log('Phone Number:', phone);
        console.log('Age:', age);
        console.log('Identification Number:', idNumber);
        console.log('Email:', email);
        console.log('Country:', country);
        
        // Redirect to dashboard or perform further actions upon successful signup
        // window.location.href = 'dashboard.html';
    });
}
