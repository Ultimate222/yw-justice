// Language change function
function changeLanguage(language) {
    if (language === 'en') {
        document.body.lang = 'en';
        // Update text to English
    } else if (language === 'fj') {
        document.body.lang = 'fj';
        // Update text to Fijian
    } else if (language === 'hi') {
        document.body.lang = 'hi';
        // Update text to Hindi
    }
}

// Scroll animation function
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight / 1.1;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

function toggleContent(element) {
    const section = element.parentElement; // Get the parent section element
    section.classList.toggle("open"); // Toggle the "open" class
}
// Add this JavaScript to script.js
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) { // Adjust scroll distance to trigger the shrink
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

document.querySelectorAll('.collapsible').forEach(item => {
    item.querySelector('.arrow').addEventListener('click', () => {
        const content = item.querySelector('.collapsible-content');
        content.classList.toggle('open');
        
        // Adjust height only if the content is open
        if (content.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = "0";
        }
    });
});


