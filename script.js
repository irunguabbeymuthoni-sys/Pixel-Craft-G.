// ===============================
// Mobile Menu Toggle
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("active"));

// ===============================
// Contact Form Feedback
// ===============================
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks! We'll review your request and respond within 24 hours.");
    form.reset();
});
const images = [
    "https://via.placeholder.com/400x300.png?text=Image+1",
    "https://via.placeholder.com/400x300.png?text=Image+2",
    "https://via.placeholder.com/400x300.png?text=Image+3"
];

let currentIndex = 0;

document.getElementById("changeBtn").addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById("myImage").src = images[currentIndex];
});
