
// Navigation functionality
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.getAttribute('data-page');

        pages.forEach(page => {
            page.classList.add('hidden');
        });

        document.getElementById(targetPage).classList.remove('hidden');
    });
});

// Signup Functionality
document.getElementById('signup-btn').addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        alert('Sign Up Successful! Redirecting to Login page...');

        document.getElementById('signup').classList.add('hidden');
        document.getElementById('login').classList.remove('hidden');
    } else {
        alert('Please fill in all fields.');
    }
});

// Login Functionality
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert(`Welcome back, ${user.name}!`);
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    const signupButton = document.getElementById('signupButton');
    const loginButton = document.getElementById('loginButton');

    const showMessage = (message) => {
        // Create a message element
        const messageBox = document.createElement('div');
        messageBox.textContent = message;
        messageBox.style.backgroundColor = '#d4edda'; // Light green background
        messageBox.style.color = '#155724'; // Dark green text
        messageBox.style.border = '1px solid #c3e6cb';
        messageBox.style.padding = '10px';
        messageBox.style.marginTop = '10px';
        messageBox.style.borderRadius = '5px';
        messageBox.style.textAlign = 'center';

        // Insert the message above the form
        signupForm.parentElement.insertBefore(messageBox, signupForm);

        // Remove the message after 3 seconds
        setTimeout(() => {
            messageBox.remove();
        }, 3000);
    };

    signupButton.addEventListener('click', () => {
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        if (name && email && password) {
            showMessage(`You have signed up successfully, ${name}!`);
        } else {
            showMessage('Please fill in all the fields to sign up.');
        }
    });

    loginButton.addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (email && password) {
            showMessage('You have logged in successfully!');
        } else {
            showMessage('Please provide both email and password to log in.');
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Get references to navigation links and pages
    const navLinks = document.querySelectorAll("nav a[data-page]");
    const pages = document.querySelectorAll(".page");
    
    // Hide all pages initially
    const hideAllPages = () => {
        pages.forEach(page => page.classList.add("hidden"));
    };

    // Show the selected page
    const showPage = (pageId) => {
        hideAllPages();
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.remove("hidden");
        }
    };

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const pageId = link.getAttribute("data-page"); // Get the target page ID
            showPage(pageId);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Get references to navigation links and pages
    const navLinks = document.querySelectorAll("nav a[data-page]");
    const pages = document.querySelectorAll(".page");

    // Function to reset form fields
    const resetForms = () => {
        const forms = document.querySelectorAll("input");
        forms.forEach(input => {
            input.value = ""; // Clear all input fields
        });
    };

    // Hide all pages initially
    const hideAllPages = () => {
        pages.forEach(page => page.classList.add("hidden"));
    };

    // Show the selected page and reset form fields
    const showPage = (pageId) => {
        hideAllPages();
        resetForms(); // Reset input fields every time a page is shown
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.remove("hidden");
        }
    };

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const pageId = link.getAttribute("data-page"); // Get the target page ID
            showPage(pageId);
        });
    });
});


