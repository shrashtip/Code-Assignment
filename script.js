// script.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve input values
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    // Perform login validation (in this example, just check if username and password match)
    if (localStorage.getItem(username) === password) {
        // Login successful
        document.getElementById("welcome-username").textContent = username;
        window.location.href = 'code2.html';
    } else {
        // Login failed
        alert("Invalid username or password.");
    }
});

// Event listener for register form submission
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve input values
    var username = document.getElementById("new-username").value;
    var password = document.getElementById("new-password").value;
    
    // Perform registration (store username and password in localStorage)
    localStorage.setItem(username, password);
    alert("Registration successful. Please log in.");
    showPage("login-page");
});

// Event listener for register link click
document.getElementById("register-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    showPage("register-page");
});

// Event listener for login link click
document.getElementById("login-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    showPage("login-page");
});

// Function to display a specific page while hiding others
function showPage(pageId) {
    var pages = document.querySelectorAll(".container > div");
    pages.forEach(function(page) {
        if (page.id === pageId) {
            page.style.display = "block";
        } else {
            page.style.display = "none";
        }
    });
}