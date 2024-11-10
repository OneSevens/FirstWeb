// Handle smooth scrolling for anchor links
// Select all anchor links that start with # and add click event listeners
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get target ID without #
        const scrollOptions = {
            behavior: 'smooth' // Enable smooth scrolling
        };

        // If no target ID, scroll to top of page
        if (!targetId) {
            scrollOptions.top = 0;
        } else {
            // Otherwise find target element and scroll to its position
            const target = document.getElementById(targetId);
            if (target) {
                scrollOptions.top = target.offsetTop;
            }
        }
        window.scrollTo(scrollOptions);
    });
});

// Handle slideshow functionality
const slides = document.querySelectorAll('.slide'); // Get all slide elements
let currentSlide = 0; // Track current slide index

// Function to display slide at given index
const showSlide = index => {
    slides.forEach((slide, i) => {
        // Toggle active class based on if slide matches current index
        slide.classList.toggle('active', i === index);
    });
};

// Function to advance to next slide
const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
    showSlide(currentSlide);
};

// Initialize slideshow
showSlide(currentSlide); // Show first slide
const SLIDE_INTERVAL = 5000; // Set slide interval to 5 seconds
setInterval(nextSlide, SLIDE_INTERVAL); // Start automatic slideshow

// Handle form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Create FormData object from form
    const formData = new FormData(event.target);

    // Send form data to Google Apps Script endpoint
    fetch('https://script.google.com/macros/s/AKfycbyal3hxs11q51bq7LsN5sDMnoU5NKfQapc71g88CW3C02WFMrdoaNs9dpq8p3zqy3pA/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text()) // Convert response to text
    .then(data => {
      alert(data); // Display response from Apps Script
    })
    .catch(error => console.error('Error sending data:', error)); // Log any errors
  });