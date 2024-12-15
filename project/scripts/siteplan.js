// main.js

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Save form data to localStorage
    localStorage.setItem("contactForm", JSON.stringify({ name, email, message }));

    alert("Your message has been sent!");
    this.reset(); // Reset form after submission
});

// Display greeting based on time
function displayGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById("greeting").textContent = greeting;
}

// Apply saved theme to the page
function applyTheme(theme) {
    // Remove existing theme classes
    document.body.classList.remove("dark", "light");

    // Add the selected theme class to the body
    document.body.classList.add(theme);
}

// Save user preferences (theme)
function savePreferences() {
    const theme = document.querySelector('input[name="theme"]:checked').value;
    localStorage.setItem("theme", theme);
    alert(`Theme ${theme} saved!`);

    // Apply the theme immediately after saving
    applyTheme(theme);
}

// Call on page load
document.addEventListener("DOMContentLoaded", () => {
    displayGreeting();

    // Retrieve saved theme from localStorage and apply it
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Optionally: Pre-fill the contact form if data is saved in localStorage
    const savedForm = localStorage.getItem("contactForm");
    if (savedForm) {
        const { name, email, message } = JSON.parse(savedForm);
        document.getElementById("name").value = name;
        document.getElementById("email").value = email;
        document.getElementById("message").value = message;
    }
});
