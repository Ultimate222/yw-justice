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

function setLanguage(language) {
    // Select elements and update their content
    document.getElementById("header-title").textContent = translations[language].headerTitle;
    document.getElementById("about-section").textContent = translations[language].about;
    document.getElementById("contact-link").textContent = translations[language].contact;
    document.getElementById("inspiration-link").textContent = translations[language].inspiration;
}

// Language Data
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-resources": "Resources",
        "nav-inspirations": "Inspirations",
        "nav-contact": "Contact Us",
        "nav-help": "Get Help",
        "about-ywj-title": "About YWJ",
        "about-ywj-content": "Youth for Women’s Justice (YWJ) is a high school-driven initiative aimed at raising awareness..."
    },
    fj: {
        "nav-home": "Vale",
        "nav-about": "Meda Kila Na YWJ",
        "nav-resources": "iVakarau",
        "nav-inspirations": "Vakabauta",
        "nav-contact": "Vakarau Ni Veitaratara",
        "nav-help": "Kerea Na Veivuke",
        "about-ywj-title": "Meda Kila Na YWJ",
        "about-ywj-content": "Na YWJ e dua na cakacaka ni vuli ni koronivuli ka vakayacori me vukei ira na marama..."
    },
    hi: {
        "nav-home": "होम",
        "nav-about": "YWJ के बारे में",
        "nav-resources": "संसाधन",
        "nav-inspirations": "प्रेरणाएँ",
        "nav-contact": "संपर्क करें",
        "nav-help": "मदद लें",
        "about-ywj-title": "YWJ के बारे में",
        "about-ywj-content": "YWJ एक हाई स्कूल-ड्राइव पहल है जो महिलाओं के अधिकारों को बढ़ावा देने और..."
    }
};

// Function to Change Language
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Collapsible Section
function toggleContent(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

