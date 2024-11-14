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

