// Handle smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const scrollOptions = {
            behavior: 'smooth'
        };

        if (!targetId) {
            scrollOptions.top = 0;
        } else {
            const target = document.getElementById(targetId);
            if (target) {
                scrollOptions.top = target.offsetTop;
            }
        }
        window.scrollTo(scrollOptions);
    });
});

// Handle slideshow functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const showSlide = index => {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

// Initialize slideshow
showSlide(currentSlide);
const SLIDE_INTERVAL = 5000;
setInterval(nextSlide, SLIDE_INTERVAL);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form_contact form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Form submitted successfully!');
            // Here you can add code to send form data to the server
        } else {
            alert('Please fill in all fields.');
        }
    });
});