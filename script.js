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

const translations = {
    en: {
        "header-title": "Youth For Women's Justice (YWJ)",
        "header-subtitle": "Empowering Voices, Protecting Rights",
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-resources": "Resources",
        "nav-inspirations": "Inspirations",
        "nav-contact": "Contact Us",
        "nav-help": "Get Help",
        "about-title": "About YWJ",
        "about-content": "Youth for Women’s Justice (YWJ) is a high school-driven initiative aimed at raising awareness about women’s rights and advocating against violence and discrimination toward women and girls in Fiji. Founded by young leaders passionate about social justice, YWJ seeks to inform, empower, and inspire Fijian women and girls to stand up for their rights, recognize signs of abuse, and access the help they need. By providing valuable resources, connections to local helplines, and real stories from women advocates, YWJ aspires to foster a supportive and informed community where women’s voices are heard and valued.",
        "why-fiji-title": "Why Focus on Fiji?",
        "why-fiji-content": "Why Fiji? Certain regions face unique social and cultural challenges that hinder gender equality. In Fiji, many women and girls experience violence, harassment, and societal pressures that keep them from recognizing their value and rights. Traditional norms often prevent open discussions about abuse, making it difficult for those affected to seek help or realize that their situation is not acceptable. YWJ recognizes the importance of focusing on these specific cultural contexts and aims to provide resources tailored to the Fijian community’s unique needs, challenges, and language. Additionally, the remoteness of certain Fijian communities can limit access to support networks, legal protections, and crisis services. YWJ wants to bridge this gap by creating a digital platform where women and girls across Fiji can access information, find helplines, and connect with a supportive network that understands their background and struggles"
    },
    fj: {
        "header-title": "Youth For Women's Justice (YWJ)",
        "header-subtitle": "Vakarau Dodonu Kei na iTavi Dodonu",
        "nav-home": "Vale",
        "nav-about": "Matai Me Baleta",
        "nav-resources": "iVakarau",
        "nav-inspirations": "Veika Vaka Uqeti",
        "nav-contact": "Veitaratara Mai",
        "nav-help": "Kerea Na Veivuke",
        "about-title": "Meda Kila Na YWJ",
        "about-content": "Na YWJ e dua na cakacaka ni vuli...",
        "why-fiji-title": "Na Vuna e Vakarau Kina E Viti",
        "why-fiji-content": "Na YWJ e na vakasama ni..."
    },
    hi: {
        "header-title": "महिलाओं के न्याय के लिए युवाओं",
        "header-subtitle": "स्वर को सशक्त बनाना, अधिकारों की रक्षा करना",
        "nav-home": "मुख्य पृष्ठ",
        "nav-about": "हमारे बारे में",
        "nav-resources": "संसाधन",
        "nav-inspirations": "प्रेरणाएँ",
        "nav-contact": "संपर्क करें",
        "nav-help": "मदद प्राप्त करें",
        "about-title": "YWJ के बारे में",
        "about-content": "YWJ एक हाई स्कूल पहल है...",
        "why-fiji-title": "फिजी पर ध्यान क्यों दें?",
        "why-fiji-content": "फिजी के विशिष्ट सामाजिक और सांस्कृतिक..."
    }
};

function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

function toggleContent(element) {
    const content = element.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.opacity = 0;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
    }
}

