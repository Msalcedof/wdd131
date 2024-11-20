// Dynamic copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Select hamburger button and navigation links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle the menu visibility when the hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.textContent = navLinks.classList.contains("show") ? "X" : "☰";
});

