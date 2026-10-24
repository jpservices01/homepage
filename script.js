// Simple script to display current date
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('date');
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString();
});